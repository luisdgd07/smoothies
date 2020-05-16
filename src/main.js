import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import axios from'axios';
// import VueAxios from'vue-axios';
import VueKinesis from 'vue-kinesis'

Vue. use(VueKinesis);
Vue.config.productionTip = false
// axios.defaults.baseURL='http://localhost:3000/';
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
