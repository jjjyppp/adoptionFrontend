<template>
  <div class="contentall">
    <div class="title" v-for="item in info" :key="item.index">
      <p>{{item.title}}</p>
      <div class="box">
      <span >{{item.content}}</span>
      <span style="color: #6504b5;font-weight: 700;">Yes</span>
      </div>
    </div>
      <el-button class="button"
               color="#6503b5"
               size="large"
               round>add a pet</el-button>
  </div>
</template>

<script>
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
      info:[
        {index:1,title:'PETFINDER:',content:'Special info on pet adoption, pet care and more, plus occasional messages about important news and offers Read the Privacy Policy andAbout Our Ads.'},
        {index:2,title:'PURINA AND ITS BRANDS:',content:'Receive the latest special deals, inspiring stories, great advice, and awesome videos via email and other marketing communications fronPurina and its brands. Read the Privacy Policy and About Our Ads.'},
        {index:3,title:'PETFINDER FOUNDATION:',content:'Updates from the Petfinder Foundation, a nonprofit 501(C)(3) organization that assists the animal shelters and rescue groups that posttheir adoptable pets on Petfinder.com'},
        {index:4,title:'PARTNER MESSAGES 8 OFFERS:',content:'Communications, special offers and more from our partners'},
        {index:5,title:'SAVD SEARCH:',content:'Click here to manage your saved search emails'},
      ]
    };
  },
  methods: {
  }
}

</script>

<style scoped>
.contentall{
  padding: 20px;
}
.title {
  width: 100%;
  font-size: 16px;
  text-align: left;
}
.title p {
  padding-top: 20px;
  font-weight: 700;
  text-align: left;
  width: 45%;
  margin-bottom: 0px;
}
.title span {
  text-align: left;
  font-weight: 400;
  font-size: 16px;
}
.formcontent {
}
.el-form-item {
  width: 43%;
  margin-left: 20px;
}
.button {
  width: 45%;
  float: left;
  margin-left: 10px;
  margin-right: 54%;
  margin-bottom: 20px;
  margin-top: 20px;
}
.tip {
  font-size: 14px;
  width: 100%;
  height: 5%;
  padding-top: 60px;
  padding-bottom: 15px;
}
.box{
  display: flex;
  text-align: center;
  justify-content: space-between;
  width:95%;
  
}
</style>