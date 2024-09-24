import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";
import Dropdown from "react-bootstrap/Dropdown";
import { findCustomerByNameAccount } from "../../../service/CustomerServiceTruongNN";
import "./index.css";

function Header() {
  const navRef = useRef();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [searchQuery, setSearchQuery] = useState("");
  const account = JSON.parse(localStorage.getItem("account"));
  const [user, setUser] = useState(null);
  const roles = [];

  if (account != null) {
    for (let i = 0; i < account.roles.length; i++) {
      roles.push(account.roles[i].authority);
    }
  }

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Nếu searchQuery có giá trị, chuyển hướng với query param
      navigate(`/film?search=${encodeURIComponent(searchQuery)}`);
    } else {
      // Nếu searchQuery rỗng hoặc null, chuyển hướng đến trang /film mà không có query param
      navigate("/film");
    }
  };

  useEffect(() => {
    const findCustomerByUsername = async () => {
      const result = await findCustomerByNameAccount(username);
      setUser(result);
    };
    findCustomerByUsername();
  }, [username]);

  const handleBookingClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Bạn cần đăng nhập để đặt vé.");
      navigate("/login");
    } else {
      navigate("/booking-ticket");
    }
  };

  return (
    <header>
      <h3>MUSIC</h3>
      <nav ref={navRef}>
        <Link to="/">TRANG CHỦ</Link>
        <Link to="/film">CHƯƠNG TRÌNH</Link>
        <Link to="/booking-ticket" onClick={handleBookingClick}>
          ĐẶT VÉ
        </Link>

        <div className="search-box">
          <button className="btn-search d-flex" onClick={handleSearch}>
            <FaSearch />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Tìm kiếm chương trình..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button
          className="nav-btn nav-close-btn"
          style={{ marginRight: "200px" }}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>

        {username ? (
          <Dropdown>
            <Dropdown.Toggle
              variant="transparent"
              className="d-flex justify-content-center align-items-center border-0"
            >
              <Avatar>{username[0].toUpperCase()}</Avatar>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {roles.includes("ADMIN") ? (
                <Dropdown.Item
                  to="/admin/employee/list"
                  className="text-decoration-none"
                >
                  <Link
                    to="/admin/employee/list"
                    className="text-dark text-decoration-none"
                  >
                    Quản lý nhân viên
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/admin/film/list"}
                    className="text-dark text-decoration-none"
                  >
                    Quản lý chương trình
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") || roles.includes("EMPLOYEE") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    className="text-dark text-decoration-none"
                    to={"/admin/customer/list"}
                  >
                    Danh sách khách hàng
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("EMPLOYEE") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/employee/ticket/list"}
                    className="text-dark text-decoration-none"
                  >
                    Quản lý vé
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/admin/showroom/list"}
                    className="text-dark text-decoration-none"
                  >
                    Quản lý phòng chiếu
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    className="text-dark text-decoration-none"
                    to="/admin/discount/list"
                  >
                    Quản lý khuyến mãi
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/admin/statistic-film"}
                    className="text-dark text-decoration-none"
                  >
                    Thống kê chương trình
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("ADMIN") ? (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/admin/statistic-customer"}
                    className="text-dark text-decoration-none"
                  >
                    Thống kê khách hàng
                  </Link>
                </Dropdown.Item>
              ) : (
                ""
              )}
              {roles.includes("EMPLOYEE") ? (
                <>
                  {" "}
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-decoration-none">
                    <Link
                      to={"/ticket-customer"}
                      className="text-dark text-decoration-none"
                    >
                      Lịch sử đặt vé
                    </Link>
                  </Dropdown.Item>
                </>
              ) : (
                ""
              )}

              {user && (
                <Dropdown.Item className="text-decoration-none">
                  <Link
                    to={"/customer/change-information/" + user.idCustomer}
                    className="text-dark text-decoration-none"
                  >
                    Quản lý tài khoản
                  </Link>
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={handleLogout}
                className="text-decoration-none"
              >
                Đăng xuất
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="login-btn text-decoration-none">
            ĐĂNG NHẬP
          </Link>
        )}
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
