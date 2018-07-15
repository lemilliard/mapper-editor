import 'element-ui/lib/theme-chalk/index.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Axios from 'axios';
import ElementUI from 'element-ui';

import App from './App';
import router from './router';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.config.silent = true;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
