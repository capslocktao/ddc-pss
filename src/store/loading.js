import { fixedBody,looseBody } from '../util/preventBackgroundScroll'
const loading = {
  state:{
    isLoading:false
  },
  mutations:{
    BEGIN_LOADING(state){
      fixedBody();
      state.isLoading = true;
    },
    END_LOADING(state){

      looseBody();
      state.isLoading = false
    }
  },
  actions:{
    beginLoading({commit}){
      commit('BEGIN_LOADING')
    },
    endLoading({commit}){
      commit('END_LOADING')
    }
  }
};
export default loading;
