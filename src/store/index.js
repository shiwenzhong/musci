import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      ids:{}
  },
  mutations: {
    cun(state,payloa){
      Vue.set(state.ids,'id',payloa)
    }
  },
  actions: {
  },
  modules: {
  }
})
