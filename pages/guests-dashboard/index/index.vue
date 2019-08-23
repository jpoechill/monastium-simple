<template>
  <div>
    <!-- Start Reservation -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          Current Reservations
          <hr>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span><br>
                Room <span class="float-right">#002</span><br>
                Paid <span class="float-right">$400.00</span><br>
                Res. ID <span class="float-right">AAA123</span><br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status 
                <span class="float-right text-success">Active</span> <br>
                <span class="float-right text-success">(3 days left)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100" data-toggle="modal" data-target="#reportIssue">
            Report Issue
          </button>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status <span class="float-right text-info">Request Accepted</span>
                 <span class="float-right text-info">(arrive in 10 days)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100" data-toggle="modal" data-target="#cancelReservation">
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>

    <!-- Start Requests -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          Reservation Requests
          <hr>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status <span class="float-right text-warning">Pending Host</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100" data-toggle="modal" data-target="#cancelRequest">
            Cancel Request
          </button>
        </div>
      </div>
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status <span class="float-right text-warning">Pending Host</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100" data-toggle="modal" data-target="#cancelRequest">
            Cancel Request
          </button>
        </div>
      </div>
    </div>

    <!-- Start History -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          Reservation History
          <hr>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status <span class="float-right text-primary">Completed</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button type="button" class="w-100" data-toggle="modal" data-target="#exampleModal">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status <span class="float-right text-primary">Completed</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <nuxt-link to="/example-monastery">Go to review.</nuxt-link>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container px-2">
            <div class="row">
              <div class="col-md-12 bg-light rounded p-3">
                Dates <span class="float-right">01/01/01 - 02/02/01</span><br>
                Duration <span class="float-right">4 days</span> <br>
                Room <span class="float-right">#002</span> <br>
                Paid <span class="float-right">$400.00</span> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                Status 
                <span class="float-right text-danger">Cancelled</span><br>
                <span class="float-right text-danger">(by Guest)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          No actions available.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade'
}
</script>

<style>
</style>
