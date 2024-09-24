import React, { useEffect } from "react";
import ListFilm from "../../components/film/List";
import Slider from "react-slick";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  return (
    <>
      <Header />
      <main>
        <article>
          <section>
            <Slider {...settings}>
              <div>
                <img
                  src="https://salt.tkbcdn.com/ts/ds/1d/18/4a/40f2b8079878852c9f7f3c46e8a64307.jpg"
                  alt="slide1"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "800px", // Adjust this to control max height on large screens
                  }}
                />
              </div>
              <div>
                <img
                  src="https://salt.tkbcdn.com/ts/ds/06/c8/2b/907245a444785aa567dc0136ed83c0cd.png"
                  alt="slide2"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "800px",
                  }}
                />
              </div>
              <div>
                <img
                  src="https://salt.tkbcdn.com/ts/ds/70/3a/5b/3691ce959d1b7382f3138131e741d0cb.jpg"
                  alt="slide3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "800px",
                  }}
                />
              </div>
              <div>
                <img
                  src="https://salt.tkbcdn.com/ts/ds/38/f6/ef/afb1d3c8ef2492054ae52fee6e5aa30c.png"
                  alt="slide4"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxHeight: "800px",
                  }}
                />
              </div>
            </Slider>
          </section>
          <ListFilm />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
