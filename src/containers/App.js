import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Menu from '../components/Menu/Menu';
import Movie from '../components/Movie/Movie';
import CircleDot from '../components/CircleDot/CircleDot';
import Footer from '../components/Footer/Footer';
import Film_1 from '../assets/film-1.jpg';
import Film_2 from '../assets/film-2.jpg';
import Film_3 from '../assets/film-3.jpg';
import Film_4 from '../assets/film-4.jpg';
import Film_5 from '../assets/film-5.jpg';
import Film_6 from '../assets/film-6.jpg';
import './App.css';

class App extends Component {
  state = {
    movieDB: [
      { title: "Kong: The Island Skull", poster: Film_1, launch: "" },
      { title: "Logan", poster: Film_2, launch: "" },
      { title: "Rings", poster: Film_3, launch: "d-none" },
      { title: "The Shallow", poster: Film_4, launch: "d-none" },
      { title: "The Amazing Spider 2", poster: Film_5, launch: "" },
      { title: "Harry Potter - 4", poster: Film_6, launch: "d-none" },
    ]
  }

  render() {
    let movieList = [];
    for (let i = 0; i < this.state.movieDB.length; i++) {
      movieList.push(
        <Movie
          moviePoster={this.state.movieDB[i].poster}
          movieTitle={this.state.movieDB[i].title}
          movieTitleHover={this.state.movieDB[i].title}
          launch={this.state.movieDB[i].launch}
        />)
    }

    const movieList_2 = this.state.movieDB.map((movie) =>
      <Movie
        moviePoster={movie.poster}
        movieTitle={movie.title}
        movieTitleHover={movie.title}
        launch={movie.launch}
      />
    );

    return (
      <div className="App" >
        <Banner />
        <div className="container-fluid bg-light-gray">
          <Menu />
          <div className="container p-5">
            <div className="row">
              {movieList_2}
            </div>
            <CircleDot />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
