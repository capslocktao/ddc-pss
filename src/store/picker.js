const picker = {
    state:{
      newData:""
    },
  mutations:{
    SELECTED_DONE(state,payload){
      state.newData = payload;
    }
  },
  actions:{
    selectedDone({commit},data){
      commit("SELECTED_DONE",data)
    }
  }
}
export default picker
