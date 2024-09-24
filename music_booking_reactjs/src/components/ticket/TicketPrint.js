import "../film/detailFilm.css";
import "./TicketDetail";
import { format } from "date-fns";
export function TicketPrint(props) {
  return (
    <>
      <div className="container abc">
        <div>
          <div className="border border-2 text-secondary">
            <div className="detail-rating p-3">
              <h3 className="text-center text-movie">VÉ XEM CHƯƠNG TRÌNH</h3>
            </div>
            <div className="ticket-print"></div>
            {/*<hr className="text-movie xxx" />*/}
            <h3 className="text-center text-movie">DN</h3>
            <div className="detail-rating p-3">
              <div>
                <h5 className="text-center">
                  {props.ticketDetail.ticketSet[0].seat.showTime.film.nameFilm}
                </h5>
              </div>
              <table>
                <thead>
                  {/*<tr style={{height: 39}}>*/}
                  {/*<th className="text-secondary">Tên chương trình:</th>*/}
                  {/*<h2>{props.ticketDetail.seat.showTime.film.nameFilm}</h2>*/}
                  {/*</tr>*/}
                </thead>
                <tbody>
                  <tr style={{ height: 39 }}>
                    <th className="text-secondary">Rạp:</th>
                    <td>
                      {
                        props.ticketDetail.ticketSet[0].seat.showRoom
                          .nameShowRoom
                      }
                    </td>
                  </tr>
                  <tr style={{ height: 39 }}>
                    <th className="text-secondary">Ngày chiếu :</th>
                    <td style={{ fontFamily: "Roboto" }}>
                      {format(
                        new Date(
                          props.ticketDetail?.ticketSet[0].seat.showTime.showDate
                        ),
                        "dd/MM/yyyy"
                      )}
                    </td>
                  </tr>
                  <tr style={{ height: 39 }}>
                    <th className="text-secondary">Giờ chiếu:</th>
                    <td>
                      {props.ticketDetail.ticketSet[0].seat.showTime.showTime}
                    </td>
                  </tr>
                  <tr style={{ height: 39 }}>
                    <th className="text-secondary">Ghế:</th>
                    <td>
                      {props.ticketDetail.ticketSet
                        .filter(
                          (element) => element.idTicket === props.idTicket
                        )
                        .map((element, index) => element.seat.nameSeat)}
                      <span>
                        {props.ticketDetail.ticketSet
                          .filter(
                            (element) => element.idTicket === props.idTicket
                          )
                          .map((element, index) =>
                            element.seat.typeSeat.nameTypeSeat === "VIP"
                              ? " (Ghế VIP)"
                              : " (Ghế thường)"
                          )}
                      </span>
                    </td>
                  </tr>
                  <tr className="" style={{ height: 39 }}>
                    <th className="text-secondary">Giá:</th>
                    <td>
                      {props.ticketDetail.ticketSet
                        .filter(
                          (element) => element.idTicket === props.idTicket
                        )
                        .map((element, index) =>
                          element.priceAfterDiscount.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })
                        )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ticket-print"></div>
            <div>
              <p className="text-center">Cảm ơn quý khách</p>
              <p className="text-center">Hẹn gặp lại!</p>
            </div>
          </div>

          {/*</div>*/}
        </div>
      </div>
    </>
  );
}
