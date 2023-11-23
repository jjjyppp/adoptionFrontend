<template>
  <div class="info">
    <span class="country">宠物领养网站</span>
    <span class="phone">Phone:13811111111</span>
    <span class="email">Email:0123456789@qq.com</span>
  </div>

  <div>
    <el-menu router :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#6504b5"
             text-color="#fff"
             active-text-color="#F9F3FE">
      <el-menu-item index="/" style="width: 120px">首页</el-menu-item>
      <el-sub-menu index="2" style="width: 120px">
        <template v-slot:title="title">宠物领养</template>
        <el-menu-item index="/adoption">我要领养</el-menu-item>
        <el-menu-item index="/rehome">我要送养</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/board" style="width: 120px">宠物寄养</el-menu-item>
      <el-menu-item index="/lostPet" style="width: 120px">帮它找家</el-menu-item>
      <el-menu-item index="/store" style="width: 120px">用品商城</el-menu-item>
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
  height: 50px;
  text-align: left;
  padding-top: 2px;
  //color: #6504B5;
}

.country{
  margin-left: 30px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #6504B5;
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

.el-menu-demo{
  height: 50px;
}


</style>