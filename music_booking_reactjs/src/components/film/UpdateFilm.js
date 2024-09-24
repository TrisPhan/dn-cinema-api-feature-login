import "./UpdateFilm.css";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import * as FilmService from "../../service/FilmService";
import * as TypeFilmService from "../../service/TypeFilmService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ColorRing } from "react-loader-spinner";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from "../../firebase";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import * as ShowTimeService from "../../service/ShowTimeService";

export function UpdateFilm() {
  const navigate = useNavigate();
  const [films, setFilms] = useState();
  const [listTypeFilm, setListTypeFilm] = useState([]);
  const params = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [firebaseImg, setImg] = useState(null);
  const [showTimes, setShowTimes] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false); // State để điều khiển modal
  const [showDate, setShowDate] = useState(""); // State cho ngày chiếu
  const [showTime, setShowTime] = useState(""); // State cho giờ chiếu

  const handleShow = () => setShowModal(true); // Hàm mở modal
  const handleClose = () => setShowModal(false); // Hàm đóng modal
  useEffect(() => {
    const search = async () => {
      const film = await FilmService.findFilmById(params.id);
      setFilms(film);
      const showTimesList = await ShowTimeService.apiGetShowTimesByFilm(
        film.idFilm
      );
      setShowTimes(showTimesList);
    };
    search();
  }, [params.id]);

  useEffect(() => {
    const fetchListTypeFilm = async () => {
      const result = await TypeFilmService.listTypeFilm();
      setListTypeFilm(result);
    };
    fetchListTypeFilm();
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
    document.title = "Chỉnh sửa chương trình";
  }, []);

  const handleReset = () => {
    setSelectedFile(null); // Clear the selected file
    document.getElementById("imgFilm").value = ""; // Manually clear the input field
  };
  const handleOpenSeats = async (idShowTime) => {
    try {
      await ShowTimeService.createSeats(idShowTime);
      toast.success("Mở chiếu thành công và tạo ghế");
      const updatedShowTimes = await ShowTimeService.apiGetShowTimesByFilm(
        films.idFilm
      );
      setShowTimes(updatedShowTimes);
    } catch (error) {
      console.error("Error opening seats:", error);
      toast.error("Đã mở chiếu và tạo ghế");
    }
  };

  if (!films) {
    return null;
  }
  const handleAddShowTime = async () => {
    try {
      const showTimeData = {
        idFilm: films.idFilm,
        idShowRoom: 1,
        showDate: showDate,
        showTime: showTime,
      };
      await ShowTimeService.createShowTime(showTimeData);
      toast.success("Thêm lịch chiếu thành công");

      const updatedShowTimes = await ShowTimeService.apiGetShowTimesByFilm(
        films.idFilm
      );
      setShowTimes(updatedShowTimes);
      handleClose();
    } catch (error) {
      console.error("Error creating show time:", error);
      toast.error("Đã xảy ra lỗi khi thêm lịch chiếu");
    }
  };
  return (
    <>
      <Header />
      {films && (
        <div className="container mt-5 mb-5">
          <Formik
            initialValues={{
              idFilm: films?.idFilm,
              imgFilm: films?.imgFilm,
              nameFilm: films?.nameFilm,
              nation: films?.nation,
              dateStartFilm: films?.dateStartFilm,
              dateEndFilm: films?.dateEndFilm,
              actor: films?.actor,
              studioFilm: films?.studioFilm,
              director: films?.director,
              timeFilm: films?.timeFilm,
              movieLabel: films?.movieLabel,
              trailer: films?.trailer,
              typeFilm: {
                idTypeFilm: films?.typeFilm.idTypeFilm,
              },
              normalSeatPrice: films?.normalSeatPrice,
              vipSeatPrice: films?.vipSeatPrice,
              describeFilm: films?.describeFilm,
              nameTypeFilm: films?.typeFilm.nameTypeFilm,
            }}
            validationSchema={Yup.object({
              nameFilm: Yup.string().required("Nhập tên chương trình"),
              nation: Yup.string().required("Nhập quốc gia"),
              dateStartFilm: Yup.date().required(
                "Ngày bắt đầu không được để trống"
              ),
              dateEndFilm: Yup.date()
                .required("Ngày kết thúc không được để trống")
                .min(
                  Yup.ref("dateStartFilm"),
                  "Ngày kết thúc phải lớn hơn ngày bắt đầu"
                ),
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
            onSubmit={(values, { setSubmitting }) => {
              const edit = async () => {
                values.typeFilm.idTypeFilm = parseInt(
                  values.typeFilm.idTypeFilm
                );
                await FilmService.updateFilm(values);
                setSubmitting(false);
                toast(
                  "Chỉnh sửa chương trình " + values.nameFilm + " thành công"
                );
                navigate("/admin/film/list");
              };
              edit();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div
                  className="container"
                  style={{ marginTop: "120px", maxWidth: "1200px" }}
                >
                  <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                      <div
                        className="card shadow-2-strong card-registration mx-auto"
                        style={{ borderRadius: 15 }}
                      >
                        <div className="card-body p-4 p-md-5">
                          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                            Chỉnh sửa chương trình
                          </h3>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <Field
                                type="text"
                                className="form-control"
                                name="imgFilm"
                                placeholder="Tên chương trình"
                              />
                              <ErrorMessage
                                name="imgFilm"
                                component="p"
                                className="text-danger"
                              />
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

                          {/* Continue with other fields */}
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
                                name="typeFilm.idTypeFilm"
                                className="form-select"
                              >
                                {listTypeFilm.map((listType, index) => (
                                  <option
                                    value={listType.idTypeFilm}
                                    key={index}
                                  >
                                    {listType.nameTypeFilm}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name="typeFilm.idTypeFilm"
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
                                Chỉnh sửa
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
          <h4 className="mt-4">Danh sách lịch chiếu</h4>
          {showTimes.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ngày Chiếu</th>
                  <th>Giờ Chiếu</th>
                  <th>Phòng Chiếu</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {showTimes.map((showTime) => (
                  <tr key={showTime.idShowTime}>
                    <td>{showTime.idShowTime}</td>
                    <td>{showTime.showDate}</td>
                    <td>{showTime.showTime}</td>
                    <td>
                      {showTime.showRoom ? showTime.showRoom.nameShowRoom : "N/A"}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleOpenSeats(showTime.idShowTime)}
                      >
                        Mở Chiếu
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center mt-3">Chưa có lịch chiếu</p>
          )}

          <div className="d-flex justify-content-end mb-3">
            <Button onClick={handleShow} className="btn btn-success">
              Thêm lịch chiếu
            </Button>
          </div>

          {/* Modal thêm lịch chiếu */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thêm lịch chiếu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label htmlFor="showDate" className="form-label">
                    Ngày chiếu
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="showDate"
                    value={showDate}
                    onChange={(e) => setShowDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="showTime" className="form-label">
                    Giờ chiếu
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="showTime"
                    value={showTime}
                    onChange={(e) => setShowTime(e.target.value)}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="primary" onClick={handleAddShowTime}>
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <Footer />
    </>
  );
}
