<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-6">
          Real Name – username@gmail.com <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quis!
        </div>
        <div class="col-md-6 text-right">
          Reservations | Edit Info | Edit Billing | Delete Account
        </div>
      </div>
    </div>

<!-- Start Reservation -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          My Reservations
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Active
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Report Issue
          </button>
        </div>
      </div>
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Request Accepted
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>

    <!-- Start Requests -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          My Requests
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Pending
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Cancel Request
          </button>
        </div>
      </div>
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Pending
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Cancel Request
          </button>
        </div>
      </div>
    </div>

    <!-- Start History -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          My History
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Completed
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-2">
        <div class="col-md-3">
          <nuxt-link to="/example-monastery">Monastery Name</nuxt-link>
        </div>
        <div class="col-md-3">
          01/01/01 - 02/02/01 (4 days)
        </div>
        <div class="col-md-3">
          Status: Completed
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
