<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";

import {store} from "@/store/store";
import {ElButton} from "element-plus";
</script>

<script>
import PetDisplayCardInFav from "@/components/PetDisplayCardInFav.vue";
import {request} from "@/utils/request";
import {store} from "@/store/store";
import router from "@/router";

export default {
  components:{PetDisplayCardInFav},
  data() {
    return {

    };
  },
  mounted() {},
  methods: {

  }
}
</script>
<template>

  <header-tag ></header-tag>
  <body style="background: #f0f0f0; min-height: 1150px;align-items: center;justify-content: center;">
    <div class="shelter-box py-5 px-4 ">
      <div class="img p-3"> <img src="src/assets/imgs/pet-house.png" alt=""></div>
    </div>
  </body>
      <footer-card></footer-card>

</template>

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