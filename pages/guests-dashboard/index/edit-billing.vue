<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <div class="pb-2">
            Credit Card Number
            <input type="text" class="mt-2 p-1 pl-3" value="4747 4747 4747 4747">
          </div>
          <div class="pb-2">
            Expiry
            <input type="text" class="mt-2 p-1 pl-3" value="01/23">
          </div>
          <div class="pb-2">
            CCV
            <input type="text" class="mt-2 p-1 pl-3" value="123">
          </div>
          <div class="mt-2 text-center">
            <button class="w-100" @click="handleLogin()">
              Save Card
            </button>
          </div>
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
