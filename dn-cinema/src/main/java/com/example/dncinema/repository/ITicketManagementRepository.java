package com.example.dncinema.repository;

import com.example.dncinema.dto.ICustomerPoint;
import com.example.dncinema.dto.ITicketManagement;
import com.example.dncinema.model.TicketManagement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;

@Repository
public interface ITicketManagementRepository extends JpaRepository<TicketManagement, Integer> {

    // Phương thức đã có để lấy tất cả vé
    @Query(value = "select film.name_film as nameFilm, customer.img_customer as imgCustomer, ticket.id_ticket as idTicket, ticket.date_booking as dateBooking, ticket.price_after_discount as priceAfterDiscount, ticket.status_ticket as statusTicket from customer " +
            "join ticket on ticket.id_customer = customer.id_customer " +
            "join seat on ticket.id_seat = seat.id_seat " +
            "join show_time on show_time.id_show_time = seat.id_show_time " +
            "join film on film.id_film = show_time.id_film",
            countQuery = "select count(*) from customer " +
                    "join ticket on ticket.id_customer = customer.id_customer " +
                    "join seat on ticket.id_seat = seat.id_seat " +
                    "join show_time on show_time.id_show_time = seat.id_show_time " +
                    "join film on film.id_film = show_time.id_film",
            nativeQuery = true)
    Page<ITicketManagement> findCustomerByTicket(Pageable pageable);

    // Phương thức đã có để lấy điểm lịch sử của khách hàng
    @Query(value = "select ticket.date_booking as dateBooking, customer.img_customer as imgCustomer, film.name_film as nameFilm, customer.point_customer as pointCustomer from customer " +
            "join ticket on ticket.id_customer = customer.id_customer " +
            "join seat on ticket.id_seat = seat.id_seat " +
            "join show_time on show_time.id_show_time = seat.id_show_time " +
            "join film on film.id_film = show_time.id_film",
            countQuery = "select count(*) from customer " +
                    "join ticket on ticket.id_customer = customer.id_customer " +
                    "join seat on ticket.id_seat = seat.id_seat " +
                    "join show_time on show_time.id_show_time = seat.id_show_time " +
                    "join film on film.id_film = show_time.id_film",
            nativeQuery = true)
    Page<ICustomerPoint> findAllCustomerPointHistory(Pageable pageable);

    // Phương thức đã có để tìm điểm cộng trong khoảng thời gian
    @Query(value = "select ticket.date_booking as dateBooking, customer.img_customer as imgCustomer, film.name_film as nameFilm, customer.point_customer as pointCustomer from customer " +
            "join ticket on ticket.id_customer = customer.id_customer " +
            "join seat on ticket.id_seat = seat.id_seat " +
            "join show_time on show_time.id_show_time = seat.id_show_time " +
            "join film on film.id_film = show_time.id_film where date_booking between :startDate and :dateEnd",
            countQuery = "select count(*) from customer " +
                    "join ticket on ticket.id_customer = customer.id_customer " +
                    "join seat on ticket.id_seat = seat.id_seat " +
                    "join show_time on show_time.id_show_time = seat.id_show_time " +
                    "join film on film.id_film = show_time.id_film where date_booking between :startDate and :dateEnd",
            nativeQuery = true)
    Page<ICustomerPoint> findAllPlusPoint(Pageable pageable, @Param("startDate") LocalDate startDate, @Param("dateEnd") LocalDate dateEnd);

    // Phương thức mới để tìm vé theo username
    @Query(value = "select film.name_film as nameFilm, customer.img_customer as imgCustomer, ticket.id_ticket as idTicket, ticket.date_booking as dateBooking, ticket.price_after_discount as priceAfterDiscount, ticket.status_ticket as statusTicket from customer " +
            "join ticket on ticket.id_customer = customer.id_customer " +
            "join seat on ticket.id_seat = seat.id_seat " +
            "join show_time on show_time.id_show_time = seat.id_show_time " +
            "join film on film.id_film = show_time.id_film " +
            "where customer.id_customer = :username",
            countQuery = "select count(*) from customer " +
                    "join ticket on ticket.id_customer = customer.id_customer " +
                    "join seat on ticket.id_seat = seat.id_seat " +
                    "join show_time on show_time.id_show_time = seat.id_show_time " +
                    "join film on film.id_film = show_time.id_film " +
                    "where customer.id_customer = :username",
            nativeQuery = true)
    Page<ITicketManagement> findByUsername(@Param("username") String username, Pageable pageable);
}
