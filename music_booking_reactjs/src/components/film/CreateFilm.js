// import "./CreateFilm.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import * as TypeFilmService from "../../service/TypeFilmService";
import * as Yup from "yup";
import * as FilmService from "../../service/FilmService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ColorRing } from "react-loader-spinner";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from "../../firebase";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Link } from "react-router-dom";

export function CreateFilm() {
  const navigate = useNavigate();
  const [listTypeFilm, setListTypeFilm] = useState([]);

  useEffect(() => {
    const fetchListTypeFilm = async () => {
      const result = await TypeFilmService.listTypeFilm();
      setListTypeFilm(result);
    };
    fetchListTypeFilm();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [firebaseImg, setImg] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
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

  useEffect(() => {
    document.title = "Thêm mới chương trình";
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <Formik
          initialValues={{
            imgFilm: "",
            nameFilm: "",
            nation: "",
            dateStartFilm: "",
            dateEndFilm: "",
            actor: "",
            studioFilm: "",
            director: "",
            timeFilm: "",
            movieLabel: "",
            trailer: "",
            normalSeatPrice: "",
            vipSeatPrice: "",
            describeFilm: "",
            typeFilm: {
              idTypeFilm: 0,
            },
          }}
          validationSchema={Yup.object({
            nameFilm: Yup.string().required("Nhập tên chương trình"),
            nation: Yup.string().required("Nhập quốc gia"),
            dateStartFilm: Yup.date().required("Nhập ngày khởi chiếu"),
            dateEndFilm: Yup.date().required("Nhập ngày kết thúc"),
            actor: Yup.string().required("Nhập ca sĩ"),
            studioFilm: Yup.string().required("Nhập hãng chương trình"),
            director: Yup.string().required("Nhập đạo diễn"),
            timeFilm: Yup.number()
              .required("Nhập thời lượng chương trình")
              .min(30, "Thời lượng chương trình không được nhỏ hơn 30")
              .max(200, "Thời lượng chương trình không được lớn hơn 200"),
            movieLabel: Yup.string().required("Nhập nhãn chương trình"),
            trailer: Yup.string()
              .required("Nhập trailer chương trình")
              .matches(
                "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&=]*)",
                "Đường dẫn không hợp lệ"
              ),
            normalSeatPrice: Yup.number()
              .required("Nhập giá ghế thường")
              .min(10000, "Giá ghế thường không được nhỏ hơn 10000")
              .max(1000000000, "Giá ghế thường không được quá 1 tỷ"),
            vipSeatPrice: Yup.number()
              .required("Nhập giá ghế vip")
              .min(10000, "Giá ghế vip không được nhỏ hơn 10000")
              .max(1000000000, "Giá ghế vip không được quá 1 tỷ"),
            describeFilm: Yup.string().required("Nhập nội dung chương trình"),
          })}
          onSubmit={(values, { resetForm }) => {
            const create = async () => {
              const newValue = {
                ...values,
                imgFilm: firebaseImg,
              };
              newValue.imgFilm = await handleSubmitAsync();
              newValue.typeFilm.idTypeFilm = parseInt(values.idTypeFilm);
              delete values.idTypeFilm;
              await FilmService.createFilm(newValue);
              toast("Thêm mới chương trình " + values.nameFilm + " thành công");
              navigate("/admin/film/list");
              resetForm();
            };
            create();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div
                className="container"
                style={{ marginTop: "120px", maxWidth: "1200px" }}
              >
                <div className="row justify-content-center align-items-center h-100">
                  {selectedFile && (
                    <div className="col-md-4 mb-4">
                      <img
                        className="mt-2 img-fluid"
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected"
                      />
                    </div>
                  )}
                  <div className="col-12 col-lg-9 col-xl-7">
                    <div
                      className="card shadow-2-strong card-registration mx-auto"
                      style={{ borderRadius: 15 }}
                    >
                      <div className="card-body p-4 p-md-5">
                        <h1
                          className="mb-4 pb-2 pb-md-0 mb-md-5 text-center"
                          style={{ fontSize: "2.5rem" }}
                        >
                          THÊM MỚI CHƯƠNG TRÌNH
                        </h1>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="file"
                              onChange={handleFileSelect}
                              id="imgFilm"
                              name="imgFilm"
                              className="form-control-plaintext d-none"
                            />
                            <label
                              htmlFor="imgFilm"
                              className="btn btn-outline-secondary"
                            >
                              Chọn hình ảnh
                            </label>
                            {!selectedFile && (
                              <span className="mt-2 text-danger">
                                Chưa chọn hình ảnh
                              </span>
                            )}
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="nameFilm"
                              placeholder="Tên chương trình"
                            />
                            <ErrorMessage
                              name="nameFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        {/* Continue with the rest of the fields */}

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="nation"
                              placeholder="Quốc gia"
                            />
                            <ErrorMessage
                              name="nation"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="studioFilm"
                              placeholder="Hãng chương trình"
                            />
                            <ErrorMessage
                              name="studioFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="date"
                              className="form-control"
                              name="dateStartFilm"
                              placeholder="Từ ngày"
                            />
                            <ErrorMessage
                              name="dateStartFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="date"
                              className="form-control"
                              name="dateEndFilm"
                              placeholder="Đến ngày"
                            />
                            <ErrorMessage
                              name="dateEndFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="director"
                              placeholder="Đạo diễn"
                            />
                            <ErrorMessage
                              name="director"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="actor"
                              placeholder="Ca sĩ"
                            />
                            <ErrorMessage
                              name="actor"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="number"
                              className="form-control"
                              name="timeFilm"
                              placeholder="Thời lượng"
                            />
                            <ErrorMessage
                              name="timeFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="movieLabel"
                              placeholder="Nhãn chương trình"
                            />
                            <ErrorMessage
                              name="movieLabel"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="number"
                              className="form-control"
                              name="normalSeatPrice"
                              placeholder="Giá ghế thường"
                            />
                            <ErrorMessage
                              name="normalSeatPrice"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              type="number"
                              className="form-control"
                              name="vipSeatPrice"
                              placeholder="Giá ghế vip"
                            />
                            <ErrorMessage
                              name="vipSeatPrice"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <Field
                              type="text"
                              className="form-control"
                              name="trailer"
                              placeholder="Trailer"
                            />
                            <ErrorMessage
                              name="trailer"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                          <div className="col-md-6 mb-4">
                            <Field
                              as="select"
                              name="idTypeFilm"
                              className="form-select"
                            >
                              {listTypeFilm.map((listType, index) => (
                                <option value={listType.idTypeFilm} key={index}>
                                  {listType.nameTypeFilm}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name="idTypeFilm"
                              component="p"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <Field
                            as="textarea"
                            className="form-control"
                            name="describeFilm"
                            placeholder="Nội dung chương trình"
                            rows={4}
                          />
                          <ErrorMessage
                            name="describeFilm"
                            component="p"
                            className="text-danger"
                          />
                        </div>

                        <div className="mt-4 pt-2 d-flex justify-content-around">
                          {isSubmitting ? (
                            <ColorRing
                              visible={true}
                              height="80"
                              width="80"
                              ariaLabel="blocks-loading"
                              wrapperStyle={{}}
                              wrapperClass="blocks-wrapper"
                              colors={[
                                "#e15b64",
                                "#f47e60",
                                "#f8b26a",
                                "#abbd81",
                                "#849b87",
                              ]}
                            />
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{ background: "#f26b38" }}
                            >
                              Thêm mới
                            </button>
                          )}
                          <button className="btn btn-dark" type="button">
                            <Link
                              className="text-decoration-none"
                              style={{ color: "white" }}
                              to={`/admin/film/list`}
                            >
                              Quay lại
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
}
