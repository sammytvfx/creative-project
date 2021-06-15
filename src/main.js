import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

Vue.config.productionTip = false

import {
  faShoppingCart,
  faDollarSign,
  faSwimmer
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faSwimmer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
