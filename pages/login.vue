<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-12">
          <p>
            Login
          </p>
          <div class="pb-2">
            Email <br>
            <input type="text">
          </div>
          <div class="pb-2">
            Password <br>
            <input type="text">
          </div>
          <div>
            <button @click="handleLogin()">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { mapMutations } from 'vuex'

export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    handleLogin() {
      this.$store.commit('login')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
</style>
