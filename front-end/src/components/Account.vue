<template>
<div class="main">
<h2>Logged in as: {{user.firstName}} {{user.lastName}} <button @click="logout" class="pure-button">Logout</button></h2>
  <h1>Your Account Details:</h1>
</div>
</template>

<script>
export default {
  name: 'Account',
  computed: {
    user() {
      return this.$root.$data.user;
    }
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
  }
}
</script>