<template>
  <el-Card class="advertise" shadow="hover" style="border-radius: 0px;width: 98%;height: 240px;" v-show="showAd">
    <div slot="header" class="advertise-header">
      <el-button  @click="closeCard" style="background: transparent;border: transparent;float: right;height: 10px">
        <svg t="1703354264268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454" width="16" height="16"><path d="M632.117978 513.833356l361.805812 361.735298a85.462608 85.462608 0 1 1-121.001515 120.789974L511.116463 634.552816 146.913186 998.756094a86.026718 86.026718 0 0 1-121.706652-121.706652L389.480325 512.775651 27.674513 150.969839A85.392095 85.392095 0 0 1 148.393973 30.250379L510.199785 392.056191l366.671258-366.671258a86.026718 86.026718 0 0 1 121.706652 121.706652z" p-id="2455" fill="#ffffff"></path></svg>
      </el-button>
    </div>
    <div class="advertise-body">
      <br>
      <p style="color: white;margin-top: 1px;font-size: 24px;font-weight: bold">为爱找家，</p>
      <p style="color: white;margin-top: 1px;font-size: 24px;font-weight: bold">陪伴从PetPat开始。</p>
      <el-button class="sponsor" round>支持我们</el-button><br>
    </div>
  </el-Card>
</template>


<script>
import {ElCard, ElButton, ElIcon, ElImage} from "element-plus";
export default {
  components: {ElCard, ElButton, ElIcon, ElImage},
  data() {
    return {
      showAd: true
    }
  },
  methods: {
    closeCard() {
      this.showAd=false
    },
  },
};
</script>

<style scoped>
.advertise {
  background-image: url("../assets/imgs/ad01.jpg");
  background-size: cover;
}
.sponsor {
  margin-top: 20px;
  color: white;
  background-color: #6504B5;

}
.sponsor:hover {
  background-color: #2e0152;
  color: white;
}
</style>