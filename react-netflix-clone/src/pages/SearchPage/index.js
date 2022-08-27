import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import "./SearchPage.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get('q');

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      console.log(request.data.results);
      setSearchResults(request.data.results);
    } catch (e) {
      console.log('error', e);
    }
  };

  const renderSearchResults = () => {
    return Array.isArray(searchResults) && searchResults.length > 0 ? (
      <section className='search=container'>
        {searchResults.map(movie => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie__column-poster" onClick={() => navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt='movie image' className="movie__poster" />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            검색된 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
};

export default SearchPage;