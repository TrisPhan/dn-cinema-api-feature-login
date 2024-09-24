import "./ConfirmTicket.css";
import React, { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import {
  cancelSeat,
  checkDiscount,
  checkSeat,
  findByIdSeat,
  getCustomer,
  pay,
} from "../../service/TicketService";
import { useNavigate } from "react-router";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { toast } from "react-toastify";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export function ConfirmTicket(props) {
  const { filmData, listSelectingData } = props;
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [seats, setSeat] = useState([]);
  const [price, setPrice] = useState(0);
  const [discounts, setDiscount] = useState({});
  const [customer, setCustomer] = useState({});
  const [countDown, setCountDown] = useState(100);
  const timerId = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
      const cancels = async () => {
        const result = await checkSeat(listSelectingData[0]);
        if (result === 3) {
          await cancelSeat(listSelectingData);
        }
      };
      cancels();
      toast.error("Đã hết thời gian, xin vui lòng chọn lại vé");
      navigate("/");
    }
  }, [countDown, listSelectingData, navigate]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await findByIdSeat(
          listSelectingData,
          filmData.film.idFilm,
          token
        );
        const customers = await getCustomer(username, token);
        setCustomer(customers);
        setSeat(result.listSeats);
        setPrice(result.priceTicket);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Đã xảy ra lỗi khi lấy dữ liệu.");
      }
    };
    fetchApi();
  }, [listSelectingData, filmData.film.idFilm, token, username]);

  const handleDiscount = async () => {
    const discountCode = document.getElementById("nameDiscount").value;
    if (discountCode.trim() !== "") {
      try {
        const result = await checkDiscount(discountCode, token);
        if (!discounts.idDiscount) {
          if (!result) {
            toast.error("Mã giảm giá không hợp lệ");
          } else {
            const newPrice = price - (result.percentDiscount * price) / 100;
            setPrice(newPrice); // Cập nhật giá mới
            setDiscount(result); // Cập nhật mã giảm giá
            toast.success("Áp dụng mã giảm giá thành công");
          }
        } else {
          toast.warn("Bạn chỉ được áp dụng 1 mã giảm giá");
        }
      } catch (error) {
        console.error("Error applying discount:", error);
        toast.error("Đã xảy ra lỗi khi áp dụng mã giảm giá.");
      }
    } else {
      toast.warn("Vui lòng nhập mã giảm giá.");
    }
  };
  

  const handleApprove = async (data, actions) => {
    try {
      // Capture the PayPal order details
      const details = await actions.order.capture();
      console.log("Payment Details:", details);

      // Prepare the ticket DTO with the updated price and discount
      const ticketDTO = {
        idCustomer: customer.idCustomer,
        idFilm: filmData.film.idFilm,
        listSeat: listSelectingData,
        idDiscount: discounts.idDiscount || null, // Sử dụng mã giảm giá đã cập nhật
        price: price, // Sử dụng giá đã cập nhật sau khi áp dụng mã giảm giá
        vnp_ResponseCode: details.id, // Adjust according to the response
      };

      console.log("Final Ticket DTO:", ticketDTO); // Kiểm tra giá trị trước khi gửi

      // Call the pay function to save the ticket
      await pay(ticketDTO, token);

      // Notify the user and navigate to the confirmation page
      toast.success("Thanh toán thành công qua PayPal");
      navigate("/ticket-customer");
    } catch (error) {
      console.error("Error capturing order:", error);
      toast.error("Đã xảy ra lỗi khi xử lý thanh toán.");
    }
  };

  const formatPrice = (n) => {
    return n.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };
  return (
    customer &&
    price &&
    seats && (
      <>
        <Formik
          enableReinitialize
          initialValues={{
            idCustomer: customer.idCustomer,
            idFilm: filmData.film.idFilm,
            listSeat: listSelectingData,
            idDiscount: discounts.idDiscount || null,
            price: price,
          }}
          onSubmit={(values) => {
            // Lưu đặt vé sau khi thanh toán thành công
            console.log("Booking Values:", values);
            // TODO: Gọi API lưu đặt vé
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <input type="hidden" value={discounts.idDiscount} id="dis" />
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-9"
                    style={{ background: "#f26b38", minHeight: "100vh" }}
                  >
                    <h1 style={{ color: "white", padding: "20px" }}>
                      Vui lòng thanh toán
                      <span style={{ float: "right" }}>
                        {formatTime(countDown)}
                      </span>
                    </h1>
                    <table className="table" style={{ background: "white" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "25%" }}>Hình thức thanh toán</td>
                          <td>
                            <PayPalScriptProvider
                              options={{
                                "client-id":
                                  "AXNKJibNc7TDFHfuRtpL9Fz7XDwro46TMjrXnnPuKNGp4ewc_oPEgubDBRd9coE7xvwXTJ_h6us6F55Y", // Thay bằng Client ID thực tế
                                currency: "USD", // Đặt loại tiền tệ phù hợp
                              }}
                            >
                              <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) => {
                                  console.log("Creating order...");
                                  return actions.order.create({
                                    purchase_units: [
                                      {
                                        amount: {
                                          value: price.toFixed(2),
                                        },
                                      },
                                    ],
                                  });
                                }}
                                onApprove={handleApprove}
                                onError={(err) => {
                                  console.error("PayPal Checkout onError", err);
                                  toast.error("Thanh toán PayPal thất bại");
                                }}
                              />
                            </PayPalScriptProvider>
                          </td>
                        </tr>
                        <tr>
                          <td>Họ và tên</td>
                          <td>
                            <input
                              type="text"
                              disabled
                              value={customer.nameCustomer}
                              style={{ width: "40%", height: 40 }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>
                            <input
                              type="text"
                              disabled
                              value={customer.email}
                              style={{ width: "40%" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Số điện thoại</td>
                          <td>
                            <input
                              type="text"
                              disabled
                              value={customer.phone}
                              style={{ width: "40%" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Mã giảm giá</td>
                          <td>
                            <input
                              type="text"
                              style={{ width: "40%" }}
                              id="nameDiscount"
                              placeholder="Nhập mã giảm giá"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={handleDiscount}
                              style={{
                                width: "40%",
                                margin: "0 auto",
                                background: "rgb(242, 107, 56)",
                              }}
                            >
                              Áp dụng
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <p style={{ fontSize: 11, width: "40%" }}>
                              (*) Bằng việc click/chạm vào THANH TOÁN, bạn đã
                              xác nhận hiểu rõ các{" "}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-3">
                    <div className="ticket-header">
                      <section className="ticket-feature">
                        <article>
                          <div
                            style={{ textAlign: "center" }}
                            className="col-md-12"
                          >
                            <img
                              src={filmData.film.imgFilm}
                              className="loading"
                              alt="Film Poster"
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="col-md-12">
                            <div className="ticket-detail">
                              <h2 className="ticket-title upper-text">
                                {filmData.film.nameFilm}
                              </h2>
                              <div className="ticket-icon">
                                <span>
                                  <span className="age-rating">T16</span>
                                </span>
                                <span>
                                  <span className="notice">
                                    (*) Chương trình chỉ dành cho khán giả từ 16
                                    tuổi trở lên
                                  </span>
                                </span>
                              </div>
                              <div className="ticket-info">
                                <div className="dotted-line">
                                  <b>Rạp: &nbsp;</b>Galaxy Tân Bình | RAP
                                  5&nbsp;
                                </div>
                                <div className="dotted-line">
                                  <b>Suất chiếu: &nbsp;</b>
                                  {filmData.showTime.showTime} |{" "}
                                  {filmData.showTime.showDate}
                                </div>
                                <div className="dotted-line">
                                  <b style={{ display: "block" }}>
                                    Ghế: &nbsp;
                                  </b>
                                  {seats.map((seat, index) => (
                                    <span
                                      key={index}
                                      className="select-seat ng-binding"
                                    >
                                      {seat} &nbsp; |
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="ticket-price-total">
                                <p>
                                  Tổng: &nbsp;
                                  <span>{formatPrice(price)}</span>
                                  <input type="hidden" id="ok" value={price} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <Footer />
      </>
    )
  );
}
