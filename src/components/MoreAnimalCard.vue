<template>
  <div class="more-card">
    <div style="margin-top: 20px">
      <img class="img" src="../assets/icons/other-white.png" alt="">
    </div>
    <p class="sentence">这里有来自150000位用户的待领养宠物</p>
    <el-divider style="width:220px; margin: 0"></el-divider>
    <button class="bt" @click="more">了解更多</button>
  </div>
</template>

<script>


import {ElDivider} from "element-plus";
import router from "@/router";

export default{
  components:{ElDivider},
  methods:{
    more(){
      router.push({
        name:"adoptionPage"
      })
    }
  }
}

</script>

<style scoped>
.more-card{
  width: 220px;
  height: 278px;
  background-color: #6504B5;
  font-weight: 600;
  border-radius: 10px;
  overflow: hidden;
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
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
  width: 220px;
  height: 60px;
  //margin-top: -40px;
  //padding-left: 60px;
  text-align: center;
}

.bt:hover{
  background-color: #3c036a;
}

</style>