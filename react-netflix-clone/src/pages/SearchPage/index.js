import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import "./SearchPage.css";
import { UseDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get('q');
  const debounceSearchTerm = UseDebounce(searchTerm, 500);
  useEffect(() => {
    if (debounceSearchTerm) {
      fetchSearchMovie(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  const fetchSearchMovie = async (debounceSearchTerm) => {
    try {
      const request = await axios.get(`/search/multi?include_adult=false&query=${debounceSearchTerm}`);
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
              <div onClick={() => navigate(`/${movie.id}`)} className="movie" key={movie.id}>
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
           "{debounceSearchTerm}" 검색된 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
};

export default SearchPage;