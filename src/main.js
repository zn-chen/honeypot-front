import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false

axios.defaults.timeout = 5000;
 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
