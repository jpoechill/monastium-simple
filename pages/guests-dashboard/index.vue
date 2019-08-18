<template>
  <div>
    <div class="container pt-3 pb-4">
      <div class="row">
        <div class="col-md-12 text-center">
          <nuxt-link to="/guests-dashboard/">
            <img src="/avatar-02-bw.png" style="width: 120px;" class="mb-3" alt="">
          </nuxt-link>
          <br>
          Jane Smith – username@gmail.com <br>
          <nuxt-link to="/guests-dashboard/">Reservations</nuxt-link> | 
          <nuxt-link to="/guests-dashboard/edit-info">Edit Info</nuxt-link> | 
          <nuxt-link to="/guests-dashboard/edit-billing">Edit Billing</nuxt-link> | 
          <nuxt-link to="/guests-dashboard/delete-account">Delete Account</nuxt-link>
        </div>
      </div>
    </div>

    <!-- Start Nuxt Body -->
    <nuxt class="mt-1"/>

  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
