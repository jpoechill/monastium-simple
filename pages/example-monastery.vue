<template>
  <div>
    <!-- Start Review Modal -->
    <div 
      class="modal fade" 
      id="requestReservation" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="requestReservationLabel" 
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body pb-0">
            <p>
              Request Reservation
            </p>
            <p>
              Your card will be charged $xx.xx and a reservation request will be sent to host. 
            </p>
            <p>
              Upon approval, your request will be reserved. The reservation will be ready for stay at the date and time agreed upon.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="w-50" data-dismiss="modal">Cancel</button>
            <button type="button" class="w-50" data-dismiss="modal">Leave Review</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="row">
        <div class="col-md-6">
          <div>
            <nuxt-link to="/example-monastery">
              <img src="/ph-monastery.png" class="w-100 rounded" alt="">
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <nuxt-link to="/example-monastery">
              <img src="/ph-monastery.png" class="w-100 rounded" alt="">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Description -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Example Monastery (4/5 Stars of 5 Reviews – 15 Total Stays)
          <hr>
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

    <!-- Start Availability -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Availability
          <hr>
        </div>
      </div>

      <div class="row pb-4">
        <div class="col-md-3">
          Room #001 <br>
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          <br>
          Duration: 4 days
        </div>
        <div class="col-md-3">
          <br>
          Price: $200/night
        </div>
        <div class="col-md-3 text-center">
          <br>
          Unavailable
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          Room #002 <br>
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          <br>
          Duration: 4 days
        </div>
        <div class="col-md-3">
          <br>
          Price: $200/night
        </div>
        <div class="col-md-3 text-center">
          <br>
          Pending Approval
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          Room #003 <br>
          01/01/2020 - 01/01/2020
        </div>
        <div class="col-md-3">
          <br>
          Duration: 4 days
        </div>
        <div class="col-md-3">
          <br>
          Price: $200/night
        </div>
        <div class="col-md-3 text-center">
          <br>
          <button class="w-100"  data-toggle="modal" data-target="#requestReservation">
            Request
          </button>
        </div>
      </div>
    </div>

    <!-- Start Reviews -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Reviews (5)
          <hr>
        </div>
      </div>

      <div class="row pb-3">
        <div class="col-md-4 pb-4">
          Fake Reviewer (5 Stars) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Fake Reviewer (5 Stars) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Fake Reviewer (5 Stars) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Fake Reviewer (5 Stars) <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur accusantium laboriosam quae doloribus necessitatibus molestias? Tempora totam hic ipsa modi. Alias repellendus quae placeat at dolorum unde natus magni.
        </div>
        <div class="col-md-4 pb-4">
          Fake Reviewer (5 Stars) <br>
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
  },
  transition: 'fade'
}
</script>

<style>
</style>
