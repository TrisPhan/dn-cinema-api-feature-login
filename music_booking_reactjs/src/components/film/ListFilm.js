import { useEffect, useState } from "react";
import * as FilmService from "../../service/FilmService";
import ReactPaginate from "react-paginate";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

export function ListFilm() {
  const [filmList, setFilmList] = useState([]);
  const [filteredFilmList, setFilteredFilmList] = useState([]);
  const [films, setFilms] = useState([]);
  const [searchAndPage, setSearchAndPage] = useState({
    page: 0,
    search: "",
    sort: null,
    type_film: null,
  });
  const [value, setValue] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const listFilm = async () => {
      try {
        const result = await FilmService.listFilm(searchAndPage);
        setFilmList(result.content || []);
        setFilteredFilmList(result.content || []);
        setPageCount(result.totalPages);
      } catch (error) {
        console.error(error);
        setFilmList([]);
        setFilteredFilmList([]);
      }
    };
    listFilm();
  }, [searchAndPage]);

  const handleDelete = async () => {
    await FilmService.deleteFilm(films.idFilm);
    setFilmList(filmList.filter((prev) => prev.idFilm !== films.idFilm));
    setFilteredFilmList(
      filteredFilmList.filter((prev) => prev.idFilm !== films.idFilm)
    );
    toast("Xoá " + films.nameFilm + " thành công");
  };

  const getData = async (id) => {
    const data = await FilmService.getFilm(id);
    setFilms(data);
  };

  const handlePageClick = (event) => {
    setSearchAndPage((prev) => ({ ...prev, page: event.selected }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Gọi API với các tham số được thiết lập lại khi tìm kiếm
    setSearchAndPage({
      page: 0,
      search: value.trim(),
      sort: null,
      type_film: null,
    });
  };

  useEffect(() => {
    document.title = "Danh sách chương trình";
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <div className="container my-5">
          <div className="shadow-sm p-4 mb-4 bg-white rounded">
            <h2
              className="text-center text-white"
              style={{ backgroundColor: "#f26b38", padding: "16px" }}
            >
              DANH SÁCH CHƯƠNG TRÌNH
            </h2>
            <div className="row mb-3">
              <div className="col-12 col-md-4 mb-3">
                <Link
                  to={`/admin/film/create`}
                  className="btn btn-outline-primary w-100"
                  style={{
                    background: "rgb(242, 107, 56)",
                    color: "white",
                    border: "none",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                  Thêm mới
                </Link>
              </div>
              <div className="col-12 col-md-8">
                <Formik
                  initialValues={{ search: "" }}
                  onSubmit={(values) => {
                    setSearchAndPage((prev) => {
                      return { ...prev, ...values, page: 0 };
                    });
                  }}
                >
                  <Form className="d-flex" onSubmit={handleSearch}>
                    <Field
                      type="text"
                      className="form-control me-2"
                      style={{ paddingLeft: 35 }}
                      name="name"
                      aria-describedby="helpId"
                      placeholder="Tìm kiếm..."
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                      className="btn"
                      style={{
                        background: "rgb(242, 107, 56)",
                        color: "white",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
            <div className="table-responsive">
              {filteredFilmList.length === 0 && searchAndPage.search !== "" ? (
                <h1 className="text-center text-danger">Không tìm thấy</h1>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr className="text-center">
                      <th>STT</th>
                      <th>Tên chương trình</th>
                      <th>Ngày khởi chiếu</th>
                      <th>Hãng chương trình</th>
                      <th>Thời lượng</th>
                      <th>Thể loại</th>
                      <th>Tác vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFilmList.map((film, index) => (
                      <tr key={index} className="text-center">
                        <td>{searchAndPage.page * itemsPerPage + index + 1}</td>
                        <td>{film.nameFilm}</td>
                        <td>{film.dateStartFilm}</td>
                        <td>{film.studioFilm}</td>
                        <td>{film.timeFilm}</td>
                        <td>{film.typeFilm.nameTypeFilm}</td>
                        <td>
                          <Link
                            to={`/admin/film/edit/${film.idFilm}`}
                            className="btn btn-outline-warning me-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                          </Link>
                          <button
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => getData(film.idFilm)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="< "
                containerClassName="pagination"
                pageLinkClassName="page-num"
                nextLinkClassName="page-next"
                previousLinkClassName="page-previous"
                activeClassName="active"
                disabledClassName="d-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete
              </h5>
            </div>
            <div className="modal-body">
              <span>Bạn có muốn xóa:</span>{" "}
              <span style={{ color: "red" }} className="font-monospace">
                {films?.nameFilm} ?
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete()}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
