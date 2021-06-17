<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Swim School</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/">Home</router-link>
      <router-link class="nav-item nav-link" to="/Lessons">Lessons</router-link>
      <router-link class="nav-item nav-link" to="/Register">Register/Login</router-link>
      <router-link class="nav-item nav-link" to="/Questions">Contact Us</router-link>
      <router-link class="nav-item nav-link" to="/Bookings">Bookings</router-link>
    </div>
  </div>
</nav>
<!-- Footer -->
<footer class="page-footer font-small blue fixed-bottom">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2021 Copyright: Samuel Thomas ||
    <a href="https://github.com/sammytvfx/creative-project"> Github</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
    <router-view/>
  </div>
  
</template>

<script>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
