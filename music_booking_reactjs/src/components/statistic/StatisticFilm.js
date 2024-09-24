import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Pagination from "react-js-pagination";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function StatisticalFilm() {
  const [chartData, setChartData] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [sortedChartData, setSortedChartData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = sortedChartData ? sortedChartData.length : 0;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const paginatedChartData = sortedChartData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  useEffect(() => {
    if (chartData) {
      const sortedData = [...chartData].sort(
        (a, b) => a.totalTicketsSold - b.totalTicketsSold
      );
      setSortedChartData(sortedData);
    }
  }, [chartData]);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Thống kê tổng số vé đã đặt của mỗi chương trình",
        color: "#007bff",
        font: { size: 16 },
      },
    },
  };

  const labels = chartData
    ? chartData.slice(0, 10).map((charts) => charts.nameFilm)
    : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Tổng số vé bán được",
        data: chartData
          ? chartData.map((charts) => charts.totalTicketsSold)
          : [],
        backgroundColor: "rgba(193, 43, 120, 0.8)",
      },
    ],
  };

  const auth = localStorage.getItem("token");
  const headers = { Authorization: "Bearer " + auth };

  useEffect(() => {
    document.title = "Thống kê chương trình";
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/statistics/film",
          { headers }
        );
        setChartData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/admin/statistics/film/search?name=${keyword}`,
        { headers }
      );
      setChartData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "120px", maxWidth: "1200px" }}>
        <div className="row">
          <div className="col-12">
            <Bar options={options} data={data} />
          </div>
        </div>
        <div className="row mx-0 mt-4">
          <div className="col-12 col-md-10 mx-auto">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <h2
                className="text-center mb-4"
                style={{
                  padding: "16px",
                  background: "rgb(242, 107, 56)",
                  color: "#fff",
                  fontSize: "24px",
                }}
              >
                THỐNG KÊ CHƯƠNG TRÌNH
              </h2>
              <div className="row mb-3">
                <div className="col-12 col-md-9">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="form-control"
                    placeholder="Tìm kiếm theo mã vé, tên chương trình..."
                  />
                </div>
                <div className="col-12 col-md-3 mt-2 mt-md-0">
                  <button
                    onClick={handleSearch}
                    className="btn btn-outline-success w-100"
                    style={{
                      background: "rgb(242, 107, 56)",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr className="text-center">
                      <th>STT</th>
                      <th>Tên chương trình</th>
                      <th>Số lượng vé bán được</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedChartData.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-danger">
                          Không tìm thấy giá trị bạn tìm kiếm
                        </td>
                      </tr>
                    ) : (
                      paginatedChartData.map((chart, index) => (
                        <tr key={index} className="text-center">
                          <td>{(activePage - 1) * itemsPerPage + index + 1}</td>
                          <td>{chart.nameFilm}</td>
                          <td>{chart.totalTicketsSold}</td>
                          <td>
                            {chart.totalRevenue !== null
                              ? chart.totalRevenue
                              : "N/A"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                prevPageText="Trở về"
                nextPageText="Tiếp"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
