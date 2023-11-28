<template>
  <div class="header">
    <el-link :underline="false" class="logo-link" href="#">网站名</el-link>
<!--    <div>-->
    <el-icon size="30" class="location">
      <location-information/>
    </el-icon>
<!--    </div>-->
    <el-cascader placeholder="我的位置" size='large' class="cascader" style="max-width: 410px; flex: 0 0 28%;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
    <div style="flex: 0 0 30%"></div>
<!--    <el-divider direction="vertical" class="divider"></el-divider>-->
    <el-link :underline="false" class="login" href="#/login">注册/登录</el-link>
    <el-link :underline="false" class="mine" href="#/mine">我的主页</el-link>
  </div>
  <el-divider class="bottom-divider"></el-divider>

  <!--  <div>-->
<!--    <el-menu router :default-active="$route.path"-->
<!--             class="el-menu-demo"-->
<!--             mode="horizontal"-->
<!--             background-color="#6504b5"-->
<!--             text-color="#fff"-->
<!--             active-text-color="#F9F3FE">-->
<!--      <el-menu-item index="/" style="width: 120px">首页</el-menu-item>-->
<!--      <el-sub-menu index="2" style="width: 120px">-->
<!--        <template v-slot:title="title">宠物领养</template>-->
<!--        <el-menu-item index="/adoption">我要领养</el-menu-item>-->
<!--        <el-menu-item index="/rehome">我要送养</el-menu-item>-->
<!--      </el-sub-menu>-->
<!--      <el-menu-item index="/board" style="width: 120px">宠物寄养</el-menu-item>-->
<!--      <el-menu-item index="/lostPet" style="width: 120px">帮它找家</el-menu-item>-->
<!--      <el-menu-item index="/store" style="width: 120px">用品商城</el-menu-item>-->
<!--      <el-menu-item index="/login" style="margin-left: 645px;">注册/登录</el-menu-item>-->
<!--      <el-menu-item index="/mine">我的主页</el-menu-item>-->
<!--    </el-menu>-->
<!--  </div>-->
</template>

<script>
import {ElLink, ElCascader, ElIcon, ElDivider} from "element-plus";
import {codeToText, regionData} from "element-china-area-data";
import {LocationInformation} from "@element-plus/icons-vue";
import global from "@/views/assets/js/global_variable.js";
export default {
  name: "HeaderTag",
  components:{ElLink, ElCascader, ElIcon, LocationInformation, ElDivider},
  data(){
    return{
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
    }
  },
  mounted() {
    if(global.address[0]!==""){
      this.selectedOptions=global.address
    }
  },
  methods: {
    addressChange (arr) {
      console.log(this.selectedOptions)
      console.log(arr)
      console.log(codeToText[arr[0]]+codeToText[arr[1]]+codeToText[arr[2]])
      global.address=this.selectedOptions
    },
  }
}

</script>

<style scoped>
.header{
  display: flex;
  //justify-content: space-between;
  align-items: center;
  //text-align: left;
  //display: flex;
  //justify-content: left;
}

.divider{
  flex: 0 0 1%;
  height: 60px;
  justify-content: end;
  //margin-left: 20px;
}

.logo-link{
  flex: 0 0 24%;
  //align-items: start;
  //height: 50px;
  justify-content: left;
  padding-left: 50px;
  //padding-top: 2px;
  font-size: 26px;
}

.logo-link:hover{
  color: #6504B5;
}

.location{
  flex: 0 0 3%;
  justify-content: start;
  //margin-left: 700px;
  //margin-top: 12px;
}

.login{
  flex: 0 0 6%;
  height: 50px;
  justify-content: start;
  //margin-left: 20px;
  //padding-top: 2px;
  font-size: 16px;
}

.mine{
  flex: 0 0 5%;
  justify-content: start;
  //margin-left: 40px;
  height: 50px;
  //padding-top: 2px;
  font-size: 16px;
}

.login:hover{
  color: #6504B5;
}

.mine:hover{
  color: #6504B5;
}

.bottom-divider{
  height: auto;
  margin: 0;
}

@media (max-width: 768px) {
  .location,
  .login,
  .mine,
  .divider{
    display: none; /* 隐藏部分链接 */
  }

  .logo-link{
    flex: 0 0 10%;
  }
  .cascader {
    flex: 0 0 60%; /* 在小屏幕上增加 Cascader 的宽度 */
  }
}


</style>