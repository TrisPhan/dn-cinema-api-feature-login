import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import * as employeeService from "../../service/employee/employeeService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export function CreateEmployee() {
  const token = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const [firebaseImg, setImg] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitAsync = async () => {
    return new Promise((resolve, reject) => {
      const file = selectedFile;
      if (!file) return reject("No file selected");
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
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
          imgEmployee: "",
          accountUser: {
            nameAccount: "",
            passwordAccount: "",
            againPasswordAccount: "",
          },
          nameEmployee: "",
          dateOfBirth: "",
          gender: "",
          email: "",
          identityCard: "",
          phone: "",
          address: "",
        }}
        validationSchema={Yup.object({
          accountUser: Yup.object().shape({
            nameAccount: Yup.string()
              .trim()
              .matches(
                /^[a-zA-Z0-9]+$/,
                "Tên tài khoản không chứa dấu , kí tự đặc biệt và khoảng cách"
              )
              .min(8, "Tài khoản ít nhất 8 ký tự")
              .max(28, "Tài khoản tối đa 28 ký tự")
              .required("Vui lòng nhập tên tài khoản"),
            passwordAccount: Yup.string()
              .trim()
              .min(8, "Mật khẩu ít nhất 8 ký tự")
              .max(28, "Mật khẩu tối đa 28 ký tự")
              .required("Vui lòng nhập mật khẩu tài khoản"),
            againPasswordAccount: Yup.string()
              .required("Vui lòng nhập lại mật khẩu")
              .oneOf([Yup.ref("passwordAccount"), null], "Mật khẩu không khớp"),
          }),
          nameEmployee: Yup.string()
            .trim()
            .required("Vui lòng nhập tên nhân viên"),
          dateOfBirth: Yup.date()
            .required("Vui lòng chọn ngày sinh")
            .test("is-over-18", "Bạn phải trên 18 tuổi", function (value) {
              const currentDate = new Date();
              const selectedDate = new Date(value);
              const ageDiff =
                currentDate.getFullYear() - selectedDate.getFullYear();
              return ageDiff >= 18;
            }),
          gender: Yup.string().required("Vui lòng chọn giới tính"),
          email: Yup.string()
            .required("Vui lòng nhập địa chỉ email")
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Email phải đúng định dạng xxx@gmail.com"
            ),
          identityCard: Yup.string()
            .required("Vui lòng nhập số CMND")
            .matches(/^[0-9]{12}$/, "CCCD phải là 12 kí tự số"),
          phone: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches(
              /^0[0-9]{9,10}$/,
              "Số điện thoại phải là kí tự số và chỉ có 10 hoặc 11 số"
            ),
          address: Yup.string()
            .trim()
            .max(100, "Địa chỉ tối đa 100 ký tự")
            .required("Vui lòng nhập địa chỉ"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const newValue = { ...values, imgEmployee: firebaseImg };
          newValue.imgEmployee = await handleSubmitAsync();
          await employeeService.saveEmployee(newValue, token);
          toast("Thêm nhân viên thành công!");
          navigate(`/admin/employee/list`);
          setSubmitting(false);
        }}
      >
        <div
          className="container"
          style={{ marginTop: "120px", maxWidth: "1200px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="text-center mb-4">THÊM MỚI NHÂN VIÊN</h1>
              <Form>
                {/* Image Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Ảnh <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="file"
                      onChange={handleFileSelect}
                      id="imgEmployee"
                      name="imgEmployee"
                      className="form-control d-none"
                    />
                    <label
                      htmlFor="imgEmployee"
                      className="btn btn-outline-secondary"
                    >
                      Chọn hình ảnh
                    </label>
                    {selectedFile && (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected"
                        className="img-fluid mt-2"
                      />
                    )}
                    {!selectedFile && (
                      <span className="text-danger mt-2">
                        Chưa có hình ảnh được chọn
                      </span>
                    )}
                    <ErrorMessage
                      name="imgEmployee"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                {/* Account Fields */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Tài khoản <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="accountUser.nameAccount"
                      className="form-control"
                      placeholder="Nhập tên tài khoản"
                    />
                    <ErrorMessage
                      name="accountUser.nameAccount"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Mật khẩu <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="password"
                      name="accountUser.passwordAccount"
                      className="form-control"
                      placeholder="Nhập mật khẩu"
                    />
                    <ErrorMessage
                      name="accountUser.passwordAccount"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Nhập lại mật khẩu <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="password"
                      name="accountUser.againPasswordAccount"
                      className="form-control"
                      placeholder="Nhập lại mật khẩu"
                    />
                    <ErrorMessage
                      name="accountUser.againPasswordAccount"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                {/* Personal Information Fields */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Họ tên <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="nameEmployee"
                      className="form-control"
                      placeholder="Nhập họ tên"
                    />
                    <ErrorMessage
                      name="nameEmployee"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Ngày sinh <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="date"
                      name="dateOfBirth"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="dateOfBirth"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                <div className="mb-3 row align-items-center">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Giới tính <span style={{ color: "red" }}>(*)</span>
                  </label>
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
                </div>

                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Email <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Nhập email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                {/* <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    CCCD <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="identityCard"
                      className="form-control"
                      placeholder="Nhập số CMND/CCCD"
                    />
                    <ErrorMessage
                      name="identityCard"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div> */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Số điện thoại <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Nhập số điện thoại"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Địa chỉ <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Nhập địa chỉ"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger mt-1"
                    />
                  </div>
                </div>
                {/* Buttons */}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary w-100 mb-2">
                    Thêm mới
                  </button>
                  <button
                    type="reset"
                    onClick={() => navigate("/admin/employee/list")}
                    className="btn btn-secondary w-100"
                    style={{ background: "black", color: "white" }}
                  >
                    Quay lại
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
      <Footer />
      <ToastContainer />
    </>
  );
}
