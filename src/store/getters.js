export default {
  movies: (state) => {
    return state.movies
  },
  favoriteMovies: (state) => {
    return state.movies.filter((movie) => state.favorite.includes(movie.imdbID))
  }
}
