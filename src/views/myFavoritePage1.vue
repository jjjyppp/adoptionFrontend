<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import { store } from "@/store/store";

</script>
<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";

export default {
  components:{PetDisplayCard},
  data() {
    return {
      pets: [
        // { id: 1, name: '猫猫1', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        // { id: 2, name: '猫猫2', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },

      ],
    };
  },
  computed: {
    // 使用计算属性获取所有宠物信息
    pets() {
      return this.$store.state.pets;  // 假设你的所有宠物信息存储在 state.pets 中
    },
  },
  // methods() {
  //   getPetById(petId) {
  //     return this.pets.find(pet => pet.id === petId);
  //   },
  // },
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;align-items: center;justify-content: center;">
  <h1 style="padding-top: 40px;padding-left: 60px;font-family: 'PingFang HK';text-align: left; color: #4D4751">我的收藏</h1>
  <br>
  <div class="pet-container">
    <PetDisplayCard
        style="margin-right: 10px"
        v-for="(petId) in store.favoritePets"
        :key="petId"
        :pet="getPetById(petId)" />
  </div>

  <div style="align-items: center;justify-content: center;padding: 40px;">
    <recommend-card></recommend-card>
  </div>
  </body>
  <footer-card></footer-card>
</template>

<style scoped>
.pet-container {
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-wrap: wrap;
}
</style>