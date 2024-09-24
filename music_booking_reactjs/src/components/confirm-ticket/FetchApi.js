import { useEffect } from "react";
import { saveTicket } from "../../service/TicketService";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export function FetchApi() {
  const [queryParameters] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const callApi = async () => {
      const idCus = queryParameters.get("idCus");
      const idFilm = queryParameters.get("idFilm");
      const idDiscount = queryParameters.get("idDiscount");
      const seat = queryParameters.get("seat");
      const price = queryParameters.get("price");
      const vnp_ResponseCode = queryParameters.get("vnp_ResponseCode");

      console.log({
        idCus,
        idFilm,
        idDiscount,
        seat,
        price,
        vnp_ResponseCode,
      }); // Kiểm tra giá trị của các biến này trước khi gửi

      await saveTicket(
        idCus,
        idFilm,
        idDiscount,
        seat,
        price,
        vnp_ResponseCode,
        token
      );
    };
    callApi();
    navigate("/booking-ticket");
    toast("Thanh toán thành công");
  }, []);
}

