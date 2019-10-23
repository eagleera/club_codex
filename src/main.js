import Vue from 'vue';
import App from './App.vue';
import Eagle, { Zoom } from "eagle.js";

import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";

Vue.use(Eagle)
Eagle.use(Zoom, {scale: 2})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
