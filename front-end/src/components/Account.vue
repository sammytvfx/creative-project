<template>
  <div class="main">
    <h2>
      Logged in as: {{ user.firstName }} {{ user.lastName }}
      <button @click="logout" class="pure-button">Logout</button>
    </h2>
    <h1>Your Account Details:</h1>
    <p>You can edit your account here:</p>

      <p>First Name</p>
      <input v-model="firstName" />

      <p>Last Name</p>
      <input v-model="lastName" />

      <h3>Your current bookings:</h3>
      <br /><br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Account",
  data() {
    return {
      firstName: this.$root.$data.user.firstName,
      lastName: this.$root.$data.user.lastName,
      email: "",
    };
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  },
};
</script>