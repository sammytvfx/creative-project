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
        <button type="submit">Submit >></button>
        </form>
  </div>

  
</template>

<style scoped>

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
</style>