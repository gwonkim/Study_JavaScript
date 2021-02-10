import React from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Movie from './components/Movie';

class App extends React.Component {
  state = {
    isLoaded: false,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(data.data.data.movies);
    //console.log(movies);
    this.setState({ movies, isLoaded: true });
    // movies : movies 이면 === movies

    /* es6이후 */
    // const obj = { name: 'asd', age: 20 };
    // const { name } = obj;
    // console.log(name);;
  }

  componentDidMount = () => {
    //console.log("컴포넌트디드마운트");
    this.getMovies();
  }

  render = () => {
    const { isLoaded, movies } = this.state;

    //console.log('렌더');
    return (
      <div className="App">
        <div className={`loading ${isLoaded ? 'loaded' : ''}`}>
          <div className="loading__loader"></div>
        </div>

        <Nav />
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            image={movie.medium_cover_image}
            summary={movie.summary}
          />
        ))}

        {/*   <h1>HELLO</h1> */}
        <Footer />
      </div>
    );
  }
}

export default App;
