import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "purecss";
import {library} from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import "purecss/build/pure.css";

Vue.config.productionTip = false

import {
  faPhone,
  faSwimmer,
  faEnvelope,
  faMapMarker,
  faSwimmingPool,
  faLongArrowAltRight,
  faFish,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSwimmer, faPhone, faEnvelope, faMapMarker, faSwimmingPool, faLongArrowAltRight, faFish);


new Vue({
  router,
  data: {
    user: null
  },
  render: h => h(App)
}).$mount('#app')
