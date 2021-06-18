<template>
  <div>
    <h1>Bookings</h1>
    <label for="meeting-time">Choose a time for your swim lessons:</label>

    <input
      type="datetime-local"
      id="swim-lesson"
      name="swim-lesson"
      v-bind:min="mintime"
      v-model="selectedDate"
    />

    <button class="pure-button" @click="book">Book now</button>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      mintime: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss"),
      value: moment(Date.now() + 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      selectedDate: moment(Date.now()+ 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      bookings: [],
    };
  },
  created(){
    this.getBookings();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async getBookings() {
        try {
            let response = await axios.get("/api/bookings/");
            console.log(response);
            this.bookings = response.data;
        } catch (error) {
            this.error = error.response.data.message;
            }
        },
    async book(){
        try {
            await axios.post("/api/bookings/", {bookings: this.selectedDate});
            this.selectedDate = '';
            await this.getBookings();
        } catch (error) {
            this.error = error.response.data.message;
            }
    }
  },
};

/*
    async getBookings() {
        try {
            let response = await axios.get("/api/bookings/");
            this.bookings = response.data;
        } catch (error) {
            this.error = error.response.data.message;
            }
        },

*/


</script>
