import axios from 'axios';
import store from './store';

axios.interceptors.request.use((config)=>{

  store.dispatch('beginLoading');

  //携带token
  return config
});
axios.interceptors.response.use((config)=>{
  store.dispatch('endLoading');

  return config
});
