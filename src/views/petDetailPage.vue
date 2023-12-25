<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import {ElButton, ElCard, ElCarousel, ElCarouselItem,ElImage, ElIcon, ElDialog} from "element-plus";
import DetailCard from "@/components/DetailCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import FooterCard from "@/components/FooterCard.vue";
import AdvertisementCard2 from "@/components/AdvertisementCard2.vue";
import DetailCard1 from "@/components/DetailCard1.vue";
import CertificationCard from "@/components/CertificationCard.vue";
import PersonalCertificationCard from "@/components/PersonalCertificationCard.vue";


</script>

<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <body class="body" style="margin-top: 50px">

    <el-carousel @change="handleCarouselChange" :interval="4000" type="card" height="380px" style="background-color: rgba(0, 0, 0, 0.8)" indicator-position="outside">
      <el-carousel-item v-for="(url, index) in pet.urls" :key="index" style="margin-top: 30px; background: transparent; height: 350px;">
          <el-image
              style="width: 100%; height: 100%; object-fit: cover;"
              :style="{ filter: index !== currentIndex ? 'brightness(50%)' : 'brightness(100%)'}"
              :src="url"
              fit="cover"
          ></el-image>
      </el-carousel-item>
    </el-carousel>

    <div class="container">
      <detail-card :petId="petId"></detail-card>
      <div class="right" >
        <el-card class="adoption" shadow="hover" style = "border-radius: 15px">
          <div class="adoption-body">
            <p class="adoption-title">考虑收养我吗？</p>
            <el-button class="button1" @click.stop="visit" round>我要收养</el-button><br>
            <el-button class="button2" @click="addToFavorites"  round>加入收藏</el-button><br>
            <el-button class="instruction" style = "border-radius: 12px"  @click="showDialog">不清楚领养流程？点击这里</el-button>
<!--            <adoption-process-dialog v-model="dialogVisible" @close="handleDialogClose" />-->
            <adoption-process-dialog v-model="dialogVisible"/>
          </div>
        </el-card>

        <AdvertisementCard2 ></AdvertisementCard2>

<!--        <el-card class="el-card" shadow="hover" style = "border-radius: 15px">-->
<!--          <span class="owner-information-title">送养人信息</span><br>-->
<!--          <div class="owner-information">-->
<!--              <img class="owner-img" src="https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1">-->
<!--              <div class="owner-details">-->
<!--                <span class="owner-name">张三</span>-->
<!--                <div style="display: flex; align-items: center;">-->
<!--                  <el-icon size="30">-->
<!--                    <img src="../assets/icons/wechat.png" alt="" class="wechat-img" style="width: 25px; height: 25px;">-->
<!--                  </el-icon>-->
<!--                  <el-tag style="color: green ;margin-top: 0" >微信认证用户</el-tag>-->
<!--                </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="info-container">-->
<!--            <div class="info-block">-->
<!--            <div class="info-number">100%</div>-->
<!--            <div class="info-text">用户信誉</div>-->
<!--          </div>-->

<!--          <div class="info-block">-->
<!--            <div class="info-number">0</div>-->
<!--            <div class="info-text">已送养数</div>-->
<!--          </div>-->

<!--          <div class="info-block">-->
<!--            <div class="info-number">0</div>-->
<!--            <div class="info-text">已领养数</div>-->
<!--          </div>-->
<!--          </div>-->
<!--        </el-card>-->

        <personal-certification-card v-if="pet.source!=='救助站'"></personal-certification-card>
        <certification-card v-else></certification-card>

      </div>
      <div class="chat" v-show="showChat">
        <chat-pane  @cancelChat="cancelChat"></chat-pane>
      </div>

      <RecommendCard style="margin: 60px"></RecommendCard>

    </div>

  </body>

  <footer-card></footer-card>
</template>

<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import AdoptionProcessDialog from "@/components/AdoptionProcessDialog.vue";
import ChatPane from "@/components/ChatPane.vue";
import {ElNotification} from "element-plus"
import router from "@/router";
import axios from "axios";
import {request} from "@/utils/request";
import {store} from "@/store/store";

export default {
  components: {
    PetDisplayCard,AdoptionProcessDialog,ElNotification,ChatPane
  },
  data() {
    return {
      petId: -1,
      showChat: false,
      currentIndex: 0,
      dialogVisible: false,
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      images: [
        { url: "https://box.nju.edu.cn/f/2b41d91a7d094e618fc6/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/a81a96ce9b864f5486ca/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/5412f3ed6b55425ead4e/?dl=1", fit: 'fill' },
        { url: "https://box.nju.edu.cn/f/294b3b3d0e784a06b992/?dl=1", fit: 'fill' },
      ],
      pet: {
        id: -1,
        address: '',
        age: '',
        attention: '',
        breed: '',
        gender: '',
        health: [],
        name: '',
        price: '',
        reason: '',
        requirements: [],
        type: '',
        size: '',
        source: '',
        story: '',
        urls: [],
        pet: ''
      }
    }
  },
  mounted() {
    this.petId=router.currentRoute.value.query.id
    request({
      url: `http://localhost:8080/pet/${this.petId}`,
      method: 'GET'
    }).then((res) => {
      console.log(res.data)
      this.pet=res.data
      console.log(this.pet.urls)
    }).catch((error) => {
    })
  },
  methods: {
    handleCarouselChange(index) {
      this.currentIndex = index;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    visit(){
      document.body.style.overflow = 'hidden';
      this.showChat=true
    },
    cancelChat(){
      document.body.style.overflow = '';
      this.showChat=false
    },
    addToFavorites() {
      this.isClicked = !this.isClicked;

      if(this.isClicked){
        const isPetInStore = store.favoritePets.find(pet => (pet.id===this.pet.id));
        if(!isPetInStore) {
          store.favoritePets.push(this.pet);
        }
        console.log(store.favoritePets);
        ElNotification({
          title: '您已成功收藏',
          message: '可以进入"我的收藏"中查看它哦',
          offset: 50,
          type: 'success'
        });
      } else {
        store.favoritePets = store.favoritePets.filter(pet => pet.id !== this.pet.id);
        console.log(store.favoritePets);
        ElNotification({
          title: '您已取消收藏',
          message: '再看看其他宠物吧!',
          offset: 50,
          type: 'error'
        });

      }
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
  margin-right: 0;
}
.right {
  width: 28%;
  margin-left: 2% ;
  //padding-left: 0%;
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
  border: none;
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

.chat{
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 50;
}

</style>