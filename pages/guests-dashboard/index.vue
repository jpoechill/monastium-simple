<template>
  <div>
    <!-- Start Review Modal -->
    <div 
      class="modal fade" 
      id="exampleModal" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body pb-0">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit aut dolorem praesentium voluptate quod ad nulla nisi quos enim accusamus?
            </p>
            <p>
              Rating: <br>
              <input type="text" class="w-100 pb-2"><br>
            </p>
            Review: <br><textarea name="" id="" class="w-100" rows="6"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="w-50" data-dismiss="modal">Cancel</button>
            <button type="button" class="w-50" data-dismiss="modal">Leave Review</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Cancel Reservation Modal -->
    <div 
      class="modal fade" 
      id="cancelReservation" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="cancelReservationLabel" 
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Are you sure you want to cancel this reservation? 
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium ratione esse cumque minus, rerum voluptates quae et sit facilis.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="w-50" data-dismiss="modal">Cancel</button>
            <button type="button" class="w-50" data-dismiss="modal">Confirm Cancellation</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Cancel Request Modal -->
    <div 
      class="modal fade" 
      id="cancelRequest" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="cancelRequestLabel" 
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            Are you sure you want to cancel this request?
          </div>
          <div class="modal-footer">
            <button type="button" class="w-50" data-dismiss="modal">Cancel</button>
            <button type="button" class="w-50" data-dismiss="modal">Confirm Cancellation</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Report an Issue Modal -->
    <div 
      class="modal fade" 
      id="reportIssue" 
      tabindex="-1" 
      role="dialog" 
      aria-labelledby="reportIssueLabel" 
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius dolor quisquam quis omnis veniam dolorum non praesentium possimus quas?
            </p>
            <p>
              Report an Issue: <br>
            </p>
            <textarea name="" id="" class="w-100" rows="6"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="w-50" data-dismiss="modal">Cancel</button>
            <button type="button" class="w-50" data-dismiss="modal">Report Issue</button>
          </div>
        </div>
      </div>
    </div>

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
export default {
  transition: 'fade'
}
</script>

<style>
</style>
