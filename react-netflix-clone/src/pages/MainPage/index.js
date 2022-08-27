import React from 'react';
import Row from '../../components/Row';
import requests from '../../api/request';
import Banner from '../../components/Banner';

const MainPage = () => {
  return (
    <div>
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />

      <Row
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />

      <Row
        title="ActionMovies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row
        title="Comedy Movies"
        id="Cm"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
};

export default MainPage;