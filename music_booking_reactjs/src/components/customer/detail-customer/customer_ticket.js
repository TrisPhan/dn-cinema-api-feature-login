import * as customerService from "../../../service/TicketManagementService";
import React, { useEffect, useState } from "react";
import "../detail-customer/style.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { findCustomerByNameAccount } from "../../../service/CustomerServiceTruongNN";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export function TickBookingList() {
  const [ticketBooking, setTicketBooking] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  const [deleteTicket, setDeleteTicket] = useState();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const account = JSON.parse(localStorage.getItem("account"));
  const roles = [];

  if (account != null) {
    for (let i = 0; i < account.roles.length; i++) {
      roles.push(account.roles[i].authority);
    }
  }
  let stt = page * size + 1;

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handlePageClick = (event) => {
    setPage(+event.selected);
  };

  const handleDelete = async () => {
    await customerService.deleteTicket(deleteTicket);
    setTicketBooking(ticketBooking.filter((e) => e.idTicket !== deleteTicket));
    toast("Xóa thành công !");
  };

  useEffect(() => {
    document.title = "Vé đã đặt";
    const findCustomerByUsername = async () => {
      const result = await findCustomerByNameAccount(username);
      setUser(result);
    };
    findCustomerByUsername();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await customerService.findAllTicketBooking(
          page,
          token,
          user?.idCustomer
        );
        setTicketBooking(result.data.content);
        setPageCount(result.data.totalPages);
        setSize(result.data.size);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [page, deleteTicket, user]);

  const handleOpenDialog = (ticket) => {
    setSelectedTicket(ticket);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTicket(null);
  };
  const formatPrice = (n) => {
    // Format the number with commas as thousand separators and append " VNĐ" at the end
    return n.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };
  return (
    <>
      <Header />
      <div
        className="container"
        style={{ marginTop: "120px", marginBottom: "30px" }}
      >
        <div className="row d-flex flex-column flex-md-row">
          {/* Sidebar Section */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <div className="bg-light p-3 rounded">
              <h2 className="text-center mt-3" style={{ fontSize: 24 }}>
                Quản lý tài khoản
              </h2>
              <div className="text-center">
                <img
                  src={
                    ticketBooking?.imgCustomer ||
                    "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                  }
                  className="rounded-circle"
                  style={{ width: 100, border: "1px solid" }}
                  height="100px"
                  alt="Avatar"
                />
              </div>
              <p className="text-center mt-3" style={{ fontSize: 18 }}>
                {username}
              </p>
              <div className="mt-3">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger w-100"
                >
                  <i className="bi bi-arrow-right-circle" />
                  Đăng xuất
                </button>
              </div>
              <hr />
              {user && (
                <Link
                  to={`/customer/change-information/${user.idCustomer}`}
                  className="text-dark d-block mb-2"
                >
                  <i className="bi bi-person-bounding-box" /> Thông tin tài
                  khoản
                </Link>
              )}
              <hr />
              {roles.includes("ADMIN") ? (
                  ""
                ) : (
                  <Link
                    to="/ticket-customer"
                    className="text-dark d-block mb-2"
                  >
                    <i className="bi bi-ticket-detailed" /> Vé đã đặt
                  </Link>
                )}
            </div>
          </div>

          {/* Booking History Section */}
          <div className="col-12 col-md-9">
            <div className="shadow p-4 rounded bg-white">
              <h2 className="text-center mb-4">Vé đã đặt</h2>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên Chương Trình</th>
                      <th>Ngày Mua</th>
                      <th>Tổng Tiền (VND)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketBooking &&
                      ticketBooking.map((ticket, index) => (
                        <tr
                          key={index}
                          onClick={() => handleOpenDialog(ticket)}
                        >
                          <td>{stt++}</td>
                          <td>{ticket?.nameFilm}</td>
                          <td>{ticket?.dateBooking}</td>
                          <td>{formatPrice(ticket?.priceAfterDiscount * 10 / 10)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel="<"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                activeClassName="active"
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/* Dialog for Ticket Details */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Thông Tin Vé</DialogTitle>
        <DialogContent>
          {selectedTicket && (
            <div>
              <p>
                <strong>Tên Chương Trình:</strong> {selectedTicket.nameFilm}
              </p>
              <p>
                <strong>Ngày Mua:</strong> {selectedTicket.dateBooking}
              </p>
              <p>
                <strong>Tổng Tiền:</strong> {formatPrice(selectedTicket.priceAfterDiscount * 10 / 10)}
              </p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Đóng</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
}
