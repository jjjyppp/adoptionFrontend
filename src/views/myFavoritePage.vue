<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import {store} from "@/store/store";
import {ElButton} from "element-plus";
</script>

<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import {request} from "@/utils/request";
import {store} from "@/store/store";
import router from "@/router";

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
  mounted() {},
  methods: {
    toAdoptionDog(){
      router.push({
        name: 'adoptionPage', query:{type: 'dog'}
      })
    },
    toAdoptionCat(){
      router.push({
        name: 'adoptionPage', query:{type: 'cat'}
      })
    },
    toAdoptionRabbit(){
      router.push({
        name: 'adoptionPage', query:{type: 'rabbit'}
      })
    },
    toAdoptionOther(){
      router.push({
        name: 'adoptionPage', query:{type: 'other'}
      })
    },
  }
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;align-items: center;justify-content: center;">
  <h1 style="padding-top: 40px;padding-left: 60px;font-family: 'PingFang HK';text-align: left; color: #4D4751">我的收藏</h1>
  <br>
  <div class="pet-container" v-show="store.favoritePets.length!==0">
    <PetDisplayCard
        style="margin-right: 10px"
        v-for="(pet, index) in store.favoritePets"
        :key="index"
        :pet="pet" />
    <!--    <PetDisplayCard-->
    <!--        style="margin-right: 10px"-->
    <!--        v-for="(pet, index) in pets"-->
    <!--        :key="index"-->
    <!--        :pet="pet"-->
    <!--    />-->
  </div>

  <div style="margin-top: -100px" v-show="store.favoritePets.length===0">
    <h1 style="padding-top: 140px;font-family: 'PingFang HK' ; color: #4D4751 ">您还未添加收藏哦！</h1>
    <br>
    <p style="font-size: 18px; color: gray">当您看到喜欢的宠物时，可以点击收藏按钮将它添加到收藏列表</p>
    <br>
    <el-button class="button" round @click="toAdoptionDog">浏览宠物狗</el-button><br>
    <el-button class="button" round @click="toAdoptionCat">浏览宠物猫</el-button><br>
    <el-button class="button" round @click="toAdoptionRabbit">浏览宠物兔</el-button><br>
    <el-button class="button" round @click="toAdoptionOther" style="margin-bottom: 70px">浏览其他宠物</el-button>
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

.button {
  font-size: 18px;
  width: 300px;
  height: 45px;
  border: 1px solid #fff;
  background-color: #6504B5;
  margin-bottom: 15px;
  color: white;
}
.button:hover {
  background-color: #2e0152;
}
</style>