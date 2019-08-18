<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <p class="text-center">
            Login
          </p>
          <div class="pb-2">
            Email <br>
            <input type="text" class="mt-2 p-1">
          </div>
          <div class="pb-2">
            Password <br>
            <input type="text" class="mt-2 p-1">
          </div>
          <div class="mt-2 text-center">
            <button class="w-100 p-1" @click="handleLogin()">
              Login as Host
            </button>
          </div>
          <br>
          <div class="w-100 text-center">
            <nuxt-link to="/login">
              Looking for the Guest's login?
            </nuxt-link>
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
