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
        {index:1,title:'宠物寻找:',content:'有关宠物领养、宠物护理等方面的特别信息，以及有关重要新闻和优惠的不定期消息。阅读隐私政策和关于我们的广告'},
        // {index:2,title:'PURINA AND ITS BRANDS:',content:'Receive the latest special deals, inspiring stories, great advice, and awesome videos via email and other marketing communications fronPurina and its brands. Read the Privacy Policy and About Our Ads.'},
        // {index:3,title:'PETFINDER FOUNDATION:',content:'Updates from the Petfinder Foundation, a nonprofit 501(C)(3) organization that assists the animal shelters and rescue groups that posttheir adoptable pets on Petfinder.com'},
        {index:4,title:'合作伙伴信息和优惠：',content:'来自我们合作伙伴的通信、特别优惠和更多信息。'},
        {index:5,title:'保存搜索:',content:'单击此处管理已保存的搜索电子邮件'},
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