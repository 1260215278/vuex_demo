import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_STATE ='SET_STATE'

export default new Vuex.Store({
  state: {
    token:"",
    isLogin:false
  },
  mutations: {
    addCutten(state,res) {
      // console.log(state ,res)
      state.cutten=res.cutten
    },
    setSTate(state){
      state.cutten = 8888
    }
  },
  actions: {
    addCutten({commit},res){ 
      console.log(res)
      commit('addCutten',res)
    }
    // setStatr(res){
    //   state.cutten =res
    // }
  }
})
