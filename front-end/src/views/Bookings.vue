<template>
  <div>
    <h1>Bookings</h1>
    <label for="meeting-time">Choose a time for your swim lessons:</label>
    <button class="pure-button" @click="book">Book now</button>

    <input
      type="datetime-local"
      id="swim-lesson"
      name="swim-lesson"
      v-bind:min="mintime"
      v-model="selectedDate"
    />
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      mintime: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss"),
      value: moment(Date.now() + 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      selectedDate: moment(Date.now()+ 8640000).format("YYYY-MM-DDTHH:mm:ss"),
    };
  },
  methods: {
    book(){
      
    }
  },
};
</script>
