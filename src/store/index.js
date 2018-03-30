import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: Object.assign({}, state),
  getters,
  actions,
  mutations
})

export default store
