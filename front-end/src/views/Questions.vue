<template>
  <div class="form">
    <h1>Enquiry Form</h1>
        <form>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon2">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon2">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon2">
            </div>

            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Enquiry</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br>
        <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <br>
        <button class="pure-button" type="submit">Submit >></button >
        </form>
    <h2>Other contact methods</h2>    
        <div class="row">
            <div class="col-sm-4">
                <h1>Letter</h1>
                <h1> <font-awesome-icon icon="envelope"> </font-awesome-icon> </h1>
                <p> 42 Wallaby Way, </p>
                <p> Sydney, </p>
                <p> Australia, </p>
                <p> NSW 2774 </p>
            </div>
            <div class="col-sm-4">
                <h1>Phone</h1>
                <h1> <font-awesome-icon icon="phone"> </font-awesome-icon> </h1>
                <p> Telephone: 02312738321 </p>
                <p> Phone charges may apply for international calls </p>
            </div>
            <div class="col-sm-4">
                <h1> <font-awesome-icon icon="map-marker"> </font-awesome-icon> </h1>
                <h1>Visit Us</h1>
                <p> 42 Wallaby Way, </p>
                <p> Sydney, </p>
                <p> Australia, </p>
                <p> NSW 2774 </p>

            </div>
        </div>
        
  </div>

  
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: 'Questions',
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style scoped>

h2{
    background-color: rgb(248, 246, 246);
    padding: 0.5em;
    margin: 12px;
}

input{
    align-items: center;
    position: center;
}

.form-control{
    width:100%;
}

.form-group{
position: center;   
}


form { 
margin: 0 auto; 
width:75%;
position: center;  
}

h2 {
    padding: 50px;
}
</style>

