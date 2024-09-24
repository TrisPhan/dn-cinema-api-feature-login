import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { apiGetAllFilms, listFilm } from "../../service/FilmService"; // Import thêm listFilm
import { listTypeFilm } from "../../service/TypeFilmService";
import * as FilmService from "../../service/FilmService";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./ListAllFilm.css";

function ListAllFilm() {
  const location = useLocation();
  const [listFilm, setListFilm] = useState(null);
  const [typeFilm, setTypeFilm] = useState(null);
  const [searchAndPage, setSearchAndPage] = useState({
    page: 0,
    search: "",
    sort: "idFilm",
    type_film: 0,
  });

  // Extract search query from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search") || ""; // Get search parameter or default to an empty string
    setSearchAndPage((prev) => ({ ...prev, search: searchQuery })); // Update state with search query
  }, [location.search]);

  const handlePageClick = (event) => {
    setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
  };

  const handleSortChange = (event) => {
    setSearchAndPage((prev) => ({ ...prev, sort: event.target.value }));
  };

  const handleTypeFilmChange = (event) => {
    setSearchAndPage((prev) => ({ ...prev, type_film: +event.target.value }));
  };

  useEffect(() => {
    document.title = "Danh sách chương trình";
    // Kiểm tra nếu có searchQuery thì gọi API tìm kiếm, ngược lại gọi API lấy tất cả
    if (searchAndPage.search) {
      const listFilm = async () => {
        try {
          const result = await FilmService.listFilm(searchAndPage);
          setListFilm(result || []); // Cập nhật danh sách phim
        } catch (error) {
          console.error(error);
          setListFilm([]); // Xử lý lỗi bằng cách đặt danh sách phim thành mảng rỗng
        }
      };
      listFilm();
    } else {
      // Nếu không có searchQuery, gọi API lấy tất cả phim và loại phim
      const fetchApiToCallAllFilm = async () => {
        const result = await apiGetAllFilms(searchAndPage);
        setListFilm(result);
      };
      fetchApiToCallAllFilm();

      const fetchApiToCallTypeFilm = async () => {
        const result = await listTypeFilm();
        setTypeFilm(result);
      };
      fetchApiToCallTypeFilm();
    }
  }, [searchAndPage]);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="list-film container">
          <div className="sort-and-search d-flex flex-wrap justify-content-end align-items-center mb-3">
            <select onChange={handleSortChange} className="filter mb-2 mb-md-0">
              <option value="idFilm">Sắp xếp theo</option>
              <option value="nameFilm">Tên chương trình</option>
              <option value="dateStartFilm">Ngày khởi chiếu</option>
              <option value="dateEndFilm">Ngày kết thúc</option>
              <option value="nation">Quốc gia</option>
              <option value="timeFilm">Thời gian chiếu</option>
            </select>
            <select
              className="filter ms-2 mb-2 mb-md-0"
              onChange={handleTypeFilmChange}
            >
              <option value="0">Loại chương trình</option>
              {typeFilm &&
                typeFilm.map((type) => (
                  <option key={type.idTypeFilm} value={type.idTypeFilm}>
                    {type.nameTypeFilm}
                  </option>
                ))}
            </select>
          </div>
          <div className="row">
            {listFilm &&
              listFilm.content.map((film) => (
                <div
                  className="movie-card col-12 col-sm-6 col-md-4 col-lg-3 p-3"
                  key={film.idFilm}
                >
                  <Link to={"detail/" + film.idFilm}>
                    <figure className="card-banner">
                      <img
                        src={film.imgFilm}
                        alt={film.nameFilm}
                        className="img-fluid"
                      />
                    </figure>
                  </Link>
                  <div className="title-wrapper">
                    <Link
                      to={"/film/detail/" + film.idFilm}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="card-title">{film.nameFilm}</h3>
                    </Link>
                  </div>
                  <div className="card-meta pt-2">
                    <div className="badge badge-outline">{film.movieLabel}</div>
                    <div className="duration">
                      <ion-icon name="time-outline" />
                      <time dateTime="PT137M">{film.timeFilm} phút</time>
                    </div>
                    <div className="rating">
                      <ion-icon name="star" />
                      <data>{film.nation}</data>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {listFilm && (
            <div className="d-flex justify-content-center mt-3">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={listFilm.totalPages}
                previousLabel="< "
                containerClassName="pagination"
                pageLinkClassName="page-num"
                nextLinkClassName="page-num"
                previousLinkClassName="page-num"
                activeClassName="active"
                disabledClassName="d-none"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListAllFilm;
