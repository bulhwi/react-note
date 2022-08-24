import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/request';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
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

      <Footer />
    </div>
  );
}

export default App;
