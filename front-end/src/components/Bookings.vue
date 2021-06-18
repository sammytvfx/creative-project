<template>
  <div>
    <div class="bookings" v-if="this.$root.$data.user">
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
    <div v-else>
      <h1>
        It appears you are not logged in. Please log-in by clicking button
        below. You should be redirected to the login page
      </h1>
      <router-link to="/Register"
        ><button class="pure-button">
          Click here to login >>
        </button></router-link
      >
    </div>
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
      selectedDate: moment(Date.now() + 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      bookings: [],
    };
  },
  created() {
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
    async book() {
      try {
        await axios.post("/api/bookings/", { bookings: this.selectedDate });
        this.selectedDate = "";
        await this.getBookings();
        alert("thank you for your booking");
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
};
</script>