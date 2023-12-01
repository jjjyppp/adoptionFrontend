<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import {ElButton, ElCard, ElCarousel, ElCarouselItem,ElImage, ElIcon, ElDialog} from "element-plus";
import DetailCard from "@/components/DetailCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import FooterCard from "@/components/FooterCard.vue";
import AdvertisementCard from "@/components/AdvertisementCard.vue";


</script>

<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <body class="body" style="margin-top: 50px">

    <el-carousel @change="handleCarouselChange" :interval="4000" type="card" height="350px" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in images" :key="item"  style="margin: 10px">
        <div class="carousel-item-content" :style="{ filter: index !== currentIndex ? 'brightness(50%)' : 'brightness(100%)' }">
          <el-image
              style="width: 460px; height: 350px"
              :src="item.url"
              :fit="item.fit"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>


    <div class="container">

      <detail-card></detail-card>

      <div class="right" >


        <el-card class="adoption" shadow="hover" style = "border-radius: 15px">
          <div class="adoption-body">
            <p class="adoption-title">考虑收养我吗？</p>
            <el-button class="button1" round>我要收养</el-button><br>
            <el-button class="button2" round>加入收藏</el-button><br>
            <el-button class="instruction" style = "border-radius: 12px"  @click="showDialog">不清楚领养流程？点击这里</el-button>
<!--            <adoption-process-dialog v-model="dialogVisible" @close="handleDialogClose" />-->
            <adoption-process-dialog v-model="dialogVisible"/>
          </div>
        </el-card>

        <AdvertisementCard ></AdvertisementCard>

        <el-card class="el-card" shadow="hover" style = "border-radius: 15px">
          <span class="owner-information-title">送养人信息</span><br>
          <div class="owner-information">
              <img class="owner-img" src="https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1">
              <div class="owner-details">
                <span class="owner-name">张三</span>
                <div style="display: flex; align-items: center;">
                  <el-icon size="30">
                    <img src="../assets/icons/wechat.png" alt="" class="wechat-img" style="width: 25px; height: 25px;">
                  </el-icon>
                  <el-tag style="color: green ;margin-top: 0" >微信认证用户</el-tag>
                </div>
            </div>
          </div>
          <div class="info-container">
            <div class="info-block">
            <div class="info-number">100%</div>
            <div class="info-text">用户信誉</div>
          </div>

          <div class="info-block">
            <div class="info-number">0</div>
            <div class="info-text">已送养数</div>
          </div>

          <div class="info-block">
            <div class="info-number">0</div>
            <div class="info-text">已领养数</div>
          </div>
          </div>
        </el-card>

      </div>

      <RecommendCard style="margin: 20px"></RecommendCard>

    </div>

  </body>

  <footer-card></footer-card>
</template>

<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import AdoptionProcessDialog from "@/components/AdoptionProcessDialog.vue";


export default {
  components: {
    PetDisplayCard,AdoptionProcessDialog
  },
  data() {
    return {
      currentIndex: 0,
      dialogVisible: false,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      images: [
        { url: "https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/a81a96ce9b864f5486ca/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/5412f3ed6b55425ead4e/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/294b3b3d0e784a06b992/?dl=1", fit: 'fill' },
      ],
      pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
    }
  },
  methods: {
    handleCarouselChange(index) {
      this.currentIndex = index;
      // console.log('Carousel changed. New index:', index);
    },
    showDialog() {
      // console.log('showDialog method called');
      this.dialogVisible = true;
    },
  }
}
</script>

<style scoped>

.carousel-item-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px;
}
.body {
  background-color: #f0f0f0;
}
.container{
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-top: 20px;
}
.right {
  width: 32%;
  margin-left:5% ;
  /*style="display: flex;flex-direction: column;align-items: center;justify-content: center;"*/
}
.adoption {
  margin: 0;
  background: #6504B5;
  height: 250px;
}
.adoption-title {
  font-size: 25px;
  color: white;
}
.adoption-body {
  margin: 0;
}

.button1 {
  font-size: 20px;
  width: 80%;
  height: 40px;
  background-color: #fff;
  color: #6504B5;
  margin-bottom: 15px;
}
.button1:hover {
  background-color: #2e0152;
  color: white;
}

.button2 {
  font-size: 20px;
  width: 80%;
  height: 40px;
  border: 1px solid #fff;
  background-color: transparent;
  margin-bottom: 15px;
  color: white;
}
.button2:hover {
  background-color: #2e0152;
}


.instruction {
  font-size: 15px;
  background: transparent;
  color: white;
  border: transparent;
  text-decoration: underline;
}
.instruction:hover{
  color: cornflowerblue;
}


.el-card {
  margin-top: 30px;
  padding: 0;
}
.owner-information {
  display: flex;
  height: 80px;
  border-bottom: 1px solid #a9a9a9;
}
.owner-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
}
.owner-information-title {
  display: flex;
  font-size: 15px;

}
.owner-details {
  display: flex;
  flex-direction: column;
}

.owner-name {
  font-size: 25px;
  margin: 0;
}

.info-container {
  margin-top: 20px;
  display: flex;
  margin-bottom: 25px;
}
.info-block {
  width: 30%;
  text-align: center;
  margin: 0 10px;
}

.info-number {
  font-size: 24px;
  color: black;
}

.info-text {
  font-size: 14px;
  color: #888;
}


</style>