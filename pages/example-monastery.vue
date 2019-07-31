<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <div class="col-md-6">
          <div>
            <nuxt-link to="/example-monastery">
              <img src="/ph-monastery.png" class="w-100" alt="">
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <nuxt-link to="/example-monastery">
              <img src="/ph-monastery.png" class="w-100" alt="">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pb-4">
        <div class="col-md-12 pb-3">
          Example Monastery (4/5 Stars of 5 Reviews – 15 Total Stays)<br>
        </div>
        <div class="col-md-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius tempora illum excepturi laborum aliquid labore, minus nihil, quasi ab quibusdam aperiam quia. Ratione nisi numquam consequatur vitae quae dolor unde commodi sapiente temporibus, odio quos dolorum asperiores laboriosam explicabo cupiditate ex! Facere exercitationem omnis odit tenetur, voluptas quo consequatur praesentium ab ipsam, nostrum architecto. Minus in non numquam itaque id dicta veniam nisi vitae alias obcaecati, esse cum deleniti sit maiores voluptatum? Repudiandae soluta nostrum eligendi voluptate voluptates nam praesentium molestias molestiae totam possimus, autem adipisci ab labore, numquam aspernatur enim ut alias consequuntur voluptatem sint quos! Quod, ad. Assumenda.
        </div>
        <div class="col-md-4">
          <div class="pb-3">
            Accommodation Info <br>
            Two beds, desk and lamp.
          </div>
          <div class="pb-3">
            Host Info <br>
            xxx <br>
            1-415-555-4321
          </div>
          <div class="pb-3">
            Location <br>
            xxx
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row pb-3">
        <div class="col-md-12">
          <hr>
        </div>
      </div>
    </div>

    <!-- Start Availability -->
    <div class="container">
      <div class="row pb-3">
        <div class="col-md-12">
          Availability
        </div>
      </div>

      <!-- Start List -->
      <div class="row pb-4">
        <div class="col-md-3">
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          Duration: 4 days
        </div>
        <div class="col-md-3">
          Price: $200
        </div>
        <div class="col-md-3 text-center">
          <button @click="handleRequest()" class="w-100">Request</button><br>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          Duration: 4 days
        </div>
        <div class="col-md-3">
          Price: $200
        </div>
        <div class="col-md-3 text-center">
          <button @click="handleRequest()" class="w-100">Request</button><br>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          Duration: 4 days
        </div>
        <div class="col-md-3">
          Price: $200
        </div>
        <div class="col-md-3 text-center">
          <button @click="handleRequest()" class="w-100">Request</button><br>
        </div>
      </div>
    </div>

    <!-- Page Divider -->
    <div class="container">
      <div class="row pb-3">
        <div class="col-md-12">
          <hr>
        </div>
      </div>
    </div>

    <!-- Start Reviews -->
    <div class="container">
      <div class="row pb-3">
        <div class="col-md-12">
          Reviews (5)
        </div>
      </div>

      <!-- Start Review List -->
      <div class="row pb-4">
        <div class="col-md-4 pb-4">
          Reviewer (Rating) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Reviewer (Rating) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Reviewer (Rating) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Reviewer (Rating) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Reviewer (Rating) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
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
    handleRequest() {
      if (this.loggedIn) {
        alert('Request Sent')
      } else {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
}
</script>

<style>
</style>
