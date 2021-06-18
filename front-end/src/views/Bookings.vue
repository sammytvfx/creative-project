<template>
  <div>
    <Bookings v-if="awesome" />
    <Login v-else />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Bookings from "@/components/Bookings.vue";
import moment from "moment";
export default {
  name: "login",
  components: {
    Login,
    Bookings,
  },
  data() {
    return {
      mintime: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss"),
      value: moment(Date.now() + 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      selectedDate: moment(Date.now() + 8640000).format("YYYY-MM-DDTHH:mm:ss"),
      bookings: [],
      awesome: true,
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
  }
};

</script>
