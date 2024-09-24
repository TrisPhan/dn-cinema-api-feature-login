import "./Login.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  handleCallApiLogin,
  handleCallApiToCreateAccountFb,
} from "../../service/LoginService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { receiveAccount } from "../../redux/action";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

/**
 * Login component để đăng nhập bằng tài khoản đã có sẵn hoặc đăng nhập bằng Facebook.
 */
function Login() {
  const [failedAccount, setFailedAccount] = useState(null);
  const [show, setShow] = useState(false);
  const [accountFacebook, setAccountFacebook] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const handleCreateAccountByFacebook = () => {
    handleCallApiToCreateAccountFb(accountFacebook)
      .then((e) => {
        console.log(e);
        if (e.status === 201) {
          toast.warn("Tạo tài khoản " + accountFacebook.email + " thành công.");
        } else {
          toast.error(
            accountFacebook.email +
              " đã tồn tại. Vui lòng đăng ký tài khoản để tiếp tục sử dụng các dịch vụ."
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Hàm xử lý khi đăng nhập thành công
  const handleLoginSuccess = (e) => {
    setFailedAccount(null);
    localStorage.setItem("token", e.token);
    localStorage.setItem("username", e.username);
    localStorage.setItem("account", JSON.stringify(e));
    dispatch(receiveAccount(e));

    // Kiểm tra nếu có redirectPath thì điều hướng đến đó sau khi đăng nhập
    const redirectPath = localStorage.getItem("redirectPath");
    if (redirectPath) {
      localStorage.removeItem("redirectPath"); // Xóa đường dẫn khỏi localStorage
      navigate(redirectPath); // Điều hướng đến đường dẫn đã lưu
    } else {
      navigate("/"); // Điều hướng đến trang chủ nếu không có đường dẫn nào lưu
    }
    toast.success("Đăng nhập thành công.");
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="login-container container d-flex justify-content-center align-items-center flex-column">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required("Tên đăng nhập bắt buộc phải nhập.")
                .test(
                  "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                  "Tên đăng nhập bắt buộc từ 6-30 ký tự.",
                  function (value) {
                    return value.length >= 6 && value.length <= 30;
                  }
                ),
              password: Yup.string()
                .required("Mật khẩu bắt buộc phải nhập.")
                .test(
                  "Mật khẩu bắt buộc từ 6-30 ký tự.",
                  "Mật khẩu bắt buộc từ 6-30 ký tự.",
                  function (value) {
                    return value.length >= 6 && value.length <= 30;
                  }
                ),
            })}
            onSubmit={(values) => {
              handleCallApiLogin(values)
                .then((e) => {
                  handleLoginSuccess(e); // Gọi hàm xử lý khi đăng nhập thành công
                })
                .catch((e) => {
                  setFailedAccount("Tên đăng nhập hoặc mật khẩu không đúng.");
                });
            }}
          >
            <Form>
              <p className="title-login text-center mb-3">Đăng nhập</p>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2} className="modify-title">
                      Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ
                      hội nhận thêm nhiều ưu đãi từ chương trình thành viên.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="username">Tên đăng nhập</label>
                    </td>
                    <td>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Nhập tên đăng nhập"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <ErrorMessage
                        name="username"
                        className="error-mess m-0"
                        component={"p"}
                      />
                      {failedAccount && (
                        <p className="error-mess m-0">{failedAccount}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="password">Mật khẩu</label>
                    </td>
                    <td>
                      <Field
                        type="password"
                        autoComplete="on"
                        name="password"
                        id="password"
                        placeholder="Mật khẩu"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      <ErrorMessage
                        name="password"
                        className="error-mess m-0"
                        component={"p"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="other-login">
                      <Link
                        to={"/confirm-email"}
                        className="login-facebook text-decoration-none"
                      >
                        Quên mật khẩu ?
                      </Link>
                      <Link
                        to="/register"
                        className="float-end text-decoration-none"
                      >
                        Đăng ký tài khoản
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td className="other-login">
                      <button
                        type="submit"
                        className="login mt-3 w-100 text-center fw-bold"
                      >
                        Đăng nhập
                      </button>
                    </td>
                  </tr>
                  {/* <tr>
                    <th></th>
                    <td>
                      <LoginSocialFacebook
                        appId="257872636750784"
                        onResolve={(resolve) => {
                          console.log(resolve.data);
                          setAccountFacebook({ email: resolve.data.email });
                          handleShow();
                        }}
                        onReject={(reject) => console.log(reject)}
                      >
                        <FacebookLoginButton className="login login-facebook w-100 text-center fw-bold d-flex justify-content-center mt-1" />
                      </LoginSocialFacebook>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </Form>
          </Formik>
          <ToastContainer />
          {accountFacebook && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "14px!important" }}>
                  Xác nhận tạo tài khoản
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Chúng tôi sẽ tạo một tài khoản với tên đăng nhập là{" "}
                <span className="fw-bold">{accountFacebook.email}</span> và mật
                khẩu sẽ được gửi qua email của bạn. Vui lòng xác nhận để tiếp
                tục đăng nhập.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Đóng
                </Button>
                <Button
                  variant="warning"
                  onClick={() => {
                    handleClose();
                    handleCreateAccountByFacebook();
                  }}
                >
                  Xác nhận
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
