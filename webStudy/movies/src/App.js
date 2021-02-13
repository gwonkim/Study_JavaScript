import React from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Movie from './components/Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoaded: false,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoaded: true });
  
  }

  componentDidMount = () => {
    this.getMovies();
  }

  render = () => {
    const { isLoaded, movies } = this.state;

    return (
      <div className="App">
        <div className={`loading ${isLoaded ? 'loaded' : ''}`}>
          <div className="loading__loader"></div>
        </div>
        <Nav />
       <div className="contents">
       {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            image={movie.medium_cover_image}
            summary={movie.summary}
            rating={movie.rating} 
            runtime={movie.runtime}
            genres={movie.genres}
          />
        ))}
       </div>
        <Footer />
      </div>
    );
  }
}

export default App;
