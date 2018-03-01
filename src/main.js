// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css';
import '../theme-config/dist/iview.css';
import './mint-ui-theme/theme-config.scss';
import { Tabbar, TabItem,Header } from 'mint-ui';


Vue.config.productionTip = false
Vue.use(iView);
Vue.use(MintUI)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
