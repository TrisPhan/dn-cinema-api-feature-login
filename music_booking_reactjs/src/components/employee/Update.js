import * as employeeService from "../../service/employee/employeeService";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export function UpdateEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState();
  const param = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [firebaseImg, setImg] = useState("");
  const [flag, setFlag] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgErr, setImgErr] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchApi = async () => {
      const result = await employeeService.findById(param.id, token);
      setEmployee(result);
    };
    fetchApi();
  }, [param.id, token]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setFlag(true);
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitAsync = async () => {
    return new Promise((resolve, reject) => {
      const file = selectedFile;
      if (!file) {
        return reject("Chưa có file ảnh được chọn");
      }
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
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            setImg(downloadUrl);
            resolve(downloadUrl);
          } catch (e) {
            setImgErr(e.message);
            reject(e);
          }
        }
      );
    });
  };

  const handleFormSubmit = async (values) => {
    try {
      // Nếu có ảnh mới được chọn, upload trước khi submit
      let imgUrl = firebaseImg;
      if (selectedFile) {
        imgUrl = await handleSubmitAsync(); // Upload ảnh và lấy URL
      }

      // Tạo dữ liệu mới với ảnh đã được upload
      const updatedEmployee = {
        ...values,
        imgEmployee: imgUrl || values.imgEmployee, // Nếu không upload thì giữ nguyên ảnh cũ
      };

      // Gọi API cập nhật
      await employeeService.editEmployee(updatedEmployee, token);
      toast(`Cập nhật nhân viên thành công!`);
      navigate(`/admin/employee/list`);
    } catch (error) {
      console.error("Lỗi khi cập nhật nhân viên:", error);
      toast.error("Cập nhật thất bại!");
    }
  };

  if (!employee) {
    return null;
  }

  return (
    <>
      <Header />
      <Formik
        initialValues={{
          idEmployee: employee?.idEmployee,
          imgEmployee: employee?.imgEmployee,
          accountUser: {
            id: employee?.accountUser?.id,
            nameAccount: employee?.accountUser?.nameAccount,
            passwordAccount: employee?.accountUser?.passwordAccount || "",
          },
          nameEmployee: employee?.nameEmployee,
          dateOfBirth: employee?.dateOfBirth,
          gender: employee?.gender,
          email: employee?.email,
          phone: employee?.phone,
          address: employee?.address,
          identityCard: employee?.identityCard || "",
        }}
        validationSchema={Yup.object({
          nameEmployee: Yup.string().trim().required("Vui lòng nhập tên nhân viên"),
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
            .trim()
            .min(12, "Email ít nhất 12 ký tự")
            .max(32, "Email tối đa 32 ký tự")
            .matches(
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              "Email phải đúng định dạng xxx@gmail.com"
            )
            .required("Vui lòng nhập địa chỉ email"),
          phone: Yup.string()
            .trim()
            .matches(
              /^0[0-9]{9,10}$/,
              "Số điện thoại phải là kí tự số và chỉ có 10 hoặc 11 số"
            )
            .required("Vui lòng nhập số điện thoại"),
          address: Yup.string()
            .trim()
            .max(100, "Địa chỉ tối đa 100 ký tự")
            .required("Vui lòng nhập địa chỉ"),
          // Không thêm validation cho identityCard và passwordAccount
        })}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        <div
          className="container"
          style={{ marginTop: "120px", maxWidth: "1200px" }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="text-center mb-4">CẬP NHẬT NHÂN VIÊN</h1>
              <Form>
                {/* Hidden Fields */}
                <Field type="hidden" name="idEmployee" />
                <Field type="hidden" name="accountUser.id" />
                <Field type="hidden" name="accountUser.passwordAccount" />
                <Field type="hidden" name="identityCard" />

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
                      name="firebaseImg"
                      className="form-control d-none"
                    />
                    <label
                      htmlFor="imgEmployee"
                      className="btn btn-outline-secondary"
                    >
                      Chọn hình ảnh
                    </label>
                    {!selectedFile && (
                      <img
                        src={employee?.imgEmployee}
                        className="img-fluid mt-2"
                        style={{ maxWidth: "100%" }}
                        alt="Current"
                      />
                    )}
                    {selectedFile && (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        className="img-fluid mt-2"
                        style={{ maxWidth: "100%" }}
                        alt="Selected"
                      />
                    )}
                  </div>
                </div>

                {/* Account Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Tài khoản <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="accountUser.nameAccount"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                {/* Name Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Họ tên <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="nameEmployee"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Date of Birth Field */}
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
                  </div>
                </div>

                {/* Gender Field */}
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
                </div>

                {/* Email Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Email <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Số điện thoại <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="phone"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="mb-3 row">
                  <label className="col-12 col-md-3 col-form-label text-md-end fw-bold">
                    Địa chỉ <span style={{ color: "red" }}>(*)</span>
                  </label>
                  <div className="col-12 col-md-9">
                    <Field
                      type="text"
                      name="address"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-2"
                    style={{ background: "#f26b38" }}
                  >
                    Cập nhật
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
