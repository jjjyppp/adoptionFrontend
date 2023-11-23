<template>

  <div class="col-xl-3 col-md-3 col-6">
    <div class="animal-box text-center mb-3">
      <a>
        <div class="pet-img">
          <img src="src/views/assets/img/cat1.jpg" alt="">
        </div>
        <p class="fs-3 pt-3 mb-0 ">猫猫</p>
        <p class="py-0 mb-0">六岁 南京</p>
      </a>
      <a href="#"><span class="bg-light like-button"><i
          class="fa-regular fa-heart"></i></span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetDisplayCard"
}
</script>

<style scoped>
@import url('src/views/assets/css/plugin.css');
@import url('src/views/assets/css/main.css');
</style>