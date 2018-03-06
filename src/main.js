// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iView';
import MintUI from 'mint-ui'
import axios from 'axios' // 处理http请求
import "./interceptor"
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css';
import '../theme-config/dist/iview.css';
import './mint-ui-theme/theme-config.scss';
import { Tabbar, TabItem,Header,Cell,Field,Picker,Popup,Loadmore,Swipe, SwipeItem,Spinner,DatetimePicker } from 'mint-ui';

Vue.prototype.host = "";
//Vue.prototype.$http = axios
//Vue.prototype.serverUrl = "http://139.198.15.210:8801/api/2"; //本地环境
//Vue.prototype.serverUrl = "http://139.198.15.210:8801/api/2"; //开发环境
//Vue.prototype.serverUrl = "http://139.198.15.210:8801/api/2"; //生产环境

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(MintUI);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Picker.name, Picker);
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Spinner.name, Spinner);
Vue.component(DatetimePicker.name, DatetimePicker);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
