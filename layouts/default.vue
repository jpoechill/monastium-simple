<template>
  <div>
    <div class="w-100 text-center py-2 font-weight-bold text-white fixed-top" style="background-color: #0ab9b9;">
      PROTOTYPE: Last Updated August 22th, 2019
    </div>

    <!-- Header -->
    <div class="w-100 mt-2 pt-4 bg-white">
      <div class="container">
        <div class="row pt-4">
          <div class="col-md-12">
            <div class="d-inline-block">
              <nuxt-link to="/">
                <img src="/logo.png" style="width: 40px;" alt="Monastium Logo">
              </nuxt-link>
            </div>
            <div class="d-inline-block float-right">
              <div v-if="loggedIn === false" class="d-inline-block">
                <nuxt-link to="/login">Login</nuxt-link> or 
                <nuxt-link to="/sign-up">Sign Up</nuxt-link>
              </div>
              <div v-else class="d-inline-block">
                <span v-if="!userIsHost">
                  <nuxt-link to="/guests-dashboard">Guest's Dashboard</nuxt-link> | 
                </span>
                <span v-else>
                  <nuxt-link to="/hosts-dashboard">Host's Dashboard</nuxt-link> | 
                </span>
                <span @click="handleLogout()" >
                  <nuxt-link to="#" class="d-inline-block">Logout</nuxt-link>
                </span>
              </div>
            </div>
            <!-- <div class="float-right">
              Host's Dashboard | Guest's Dashboard
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Body -->
    <nuxt class="bg-white pb-4" />

    <!-- Footer -->
    <div class="container bg-light">
      <div class="row pt-3 pb-4">
        <div class="col-md-12 text-center">
          Monastium Group © 2019
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
    },
    userIsHost() {
      return this.$store.state.userIsHost
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
body {
  background-color: #f7f7f7;
}

/* Fade Transitions */

.fade-enter-active {
  transition: opacity 0.15s;
}

.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Modal Custom-Styles */
.modal-header {
  border-bottom: none !important;
}

.modal-footer {
  border-top: none !important;
}

.modal-backdrop.show {
  opacity: 0.25;
}

.modal-content {
  border: none;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 5rem auto;
  }
}

/* Buttons */

input[type='text'] {
  border-radius: 15px;
  border: 2px solid #eee;
  width: 100%;
  /* padding: .4rem; */
}

button {
  border-radius: 15px;
  background-color: aqua;
  border: none;
  color: blue;
  font-weight: 700;
  padding: 0.35rem 0px;
}

button:hover {
  cursor: pointer;
}
</style>
