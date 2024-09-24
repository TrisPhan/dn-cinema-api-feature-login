import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  editCustomerAccount,
  findByIdAccount,
  findCustomerByNameAccount,
} from "../../service/CustomerServiceTruongNN";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export function UpdateCustomerAccount() {
  const [customer, setCustomer] = useState(null);
  const param = useParams();
  const [user, setUser] = useState(null);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const account = JSON.parse(localStorage.getItem("account"));
  const roles = [];

  if (account != null) {
    for (let i = 0; i < account.roles.length; i++) {
      roles.push(account.roles[i].authority);
    }
  }
  useEffect(() => {
    document.title = "Quản lý tài khoản";
    const fetchApi = async () => {
      const result = await findByIdAccount(param.id, token);
      setCustomer(result);
    };
    fetchApi();
    const findCustomerByUsername = async () => {
      const result = await findCustomerByNameAccount(username);
      setUser(result);
    };
    findCustomerByUsername();
  }, []);

  if (!customer) {
    return null;
  }

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          idCustomer: customer?.idCustomer,
          accountUser: {
            id: customer?.accountUser?.id,
            nameAccount: customer?.accountUser?.nameAccount,
            passwordAccount: customer?.accountUser?.passwordAccount,
          },
          nameCustomer: customer?.nameCustomer,
          dateOfBirth: customer?.dateOfBirth,
          pointCustomer: customer?.pointCustomer,
          gender: customer?.gender,
          email: customer?.email,
          identityCard: customer?.identityCard,
          address: customer?.address,
          phone: customer?.phone,
          imgCustomer: customer?.imgCustomer,
          typeCustomer: customer?.typeCustomer,
        }}
        validationSchema={Yup.object({
          nameCustomer: Yup.string()
            .trim()
            .required("Vui lòng nhập họ tên")
            .min(4, "Tên tài khoản quá ngắn, phải từ 4 ký tự")
            .max(100, "Tên tài khoản quá dài")
            .matches(
              /^(?=.*[a-zA-Z\s])[^!@#$%^&*(),.?":{}|<>]{4,100}$/,
              "Tên phải có độ dài từ 4 ký tự, không chứa ký tự đặc biệt"
            ),
          dateOfBirth: Yup.date()
            .required("Vui lòng nhập ngày sinh")
            .test("is-over-16", "Bạn chưa đủ 16 tuổi", function (value) {
              const currentDate = new Date();
              const selectedDate = new Date(value);
              const ageDiff =
                currentDate.getFullYear() - selectedDate.getFullYear();
              if (ageDiff < 16) {
                return false;
              }
              return true;
            }),
          email: Yup.string()
            .min(12, "Email ít nhất 12 ký tự")
            .max(32, "Email tối đa 32 ký tự")
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Email phải đúng định dạng xxx@gmail.com"
            )
            .required("Vui lòng nhập email"),
          identityCard: Yup.string()
            .required("Vui lòng nhập số CCCD")
            .matches(/^[0-9]{12}$/, "CCCD phải là 12 ký tự số"),
          address: Yup.string().required("Vui lòng nhập địa chỉ"),
          phone: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^(\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/,
              "Số điện thoại không hợp lệ"
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          const updateCustomer = async () => {
            const newValue = {
              ...values,
              customerType: parseInt(values.customerType),
            };
            editCustomerAccount(newValue, token);
            toast("Chỉnh sửa thông tin tài khoản thành công");
            resetForm(false);
          };
          updateCustomer();
        }}
      >
        <div
          className="container"
          style={{ marginTop: "120px", maxWidth: "1200px" }}
        >
          <div className="row">
            {/* Sidebar Section */}
            <div className="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
              <div className="p-3 rounded">
                <h2 className="text-center mt-3" style={{ fontSize: 24 }}>
                  Quản lý tài khoản
                </h2>
                <div className="text-center">
                  <img
                    src={
                      "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                    }
                    className="rounded-circle"
                    style={{ width: 100, border: "1px solid" }}
                    height="100px"
                    alt="Avatar"
                  />
                </div>
                <p className="text-center mt-3" style={{ fontSize: 18 }}>
                  {username}
                </p>
                <div className="mt-3">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger w-100"
                  >
                    <i className="bi bi-arrow-right-circle" />
                    Đăng xuất
                  </button>
                </div>
                <hr />
                {user && (
                  <Link
                    to={`/customer/change-information/${user.idCustomer}`}
                    className="text-dark d-block mb-2"
                  >
                    <i className="bi bi-person-bounding-box" /> Thông tin tài
                    khoản
                  </Link>
                )}
                <hr />
                {roles.includes("ADMIN") ? (
                  ""
                ) : (
                  <Link
                    to="/ticket-customer"
                    className="text-dark d-block mb-2"
                  >
                    <i className="bi bi-ticket-detailed" /> Vé đã đặt
                  </Link>
                )}
              </div>
            </div>
            {/* Form Section */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="card shadow-lg p-4">
                <Form>
                  <h2 className="text-center mb-4">
                    Chỉnh sửa thông tin tài khoản
                  </h2>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Họ tên</label>
                      <Field
                        type="text"
                        name="nameCustomer"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="nameCustomer"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Ngày sinh</label>
                      <Field
                        type="date"
                        name="dateOfBirth"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Số điện thoại</label>
                      <Field
                        type="text"
                        name="phone"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Giới tính</label>
                      <div className="col-6 col-md-4 d-flex align-items-center">
                        <Field
                          type="radio"
                          name="gender"
                          value="Nam"
                          className="me-2 radio-small"
                          style={{
                            transform: "scale(0.7)",
                            marginRight: "10px",
                          }}
                        />
                        <label className="me-3">Nam</label>
                        <Field
                          type="radio"
                          name="gender"
                          value="Nữ"
                          className="ms-2 me-2 radio-small"
                          style={{
                            transform: "scale(0.7)",
                            marginRight: "10px",
                          }}
                        />
                        <label>Nữ</label>
                      </div>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-danger mt-1"
                      />
                    </div>
                  </div>

                  {/* Responsive Buttons */}
                  <div className="d-flex flex-column flex-md-row justify-content-center gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary col-12 col-md-5"
                      style={{ background: "#f26b38" }}
                    >
                      Lưu
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary col-12 col-md-5"
                      style={{ background: "black", color: "white" }}
                    >
                      Hủy
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      <Footer />
    </>
  );
}
