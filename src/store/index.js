import Vue from "vue";
import Vuex from "vuex";
import picker from './picker'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    picker
  }
});
export default store
