<template>
  <div>
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-12">
          <nuxt-link to="/">Monastium</nuxt-link> | 
          <div v-if="loggedIn === false" class="d-inline-block">
            <nuxt-link to="/login">Login</nuxt-link> or 
            <nuxt-link to="/sign-up">Sign Up</nuxt-link>
          </div>
          <div v-else class="d-inline-block">
            <nuxt-link to="/user-dashboard">Dashboard</nuxt-link>
            <span @click="handleLogout()" >
              <nuxt-link to="#" class="d-inline-block">Logout</nuxt-link>
            </span>
          </div>
          <!-- <div class="float-right">
            Host's Dashboard | Guest's Dashboard
          </div> -->
        </div>
      </div>
    </div>
    <nuxt />
    <div class="container">
      <div class="row pb-4">
        <div class="col-md-12">
          Footer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    handleLogout() {
      this.$store.commit('logout')
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
</style>
