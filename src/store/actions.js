import {
  GET_MOVIES_ACTION,
  ADD_TO_FAVORITE_LIST_ACTION,
  REMOVE_FROM_FAVORITE_LIST_ACTION,
  INIT_FAVORITE_LIST_ACTION,
  SET_MOVIES_MUTATION,
  SET_FAVORITE_LIST_MUTATION
} from './constants'

import { movies } from '../values'

export default {
  [GET_MOVIES_ACTION] ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(SET_MOVIES_MUTATION, movies)
        resolve(movies)
      }, 1000)
    })
  },
  [ADD_TO_FAVORITE_LIST_ACTION] ({ commit, state }, id) {
    let favorite = state.favorite.slice()
    favorite.push(id)

    commit(SET_FAVORITE_LIST_MUTATION, favorite)
  },
  [REMOVE_FROM_FAVORITE_LIST_ACTION] ({ commit, state }, id) {
    let favorite = state.favorite.slice().filter((imddbID) => imddbID !== id)

    commit(SET_FAVORITE_LIST_MUTATION, favorite)
  },
  [INIT_FAVORITE_LIST_ACTION] ({ commit }) {
    let favorite

    try {
      favorite = JSON.parse(localStorage.favorite)
    } catch (e) {
      favorite = []
    }

    commit(SET_FAVORITE_LIST_MUTATION, favorite)
  }
}
