import Vuex from 'vuex'
import user from './user'
import shared from './shared'

const store = () => new Vuex.Store({
  modules: {
    user,
    shared
  }
})

export default store
