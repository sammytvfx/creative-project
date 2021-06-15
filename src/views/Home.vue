<template>
  <div class="home">
    <h1>Swim School</h1>
    <p class="animate__animated animate__fadeInDown">Take a look at our swimming lessons</p>
    <font-awesome-icon icon="swimmer"> </font-awesome-icon>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FontAwesomeIcon
  }
}
</script>
