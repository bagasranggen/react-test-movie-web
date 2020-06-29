import React, { Component } from 'react';
import Movie from '../Movies/Movie/Movie';

class Movies extends Component {
  state = {
    movieDB_API: [],
    movieGenreDB_API: []
  };

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=37a2aadc265b6cccff977470ef0a3c32&language=en-US&page=1')
      .then(res => { if (res.status === 200) return res.json(); })
      .then(resJson => { this.setState({ movieDB_API: resJson.results }) })

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=37a2aadc265b6cccff977470ef0a3c32&language=en-US')
      .then(res => { if (res.status === 200) return res.json(); })
      .then(resJson => { this.setState({ movieGenreDB_API: resJson.genres }) })
  }

  render() {
    const movieList = this.state.movieDB_API.map((movie, index) =>
      <Movie
        key={index}
        moviePoster={'http://image.tmdb.org/t/p/w342/' + movie.poster_path}
        movieTitle={movie.original_title}
        movieTitleHover={movie.original_title}
        movieRate={movie.vote_average}
      // launch={movie.launch}
      />
    );

    return (
      [movieList]
    );
  }
}

export default Movies;