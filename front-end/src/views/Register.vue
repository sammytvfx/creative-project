<template>
<div class="login">
  <Account v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import Account from '@/components/Account.vue';
import Login from '@/components/Login.vue';
import axios from 'axios';
export default {
  name: 'login',
  components: {
    Account,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>

</style>