import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findFilmsPlaying, findFilmsUpcoming } from "../../service/FilmService";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function ListFilm() {
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [moviePlaying, setMoviePlaying] = useState([]);

  useEffect(() => {
    const fetchApiToGetData = async () => {
      const resultMovieUpcoming = await findFilmsUpcoming();
      setMovieUpcoming(resultMovieUpcoming);
      const resultMoviePlaying = await findFilmsPlaying();
      setMoviePlaying(resultMoviePlaying);
    };
    fetchApiToGetData();
  }, []);

  return (
    <div>
      <section className="upcoming">
        <div className="container">
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle fw-bold">
                Chương Trình đang chiếu
              </p>
            </div>  
          </div>
          <div>
            <Slider {...settings}>
              {moviePlaying.map((movie) => (
                <div className="movie-card p-3" key={movie.idFilm}>
                  <Link to={"/film/detail/" + movie.idFilm}>
                    <figure className="card-banner">
                      <img src={movie.imgFilm} alt={movie.nameFilm} />
                    </figure>
                  </Link>
                  <div className="title-wrapper">
                    <Link
                      to={"/film/detail/" + movie.idFilm}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="card-title">{movie.nameFilm}</h3>
                    </Link>
                  </div>

                  <div className="card-meta pt-2">
                    <div className="badge badge-outline">
                      {movie.movieLabel}
                    </div>
                    <div className="duration">
                      <ion-icon name="time-outline" />
                      <time dateTime="PT137M">{movie.timeFilm} phút</time>
                    </div>
                    <div className="rating">
                      <ion-icon name="star" />
                      <data>{movie.nation}</data>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="container" style={{ marginTop: "150px" }}>
          <div className="flex-wrapper">
            <div className="title-wrapper">
              <p className="section-subtitle fw-bold">
                Chương Trình sắp khởi chiếu
              </p>
            </div>
          </div>
          <div>
            <Slider {...settings}>
              {movieUpcoming.map((movie) => (
                <div className="movie-card p-3" key={movie.idFilm}>
                  <Link to={"/film/detail/" + movie.idFilm}>
                    <figure className="card-banner">
                      <img src={movie.imgFilm} alt={movie.nameFilm} />
                    </figure>
                  </Link>
                  <div className="title-wrapper">
                    <Link to={"/film/detail/" + movie.idFilm}>
                      <h3 className="card-title">{movie.nameFilm}</h3>
                    </Link>
                  </div>
                  <div className="card-meta pt-2">
                    <div className="badge badge-outline">
                      {movie.movieLabel}
                    </div>
                    <div className="duration">
                      <ion-icon name="time-outline" />
                      <time dateTime="PT137M">{movie.timeFilm} phút</time>
                    </div>
                    <div className="rating">
                      <ion-icon name="star" />
                      <data>{movie.nation}</data>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListFilm;
