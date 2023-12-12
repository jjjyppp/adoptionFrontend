<template>

  <div class="more-card">
    <div style="margin-top: 20px">
      <img class="img" src="../assets/icons/other-white.png" alt="">
    </div>
    <p class="sentence">这里有来自150000位用户的待领养宠物</p>
    <el-divider style="width:220px; margin: 28px 0 0;"></el-divider>
    <button class="bt" @click="choose">了解更多</button>
  </div>
  <div class="choose-animal-card" v-show="showChooseCard">
    <choose-animal-card @backToHome="backToHomeHandler"></choose-animal-card>
  </div>

</template>

<script>


import {ElDivider} from "element-plus";
import chooseAnimalCard from "@/components/ChooseAnimalCard.vue";
import {Delete} from "@element-plus/icons-vue";

export default{
  components:{Delete, ElDivider,chooseAnimalCard},
  data(){
    return{
      showChooseCard:false,
    }
  },
  methods:{
    choose(){
      document.body.style.overflow = 'hidden';
      this.showChooseCard=true
    },
    backToHomeHandler(){
      document.body.style.overflow = '';
      this.showChooseCard=false
    },
  }
}

</script>

<style scoped>
.more-card{
  width: 220px;
  height: 286px;
  background-color: #6504B5;
  font-weight: 600;
  border-radius: 10px;
  overflow: visible;
  transition: all 1s;
  position: relative;
  margin-bottom: 1rem!important;
}

.img{
  width: 150px;
  overflow: hidden;
}

.sentence{
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
}

.bt{
  border: none;
  color: #fff;
  background-color: #6504B5;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
  width: 220px;
  height: 55px;
  border-radius: 10px;
  //margin-top: -40px;
  //padding-left: 60px;
  text-align: center;
}

.bt:hover{
  background-color: #3c036a;
}

.choose-animal-card {
  position: fixed;
  top: 0;
  z-index: 50;
  //position: absolute;
  //margin-left: -450px;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
}

</style>