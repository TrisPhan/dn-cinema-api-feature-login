import React, { useEffect, useState } from "react";
import "../customer/customer.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  checkEmailExists,
  checkPhoneExists,
  checkUsernameExists,
  findAllCustomerType,
  saveCustomer,
} from "../../service/CustomerServiceTruongNN";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export function CreateCustomerAccount() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [firebaseImg, setImg] = useState(null);
  const [typeCustomer, setTypeCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      setTypeCustomer(await findAllCustomerType());
    };
    list();
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitAsync = async () => {
    return new Promise((resolve, reject) => {
      const file = selectedFile;
      if (!file) return reject("Chưa có file ảnh nào được chọn");
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImg(downloadURL);
          resolve(downloadURL);
        }
      );
    });
  };

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          accountUser: {
            nameAccount: "",
            passwordAccount: "",
            againPasswordAccount: "",
          },
          nameCustomer: "",
          dateOfBirth: "",
          pointCustomer: "0.0",
          gender: "",
          phone: "",
          address: "",
          email: "",
          imgCustomer: "",
          typeCustomer: { idTypeCustomer: 1 },
        }}
        validationSchema={Yup.object({
          accountUser: Yup.object().shape({
            nameAccount: Yup.string()
              .required("Vui lòng nhập tên tài khoản")
              .min(4, "Tên tài khoản quá ngắn, phải từ 4 ký tự")
              .max(100, "Tên tài khoản quá dài")
              .matches(
                /^[a-zA-Z0-9]{4,100}$/,
                "Tên tài khoản không chứa dấu, kí tự đặc biệt và khoảng cách"
              )
              .test(
                "check-username",
                "Tài khoản đã tồn tại",
                async function (value) {
                  if (!value) return true;
                  return !(await checkUsernameExists(value));
                }
              ),
            passwordAccount: Yup.string()
              .required("Vui lòng nhập mật khẩu")
              .min(8, "Mật khẩu ít nhất 8 ký tự")
              .max(28, "Mật khẩu tối đa 28 ký tự"),
            againPasswordAccount: Yup.string()
              .required("Vui lòng nhập lại mật khẩu")
              .oneOf([Yup.ref("passwordAccount")], "Mật khẩu không trùng khớp"),
          }),
          nameCustomer: Yup.string()
            .required("Vui lòng nhập họ tên")
            .min(4, "Tên quá ngắn, phải từ 4 ký tự")
            .max(100, "Tên quá dài"),
          dateOfBirth: Yup.date()
            .required("Vui lòng chọn ngày sinh")
            .test("is-over-16", "Bạn chưa đủ 16 tuổi", function (value) {
              const currentDate = new Date();
              const selectedDate = new Date(value);
              return (
                currentDate.getFullYear() - selectedDate.getFullYear() >= 16
              );
            }),
          phone: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^(\+?84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/,
              "Số điện thoại không hợp lệ"
            )
            .test(
              "check-phone",
              "Số điện thoại đã tồn tại",
              async function (value) {
                if (!value) return true;
                return !(await checkPhoneExists(value));
              }
            ),
          address: Yup.string()
            .required("Vui lòng nhập địa chỉ")
            .min(4, "Địa chỉ quá ngắn")
            .max(100, "Địa chỉ quá dài"),
          email: Yup.string()
            .required("Vui lòng nhập email")
            .min(12, "Email ít nhất 12 ký tự")
            .max(32, "Email tối đa 32 ký tự")
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Email phải đúng định dạng"
            )
            .test("check-email", "Email đã tồn tại", async function (value) {
              if (!value) return true;
              return !(await checkEmailExists(value));
            }),
        })}
        onSubmit={async (values, { resetForm }) => {
          try {
            // values.imgCustomer = await handleSubmitAsync();
            await saveCustomer(values);
            toast("Đăng kí tài khoản thành công, đăng nhập để tiếp tục");
            navigate("/login");
            resetForm();
          } catch (e) {
            toast("Đăng kí thất bại");
          }
        }}
      >
        <Form>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="card shadow card-registration">
                  <div className="card-body">
                    <h3 className="mb-4">Đăng ký tài khoản</h3>

                    {/* Field for uploading image */}
                    <div className="mb-4">
                      <label htmlFor="imgCustomer" className="form-label">
                        Chọn hình ảnh
                      </label>
                      <Field
                        type="file"
                        onChange={handleFileSelect}
                        id="imgCustomer"
                        name="imgCustomer"
                        className="form-control"
                      />
                      {selectedFile && (
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          className="img-thumbnail mt-2"
                        />
                      )}
                      <ErrorMessage
                        name="imgCustomer"
                        component="p"
                        className="text-danger"
                      />
                    </div>

                    {/* Account fields */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="nameAccount" className="form-label">
                          Tài khoản
                        </label>
                        <Field
                          type="text"
                          name="accountUser.nameAccount"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="accountUser.nameAccount"
                          component="p"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label htmlFor="passwordAccount" className="form-label">
                          Mật khẩu
                        </label>
                        <Field
                          type="password"
                          name="accountUser.passwordAccount"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="accountUser.passwordAccount"
                          component="p"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="againPasswordAccount"
                        className="form-label"
                      >
                        Xác nhận mật khẩu
                      </label>
                      <Field
                        type="password"
                        name="accountUser.againPasswordAccount"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="accountUser.againPasswordAccount"
                        component="p"
                        className="text-danger"
                      />
                    </div>

                    {/* Personal information fields */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="nameCustomer" className="form-label">
                          Họ tên
                        </label>
                        <Field
                          type="text"
                          name="nameCustomer"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="nameCustomer"
                          component="p"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label htmlFor="dateOfBirth" className="form-label">
                          Ngày sinh
                        </label>
                        <Field
                          type="date"
                          name="dateOfBirth"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="p"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          type="text"
                          name="email"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-danger"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label htmlFor="phone" className="form-label">
                          Số điện thoại
                        </label>
                        <Field
                          type="text"
                          name="phone"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="address" className="form-label">
                        Địa chỉ
                      </label>
                      <Field
                        type="text"
                        name="address"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="address"
                        component="p"
                        className="text-danger"
                      />
                    </div>

                    {/* Gender selection */}
                    <label className="form-label">Giới tính</label>
                    <div className="col-6 col-md-4 d-flex align-items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Nam"
                        className="me-2 radio-small"
                        style={{ transform: "scale(0.5)", marginRight: "10px" }}
                      />
                      <label className="me-3">Nam</label>
                      <Field
                        type="radio"
                        name="gender"
                        value="Nữ"
                        className="ms-2 me-2 radio-small"
                        style={{ transform: "scale(0.5)", marginRight: "10px" }}
                      />
                      <label>Nữ</label>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger mt-1"
                    />

                    {/* Submit and reset buttons */}
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Đăng ký
                      </button>
                      <button type="reset" className="btn btn-secondary ms-3">
                        Hủy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <Footer />
    </>
  );
}
