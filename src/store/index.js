import Vue from "vue";
import Vuex from "vuex";
import picker from './picker'
import loading from './loading'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    picker,
    loading
  }
});
export default store
