import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as filmService from "../../service/FilmService";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { toast } from "react-toastify";

export default function DetailFilm() {
  const param = useParams();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState(null);
  const [listMoviePlaying, setListMoviePlaying] = useState(null);

  useEffect(() => {
    const detail = async () => {
      try {
        const res = await filmService.detail(param.id);
        document.title = res.nameFilm;
        setMovieDetail(res);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchApiListMoviePlaying = async () => {
      const res = await filmService.findFilmsPlaying();
      setListMoviePlaying(res);
    };
    detail();
    fetchApiListMoviePlaying();
  }, [param.id]);

  const handleBookingClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("redirectPath", window.location.pathname);
      toast.warning("Bạn cần đăng nhập để đặt vé.");
      navigate("/login");
    } else {
      navigate(`/booking-ticket/${param.id}`);
    }
  };

  if (!movieDetail) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-12 mb-3">
            <Link to="/film" className="text-decoration-none">
              <i className="bi bi-house-fill text-secondary"></i>
              <span className="fst-normal ms-2">TRANG CHỦ</span>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="position-relative">
              <img
                src={movieDetail?.imgFilm}
                alt={movieDetail?.nameFilm}
                className="img-fluid rounded"
              />
              <Link
                to={movieDetail?.trailer}
                target="_blank"
                className="btn btn-play position-absolute top-50 start-50 translate-middle"
              >
                <i className="bi bi-play-circle fs-1"></i>
              </Link>
            </div>

            <section className="mt-4 p-3 border rounded">
              <h3 className="h5">NHẬN KHUYẾN MÃI</h3>
              <form className="mt-3">
                <input
                  type="email"
                  placeholder="Nhập Email Của Bạn"
                  className="form-control mb-2"
                />
                <button className="btn btn-primary w-100">Đăng ký</button>
              </form>
            </section>
          </div>

          <div className="col-md-8">
            <h3 className="text-secondary">{movieDetail?.nameFilm}</h3>
            <hr />
            <div className="d-flex align-items-center mb-4">
              <span className="badge bg-secondary me-3">
                {movieDetail?.movieLabel}
              </span>
              <span>
                <i className="bi bi-clock-history me-2"></i>
                {movieDetail?.timeFilm} phút
              </span>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Thể loại:</th>
                  <td>{movieDetail?.typeFilm.nameTypeFilm}</td>
                </tr>
                <tr>
                  <th scope="row">Quốc gia:</th>
                  <td>{movieDetail?.nation}</td>
                </tr>
                <tr>
                  <th scope="row">Đạo diễn chương trình:</th>
                  <td>{movieDetail?.director}</td>
                </tr>
                <tr>
                  <th scope="row">Ca sĩ:</th>
                  <td>{movieDetail?.actor}</td>
                </tr>
                <tr>
                  <th scope="row">Nhà sản xuất:</th>
                  <td>{movieDetail?.studioFilm}</td>
                </tr>
                <tr>
                  <th scope="row">Ngày khởi chiếu:</th>
                  <td>
                    {format(new Date(movieDetail?.dateStartFilm), "dd/MM/yyyy")}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-warning w-100 mt-3"
              onClick={handleBookingClick}
            >
              Đặt vé
            </button>

            <hr className="my-4" />
            <h4>NỘI DUNG CHƯƠNG TRÌNH</h4>
            <p>{movieDetail?.describeFilm}</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="h5">CHƯƠNG TRÌNH ĐANG CHIẾU</h3>
          </div>
          {listMoviePlaying &&
            listMoviePlaying.slice(0, 3).map((movie) => (
              <div key={movie.idFilm} className="col-md-4">
                <div className="card mb-3">
                  <Link to={"/film/detail/" + movie.idFilm}>
                    <img
                      src={movie.imgFilm}
                      alt={movie.nameFilm}
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie.nameFilm}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
