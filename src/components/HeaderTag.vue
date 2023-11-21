<template>
  <div class="info">
    <span class="country">CN</span>
    <span class="phone">Phone:13811111111</span>
    <span class="email">Email:0123456789@qq.com</span>
  </div>

  <div>
    <el-menu router :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <img src="../assets/imgs/logo.jpg" alt="" height="58"/>
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="2">
        <template v-slot:title="title">宠物领养</template>
        <el-menu-item index="/adoption">我要领养</el-menu-item>
        <el-menu-item index="/rehome">我要送养</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/board">宠物寄养</el-menu-item>
      <el-menu-item index="/lostPet">帮它找家</el-menu-item>
      <el-menu-item index="/store">用品商城</el-menu-item>
      <el-menu-item index="/login" style="margin-left: 645px;">注册/登录</el-menu-item>
      <el-menu-item index="/mine">我的主页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {ElMenu, ElMenuItem, ElSubMenu, ElButton} from "element-plus";
export default {
  name: "HeaderTag",
  components:{ElMenu, ElMenuItem, ElSubMenu, ElButton},
  data(){
    return{

    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>

<style scoped>
.info{
  text-align: left;
  padding-top: 2px;
  background-color: darkgrey;
}

.country{
  margin-left: 80px;
}

.phone{
  margin-left: 30px;
}

.email{
  margin-left: 40px;
}

.login{
  margin-left: 700px;
}

.myHome{
  margin-left: 20px;
}


</style>