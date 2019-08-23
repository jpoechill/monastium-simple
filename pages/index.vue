<template>
  <div>
    <div class="container py-4">
      <div class="row pb-4">
        <div class="col-md-12">
          Current Monasteries (3)
        </div>
      </div>
      <div class="row">
        <div v-for="n in 3" v-bind:key="n" class="col-md-4 col-item">
          <div>
            <nuxt-link to="/example-monastery">
              <img src="/ph-monastery.png" class="w-100 rounded" alt="">
            </nuxt-link>
              <div class="pt-3">
                <nuxt-link to="/example-monastery">Monastery XYZ</nuxt-link> 
                (15 Stays)
              </div>
          </div>
          <div class="py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, aliquid!
          </div>
          <span class="item-detail">
              Joe Smith <br>
              Somewhere Funwhere
          </span>
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
.rounded {
  border-radius: 6px !important;
}
</style>
