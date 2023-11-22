<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import {ElButton, ElCard, ElFooter, ElCarousel, ElCarouselItem,ElImage} from "element-plus";
import DetailCard from "@/components/detailCard.vue";
</script>

<template>
  <body class="body">
  <header-tag></header-tag>
  <el-carousel :interval="4000" type="card" height="300px" >
    <el-carousel-item v-for="(item, index) in images" :key="item">
      <div class="carousel-item-content">
        <el-image
            style="width: 400px; height: 300px"
            :src="item.url"
            :fit="item.fit"></el-image>
      </div>
    </el-carousel-item>
  </el-carousel>


  <div class="container">

    <detail-card></detail-card>

    <div class="right">


      <el-card class="adoption" shadow="hover" style = "border-radius: 15px">
        <div class="adoption-body">
          <p class="adoption-title">考虑收养我吗？</p>
          <el-button class="button1" round>我要收养</el-button><br>
          <el-button class="button2" round>加入收藏</el-button><br>
        </div>
      </el-card>


      <el-card class="el-card" shadow="hover" style = "border-radius: 15px">
        <span class="owner-information-title">送养人信息</span><br>
        <div class="owner-information">
            <img class="owner-img" src="https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1">
            <div class="owner-details">
              <span class="owner-name">张三</span>
              <el-tag style="color: green ;margin-top: 0" >微信认证用户</el-tag>
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


  </div>

  </body>
</template>

<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      images: [
        { url: "https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/a81a96ce9b864f5486ca/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/5412f3ed6b55425ead4e/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/294b3b3d0e784a06b992/?dl=1", fit: 'fill' },
      ]
    }
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
  margin-left: 60px;
  margin-top: 20px;
}
.right {
  width: 30%;
  margin-left:5% ;
  height: 300px;
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