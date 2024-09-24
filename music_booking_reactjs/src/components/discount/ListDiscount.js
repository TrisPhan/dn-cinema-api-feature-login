import { Link, NavLink, useNavigate } from "react-router-dom";
import * as discountService from "../../service/discount/DiscountService";
import DiscountModalDelete from "./DeleteDiscount";
import ReactPaginate from "react-paginate";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function DiscountList() {
  const [discountList, setDiscountList] = useState([]);
  const [deleteId, setDeleteId] = useState(0);
  const [deleteName, setDeleteName] = useState("");
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5); // Đặt số bản ghi mỗi trang là 5
  const [showMessage, setShowMessage] = useState(false);
  const [firstRecord, setFirstRecord] = useState(1);
  const [lastRecord, setLastRecord] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const auth = localStorage.getItem("token");

  const getPropsDeleteDiscount = (id, name) => {
    setDeleteId(id);
    setDeleteName(name);
  };

  function handleUpdate(id) {
    navigate(`/admin/discount/update/${id}`);
  }

  const handlePageClick = (data) => {
    setPage(data.selected);
  };

  useEffect(() => {
    document.title = "Khuyến mãi";
  }, []);

  const findAll = async () => {
    const rs = await discountService.findByName("", page, auth);
    setDiscountList(rs.data.content);
    setPageCount(rs.data.totalPages);
    setSize(rs.data.size);
    setTotalRecords(rs.data.totalElements);
  };

  useEffect(() => {
    findAll();
    const first = page * size + 1;
    const last = Math.min((page + 1) * size, totalRecords);
    setFirstRecord(first);
    setLastRecord(last);
  }, [page, size, totalRecords]);

  return (
    discountList && (
      <>
        <Header />
        <div className="row mx-0" style={{ margin: "150px 0" }}>
          <div
            className="container-fluid mx-auto my-5 col-12 col-lg-10"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.2) 1px 3px 10px 5px",
              padding: 0,
            }}
          >
            <div>
              <div style={{ marginBottom: 20 }}>
                <h2
                  className="d-flex justify-content-center text-center"
                  style={{
                    padding: 16,
                    backgroundColor: "#f26b38",
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: 600,
                  }}
                >
                  DANH SÁCH KHUYẾN MÃI
                </h2>
              </div>
              <div className="row mb-3 p-3">
                <div className="col-12 col-md-4 mb-2">
                  <NavLink to="/admin/discount/create">
                    <button
                      className="btn btn-outline-primary w-100 text-white"
                      style={{
                        background: "rgb(242, 107, 56)",
                        border: "none",
                      }}
                    >
                      <i className="bi bi-plus-circle" /> Thêm mới khuyến mãi
                    </button>
                  </NavLink>
                </div>
                <div className="col-12 col-md-8">
                  <Formik
                    initialValues={{
                      name: "",
                    }}
                    onSubmit={(value) => {
                      const search = async () => {
                        const rs = await discountService.findByName(
                          value.name,
                          0,
                          auth
                        );
                        if (rs.data.content.length === 0) {
                          setShowMessage(true);
                        } else {
                          setShowMessage(false);
                          setDiscountList(rs.data.content);
                          setPageCount(rs.data.totalPages);
                        }
                      };
                      search();
                    }}
                  >
                    <Form className="d-flex justify-content-end">
                      <div
                        className="form-group d-flex w-100"
                        style={{
                          paddingLeft: 10,
                        }}
                      >
                        <Field
                          type="text"
                          className="form-control"
                          style={{
                            paddingLeft: 35,
                            height: "38px",
                          }}
                          name="name"
                          aria-describedby="helpId"
                          placeholder="Tìm kiếm tên khuyến mãi..."
                        />
                        <button
                          className="btn btn-outline-success ms-2"
                          style={{
                            background: "rgb(242, 107, 56)",
                            color: "white",
                            border: "none",
                            width: "50px",
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
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                          </svg>
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
              <div className="table-responsive">
                {showMessage && (
                  <div className="d-flex justify-content-center">
                    <span id="empty">Không tìm thấy tên khuyến mãi</span>
                    <button
                      className="btn btn-outline-primary ms-3"
                      onClick={() => setShowMessage(false)}
                    >
                      Trở về danh sách khuyến mãi
                    </button>
                  </div>
                )}
                {!showMessage && discountList.length > 0 && (
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="text-center">
                        <th>STT</th>
                        <th>Khuyến mãi</th>
                        <th>Hình ảnh</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Nội dung</th>
                        <th>Mức ưu đãi (%)</th>
                        <th>Tác vụ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {discountList.map((discount, index) => (
                        <tr key={index} className="text-center">
                          <td className="align-middle">
                            <strong>{page * size + index + 1}</strong>{" "}
                            {/* Tính số thứ tự */}
                          </td>
                          <td className="align-middle text-start">
                            {discount.nameDiscount}
                          </td>
                          <td className="align-middle">
                            <div className="d-flex justify-content-center">
                              <a
                                href={discount.imageDiscount}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={discount.imageDiscount}
                                  alt="Hình ảnh khuyến mãi"
                                  className="img-fluid"
                                  style={{
                                    maxWidth: "70px",
                                    maxHeight: "100px",
                                  }}
                                />
                              </a>
                            </div>
                          </td>
                          <td className="align-middle">{discount.dateStart}</td>
                          <td className="align-middle">{discount.dateEnd}</td>
                          <td className="align-middle text-start">
                            {discount.describeDiscount}
                          </td>
                          <td className="align-middle">
                            <strong>{discount.percentDiscount}</strong>
                          </td>
                          <td className="align-middle">
                            <button
                              type="button"
                              className="btn btn-outline-warning me-2"
                              onClick={() => handleUpdate(discount.idDiscount)}
                            >
                              <i className="bi bi-pencil" />
                            </button>
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              className="btn btn-outline-danger"
                              data-bs-target="#exampleModal"
                              onClick={() =>
                                getPropsDeleteDiscount(
                                  discount.idDiscount,
                                  discount.nameDiscount
                                )
                              }
                            >
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              <div className="d-flex justify-content-center my-3">
                <p>
                  Hiển thị{" "}
                  <strong>
                    {firstRecord} - {lastRecord}
                  </strong>{" "}
                  trong tổng số <strong>{totalRecords}</strong> bản ghi
                </p>
              </div>
              <ReactPaginate
                previousLabel={"Trước"}
                nextLabel={"Sau"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
              />
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <DiscountModalDelete
          id={deleteId}
          name={deleteName}
          getShowList={() => {
            findAll();
          }}
        />
        <Footer />
      </>
    )
  );
}

export default DiscountList;
