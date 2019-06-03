import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList:[]
  },
  mutations: {
    save(state,param){
      state.dataList = param;
    }
  },
  actions: {
    save({commit},param){
      console.log(112);
      commit("save",param);
    }
  }
})