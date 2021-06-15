import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

Vue.config.productionTip = false

import {
  faPhone,
  faSwimmer,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSwimmer, faPhone, faEnvelope, faMapMarker);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
