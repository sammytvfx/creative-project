<template>
  <div class="lessons">
    <h1>Our Swim Lessons</h1>
    <h2>Beginner Swimmers' <font-awesome-icon icon="swimming-pool"> </font-awesome-icon> </h2>
    <p>
      These classes are designed for complete novice swimmers that are taking
      their very first steps into learning how to swim. In these classes we aim
      to build water confidence as well as the neccessary water safety around
      pools. They will develop an understanding of buoyancy and should be able
      to swim 5 metres of front paddle and back paddle. Then eventually move on
      to 10-25 metres of basic front crawl and backstroke. Please note that we
      may use some floatation kit (e.g. pool noodles) to help with this but
      should be able to swim without floats before moving on. <router-link to="/Bookings"><button class="pure-button"> Book class >></button></router-link>
    </p>
      <ul id="groups">
        GROUPS
          <li>Stage<span class="red">1</span></li>
          <li>Stage<span class="orange">2</span></li>
          <li>Stage<span class="yellow">3</span></li>
          <li>Stage<span class="green">4</span></li>
      </ul>

      <h3><font-awesome-icon icon="long-arrow-alt-right"> </font-awesome-icon></h3>

    <h2> Intermediate Swimmers' <font-awesome-icon icon="fish"> </font-awesome-icon></h2>
    <p>
      Intermediate swimmers lessons are designed for those that already have
      basic water compentency. In these classes we aim to build a stronger
      understanding of how to start developing a streamlined position in
      front-crawl and backstroke. We also will teach breaststroke and butterfly.
      As well as more advanced water safety practices (e.g. treading water) and
      additional pool rules. At minimum they should be able to confidently swim
      25 metres on each stroke before moving on.<router-link to="/Bookings"><button class="pure-button"> Book class >></button></router-link>
    </p>
      <ul id="groups">
        GROUPS
          <li>Stage<span class="blue">5</span></li>
          <li>Stage<span class="indigo">6</span></li>
          <li>Stage<span class="violet">7</span></li>
      </ul>

      
      <h3><font-awesome-icon icon="long-arrow-alt-right"> </font-awesome-icon></h3>
    <h2>Advanced Swimmers' <font-awesome-icon icon="swimmer"> </font-awesome-icon></h2>
    <p>
      These classes are designed more for those swimmers that are veterans. It
      aims to build on the core fundamentals by teaching either competitive
      swimming or life-saving skills. For the competitive swimmers it will be
      learning the basics of pool starts (dives) and turns. Alternatively, they could learn important 
      life-saving and water surival skills. These include knowing how to swim in clothes as well as aid other 
      swimmers by rescuing them. <router-link to="/Bookings"><button class="pure-button"> Book class >></button></router-link>
    </p>

      <ul id="groups">
        GROUPS
          <li>Stage<span class="grey">8</span></li>
          <li>Stage<span class="grey">9</span></li>
          <li>Stage<span class="grey">10</span></li>
      </ul>
      <h3><font-awesome-icon icon="long-arrow-alt-right"> </font-awesome-icon></h3>

      <br><br><br>
        <div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Lessons",
  components: {
    FontAwesomeIcon,
  },
};
</script>


<style scoped>

li{
  font-size: 36px;
}

#groups {
    list-style: none;
    width: 100%;
    height: 90px;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
      border-style: dotted;
}

#groups > li {
    display: inline-block;
    width: 50%;
    height: 100%;
    background-color: rgb(195, 241, 255);
}

#group > li:nth-child(even) {
    background-color: blue;
}

.groups{
  border-style: dotted;
}

ul {
  list-style-type: none;
}

span.grey {
  background: #999999;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #fff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.red {
  background: red;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.orange {
  background: orange;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.green {
  background: limegreen;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #000000;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.blue {
  background: blue;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.yellow {
  background: rgb(255, 255, 147);
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #000000;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.indigo {
  background: indigo;
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}

span.violet {
  background: rgb(124, 66, 124);
   border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 15px;
  text-align: center;
  width: 1.6em; 
}



p {
    display: block;
    margin-left: auto;
    margin-right: auto
}

h2 {
  background-color: rgb(248, 246, 246);
  padding: 0.5em;
  margin: 12px;
  
}

</style>