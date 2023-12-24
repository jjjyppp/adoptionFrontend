<template>
  <div class="shelter-box py-5 px-4 ">
    <div class="img p-3"> <img src="src/assets/imgs/pet-house.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "Avatar"
}
</script>

<style scoped>
.shelter-box {
  position: relative;
  width: 0%;
  height: 0%;
}
.shelter-box .img {
  position: absolute;
  border: 4px solid white;
  background-color: #6504b5;
  border-radius: 50px;
  box-shadow: 0 0 28px grey;
  top: 10px;
}
</style>