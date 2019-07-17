import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_STATE ='SET_STATE'

export default new Vuex.Store({
  state: {
    cutten:0,
    token:"",
    isLogin:false
  },
  mutations: {
    addCutten(state,res) {
      state.cutten=res.cutten
    },
    setSTate(state){
      state.cutten = 8888
    }
  },
  actions: {
    addCutten({commit},res){ 
      commit('addCutten',res)
    }
    // setStatr(res){
    //   state.cutten =res
    // }
  }
})
