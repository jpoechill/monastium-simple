<template>
  <div>
    <div class="container mb-4">
      <div class="row">
        <div class="offset-md-4 col-md-4">
          <div class="pb-2">
            Name
            <input type="text" class="mt-2 p-1">
          </div>
          <div class="pb-2">
            Email
            <input type="text" class="mt-2 p-1">
          </div>
          <div class="pb-2">
            Favorite Color
            <input type="text" class="mt-2 p-1">
          </div>
          <div class="mt-2 text-center">
            <button class="w-100" @click="handleLogin()">
              Save Info
            </button>
          </div>
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
