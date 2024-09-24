import * as DiscountService from "../../service/discount/DiscountService";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { storage } from "../../firebase";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export default function DiscountUpdate() {
  useEffect(() => {
    document.title = "Chỉnh sửa khuyến mãi";
  }, []);
  const [flag, setFlag] = useState(false);
  const [discount, setDiscount] = useState(null);
  const [img, setImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imgErr, setImgErr] = useState("");
  const auth = localStorage.getItem("token");

  const handleSelectFile = (event) => {
    const file = event.target.files[0];
    setFlag(true);
    setImgErr("");
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitImg = async () => {
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
            setImgErr(e.response.data[0].defaultMessage);
          }
        }
      );
    });
  };

  const param = useParams();

  const findDiscount = async () => {
    const rs = await DiscountService.findDiscountById(param.id, auth);
    setDiscount(rs);
  };

  useEffect(() => {
    findDiscount();
  }, [param.id]);

  const navigate = useNavigate();

  if (!discount) {
    return null;
  }

  return (
    <>
      <Header />
      <Formik
        enableReinitialize={true}
        initialValues={{
          nameDiscount: discount?.nameDiscount,
          dateStart: discount?.dateStart,
          dateEnd: discount?.dateEnd,
          describeDiscount: discount?.describeDiscount,
          percentDiscount: discount?.percentDiscount,
          idDiscount: param.id,
          imageDiscount: discount?.imageDiscount,
        }}
        validationSchema={Yup.object({
          nameDiscount: Yup.string()
            .trim()
            .required("Tên khuyến mãi không được để trống")
            .max(255, "Tên khuyến mãi không được quá 255 từ"),
          dateStart: Yup.date()
            .required("Ngày bắt đầu không được để trống")
            .min(Yup.ref("dateEnd"), "Ngày bắt đầu phải nhỏ hơn ngày kết thúc")
            .min(
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
              "Ngày bắt đầu phải lớn hơn ngày hiện tại 7 ngày"
            ),
          dateEnd: Yup.date()
            .required("Ngày kết thúc không được để trống")
            .min(
              Yup.ref("dateStart"),
              "Ngày kết thúc phải lớn hơn ngày bắt đầu"
            ),
          describeDiscount: Yup.string()
            .trim()
            .required("Chi tiết khuyến mãi không được để trống")
            .max(1000, "Chi tiết khuyến mãi không được quá 1000 từ"),
          percentDiscount: Yup.number()
            .required("Phần trăm giảm giá không được để trống")
            .min(0.01, "Phần trăm giảm giá không được nhỏ hơn hoặc bằng 0")
            .max(100, "Phần trăm giảm giá không được lớn hơn 100"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const newValue = {
            ...values,
            imageDiscount: img,
          };
          try {
            if (flag) {
              newValue.imageDiscount = await handleSubmitImg();
              await DiscountService.updateDiscount(newValue, auth);
            } else {
              await DiscountService.updateDiscount(values, auth);
            }
            toast(`Chỉnh sửa khuyến mãi thành công! `);
            navigate(`/admin/discount/list`);
            setSubmitting(false);
          } catch (e) {
            setImgErr(e.response.data[0].defaultMessage);
          }
        }}
      >
        <Form>
          <div
            className="container"
            style={{ marginTop: "120px", maxWidth: "1200px" }}
          >
            <div className="row">
              <div className="col-12 col-md-8 m-auto p-4 bg-light border rounded">
                <h2 className="text-center mb-4" style={{ color: "#f26b38" }}>
                  Chỉnh sửa khuyến mãi
                </h2>
                <div className="form-group mb-3">
                  <label htmlFor="nameDiscount" className="fw-bold">
                    Tiêu đề <span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    name="nameDiscount"
                    className="form-control"
                    type="text"
                  />
                  <ErrorMessage
                    name="nameDiscount"
                    component="span"
                    className="text-danger"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="dateStart" className="fw-bold">
                      Thời gian bắt đầu <span style={{ color: "red" }}>*</span>
                    </label>
                    <Field
                      name="dateStart"
                      className="form-control"
                      type="date"
                    />
                    <ErrorMessage
                      name="dateStart"
                      component="span"
                      className="text-danger"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dateEnd" className="fw-bold">
                      Thời gian kết thúc <span style={{ color: "red" }}>*</span>
                    </label>
                    <Field
                      name="dateEnd"
                      className="form-control"
                      type="date"
                    />
                    <ErrorMessage
                      name="dateEnd"
                      component="span"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="percentDiscount" className="fw-bold">
                    Mức giảm giá (%) <span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    name="percentDiscount"
                    className="form-control"
                    type="number"
                  />
                  <ErrorMessage
                    name="percentDiscount"
                    component="span"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="imageDiscount" className="fw-bold">
                    Hình ảnh <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="file"
                    onChange={handleSelectFile}
                    className="form-control"
                    id="img"
                  />
                  <ErrorMessage
                    name="imageDiscount"
                    component="span"
                    className="text-danger"
                  />
                  {!selectedFile && discount?.imageDiscount && (
                    <img
                      className="mt-2 img-fluid"
                      src={discount?.imageDiscount}
                      alt="Hình ảnh khuyến mãi"
                      style={{ width: "100px", height: "auto" }}
                    />
                  )}
                  {selectedFile && (
                    <img
                      className="mt-2 img-fluid"
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      style={{ width: "100px", height: "auto" }}
                    />
                  )}
                  <span className="text-danger">{imgErr}</span>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="describeDiscount" className="fw-bold">
                    Chi tiết <span style={{ color: "red" }}>*</span>
                  </label>
                  <Field
                    as="textarea"
                    rows="4"
                    className="form-control"
                    name="describeDiscount"
                  />
                  <ErrorMessage
                    name="describeDiscount"
                    component="span"
                    className="text-danger"
                  />
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    onClick={() => navigate("/admin/discount/list")}
                    className="btn btn-secondary me-3"
                    style={{
                      background: "black",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ background: "#f26b38" }}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <Footer />
      <ToastContainer />
    </>
  );
}
