<template>
  <div class="home">
    <h1>Swim School <font-awesome-icon icon="swimmer"> </font-awesome-icon> </h1>
    <p class="animate__animated animate__fadeInDown">{{WelcomeMessage}}</p>
      <div class="container">
        <div class="row">
          <div :style="cssProps" class="col-sm 2">
            <h2> Swim School Membership </h2>
            <p> Not a member? Why not join today? </p>
            <router-link to="/Register"><button class="pure-button">Register an account for free >></button></router-link>
          </div>
          <div class=".col-xs-12"> <br></div>
          <div :style="cssProps2" class="col-sm">
            <h2> Our Swimming Lessons Scheme</h2>
            <router-link to="/Lessons"><button class="pure-button">Find out more >></button></router-link>
          </div>
          <div class=".col-xs-12"> <br></div>
          <div :style="cssProps3" class="col-sm">
            <h2> Got Questions? </h2>
            <p> Make an enquiry here </p>
            <router-link to="/Questions"><button class="pure-button"> Enquire >></button></router-link>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon
  },
  data(){
    return{
      WelcomeMessage: "Take a look at our swimming lessons",
      cssProps: {
          backgroundImage: `url(${require('@/assets/home-page/swimming-2323065_960_720.jpg')})`
        },
      cssProps2: {
        backgroundImage: `url(${require('@/assets/home-page/duck.jpg')})`
      },
      cssProps3: {
        backgroundImage: `url(${require('@/assets/home-page/clipboard2.jpg')})`
      },
    }
  },
}
</script>

<style scoped> 

.col-sm {
  border-spacing: 1em .5em;
  padding: 5em;
  border: 1px solid black;
  background-repeat: no-repeat;
  background-size: 1400px;
  background-position-y:center;
}

.col-sm h2{
  color: aliceblue;
  font-size: auto;
  text-align: center;
  background-color:  rgba(15, 15, 15, 0.603);
  width: auto;
  align-items: center;
}

.col-sm p{
  color: aliceblue;
  font-size: 1.4em;
  text-align: center;
  background-color:  rgba(15, 15, 15, 0.603);
  width: auto;
  align-items: center;
}


</style>


