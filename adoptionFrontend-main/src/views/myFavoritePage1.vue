<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";

</script>
<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";

export default {
  components:{PetDisplayCard},
  data() {
    return {
      pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 5, name: '猫猫5', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 6, name: '猫猫6', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 7, name: '猫猫7', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 8, name: '猫猫8', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 9, name: '猫猫9', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 10, name: '猫猫10', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
    };
  },
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;align-items: center;justify-content: center;">
  <h1 style="padding-top: 40px;padding-left: 60px;font-family: 'PingFang HK';text-align: left; color: #4D4751">我的收藏</h1>
  <br>
  <div class="pet-container">
    <PetDisplayCard style="margin-right: 10px" v-for="(pet) in pets" :key="pet.id" :pet="pet" />
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