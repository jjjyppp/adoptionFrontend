<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import {ElButton} from "element-plus";
import RecommendCard from "@/components/RecommendCard.vue";

</script>
<script>
import router from "@/router";

export default {
  methods:{
    toAdoption(){
      router.push({
        name:"adoptionPage"
      })
    }
  }
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;height: 1050px;align-items: center;justify-content: center;">
  <h1 style="padding-top: 140px;font-family: 'PingFang HK' ; color: #4D4751 ">您还未添加收藏哦！</h1>
  <br>
  <p style="font-size: 18px; color: gray">当您看到喜欢的宠物时，可以点击收藏按钮将它添加到收藏列表</p>
  <br>
  <el-button class="button" round @click="toAdoption">浏览宠物狗</el-button><br>
  <el-button class="button" round @click="toAdoption">浏览宠物猫</el-button><br>
  <el-button class="button" round @click="toAdoption" style="margin-bottom: 70px">浏览其他宠物</el-button>
  <div style="align-items: center;justify-content: center;margin: 40px;">
    <recommend-card></recommend-card>
  </div>
  </body>
  <footer-card></footer-card>
</template>

<style scoped>
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