import {
  SET_MOVIES_MUTATION,
  SET_FAVORITE_LIST_MUTATION
} from './constants'

export default {
  [SET_MOVIES_MUTATION] (state, movies) {
    state.movies = movies
  },
  [SET_FAVORITE_LIST_MUTATION] (state, favorite) {
    state.favorite = favorite
    localStorage.favorite = JSON.stringify(favorite)
  }
}
