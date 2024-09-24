package com.example.dncinema.config;
import com.example.dncinema.security.jwt.JwtTokenFilter;
import com.example.dncinema.security.userPrincipal.UserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * @author ChinhLV
 * Configure spring security
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailService userDetailService;

    public WebSecurityConfig(UserDetailService userDetailService) {
        this.userDetailService = userDetailService;
    }

    @Bean
    public JwtTokenFilter jwtTokenFilter() {
        return new JwtTokenFilter();
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailService).passwordEncoder(passwordEncoder());
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors().and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/public/**","/api/user/ticket/create/**").permitAll()
                //hasAnyAuthority kiểm tra xem người dùng đã xác thực hiện tại có ít nhất một trong những quyền hạn được chỉ định hay không
                .antMatchers("/api/user/**").hasAnyAuthority("USER","EMPLOYEE", "ADMIN")
                //Nếu người dùng có một trong các quyền hạn được chỉ định, họ sẽ được cấp quyền truy cập vào tài nguyên.
                //Nếu không có bất kỳ quyền hạn nào trong số đó, quyền truy cập sẽ bị từ chối, và một lỗi ủy quyền sẽ được trả về (thường là phản hồi 403 Forbidden)
                .antMatchers("/api/employee/**").hasAnyAuthority("EMPLOYEE", "ADMIN")
                //Nếu người dùng chỉ có vai trò USER, họ sẽ không thể truy cập các điểm này.
                .antMatchers("/api/admin/**").hasAuthority("ADMIN")
                //Yêu cầu người dùng phải có chính xác quyền ADMIN để truy cập.
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        httpSecurity.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}