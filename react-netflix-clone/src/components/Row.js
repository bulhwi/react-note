import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css";
import MovieModal from './MovieModal';

import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Row = ({ title, id, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  }

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        {/*<div className="slider__arrow-left" onClick={() => {*/}
        {/*  document.getElementById(id).scrollLeft -= window.innerWidth - 80;*/}
        {/*}}>*/}
        {/*  <span className="arrow">*/}
        {/*    {"<"}*/}
        {/*  </span>*/}
        {/*</div>*/}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <SwiperSlide>
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  loading="lazy"
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        {/*<div className="slider__arrow-right" onClick={(e) => {*/}
        {/*  document.getElementById(id).scrollLeft += window.innerWidth - 80;*/}
        {/*}}>*/}
        {/*  <span className="arrow">*/}
        {/*    {">"}*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>

      {modalOpen && (
       <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}

    </section>
  );
};

export default Row;