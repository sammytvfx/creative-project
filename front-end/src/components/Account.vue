<template>
  <div class="main">
    <h2>
      Logged in as: {{ user.firstName }} {{ user.lastName }}
      <button @click="logout" class="pure-button">Logout</button>
    </h2>
    <h1>Your Account Details:</h1>
    <p>You can edit your account here:</p>

    <div class="form" @submit.prevent="processForm">
      <p>First Name</p>
      <input v-model="firstName" />
      <button @click="editItem(findItem)">Edit</button>

      <p>Last Name</p>
      <input v-model="lastName" />
      <button @click="editItem(findItem)">Edit</button>

      <h3>Your current bookings:</h3>
      <br /><br />
      <div class="field">
        <label class="label">Email</label>
        <input type="email" class="input" name="email" v-model="email" />
      </div>

      <div class="field has-text-right">
        <button type="submit" @click.prevent="add">add</button>
      </div>
    </div>
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