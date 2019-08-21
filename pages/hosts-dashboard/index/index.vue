<template>
  <div>
    <!-- Start Current Reservations -->
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
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
                <span class="float-right text-success">Active</span> <br>
                <span class="float-right text-success">(departs in 4 days)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Report Issue
          </button>
        </div>
      </div>
      <div class="row pb-2">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
                <span class="float-right text-info">Waiting</span> <br>
                <span class="float-right text-info">(arrives in 4 days)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>

    <!-- Start Current Requests -->
    <div class="container pb-3">
      <div class="row">
        <div class="col-md-12">
          Reservation Requests
          <hr>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-2">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
                <span class="float-right text-warning">Pending Review</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100 mb-2">
            Approve
          </button>
          <button class="w-100">
            Deny
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
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
                <span class="float-right text-primary">Stay Completed</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
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
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
                <span class="float-right text-primary">Stay Completed</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <button class="w-100">
            Leave a Review
          </button>
        </div>
      </div>
    </div>
    <div class="container pb-3">
      <div class="row pb-4">
        <div class="col-md-3">
          <div class="container h-100 px-2">
            <div class="row h-100">
              <div class="col-md-12 bg-light rounded h-100 p-3">
                  <nuxt-link to="/example-monastery">Jack Johnson</nuxt-link>
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
export default {}
</script>

<style>
.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: '';
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  position: relative;
  top: 0.5em;
  transform: rotate(-45deg);
  vertical-align: top;
  width: 0.45em;
}

.chevron.right:before {
  left: 0;
  transform: rotate(45deg);
}

.chevron.bottom:before {
  top: 0;
  transform: rotate(135deg);
}

.chevron.left:before {
  left: 0.25em;
  transform: rotate(-135deg);
}
</style>
