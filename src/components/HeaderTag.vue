<template xmlns="http://www.w3.org/1999/html">
  <div class="header">
    <div class="blank1"></div>
    <el-link :underline="false" class="logo-link" href="#">网站名</el-link>
    <div class="blank2"></div>
    <!--    <div>-->
    <el-icon size="30" class="location">
      <location-information/>
    </el-icon>
<!--    </div>-->
    <el-cascader placeholder="我的位置" size='large' class="cascader" style="max-width: 420px; flex: 0 0 30%;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
    <div class="blank3"></div>
    <div>
      <el-icon size="32" class="message-icon" @click="showChat" >
        <ChatDotRound/>
      </el-icon>
    </div>
    <div v-show="chat" class="chatPane">
      <chat-pane @cancelChat="cancelChat"></chat-pane>
    </div>
    <div>
      <el-divider direction="vertical" class="divider"></el-divider>
    </div>
    <div class="fav" style="display: flex">
      <button class="icon-bt" @click="toFavorites"><img src="../assets/icons/favorites.png" alt="" style="height: 35px;"></button>
      <el-link :underline="false" class="mine" @click="toFavorites">我的收藏</el-link>
    </div>
    <div class="user" v-if="login" style="display: flex">
      <button class="icon-bt" @click="toMine"><img src="../assets/icons/user.png" alt="" style="height: 35px;"></button>
      <el-link :underline="false" class="mine" href="#/mine">我的主页</el-link>
    </div>
    <div class="login" v-if="!login" style="display: flex">
      <button class="icon-bt" @click="toLogin"><img src="../assets/icons/user.png" alt="" style="height: 35px;"></button>
      <el-link :underline="false" class="mine" href="#/login">注册/登录</el-link>
    </div>
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
import {LocationInformation, ChatDotRound} from "@element-plus/icons-vue";
import global from "@/views/assets/js/global_variable.js";
import router from "@/router";
import ChatPane from "@/components/ChatPane.vue";
export default {
  name: "HeaderTag",
  components:{ChatPane, ElLink, ElCascader, ElIcon, LocationInformation, ElDivider, ChatDotRound},
  data(){
    return{
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
      login: true,
      chat: false
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
    toFavorites(){
      if(!this.login){
        router.push({
          name:"loginPage"
        })
      }
      else {
        router.push({
          name: "myFavoritePage"
        })
      }
    },
    toMine(){
      router.push({
        name:"minePage"
      })
    },
    toLogin(){
      router.push({
        name:"loginPage"
      })
    },
    showChat(){
      document.body.style.overflow = 'hidden';
      this.chat=true
    },
    cancelChat(val){
      document.body.style.overflow = '';
      this.chat=false
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
  flex: 0 0 10%;
  //align-items: start;
  //height: 50px;
  justify-content: left;
  //padding-left: 50px;
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
  min-width: 80px;
  height: 50px;
  justify-content: start;
  //margin-left: 20px;
  //padding-top: 2px;
  font-size: 16px;
  /*border-right: 1px solid gray;*/
}

.message-icon{
  margin-top: 7px;
  cursor: pointer;
  border-radius: 5px;
}

.message-icon:hover{
  background-color: darkgrey;
}

.mine{
  flex: 0 0 5%;
  min-width: 80px;
  justify-content: start;
  //margin-left: 40px;
  height: 50px;
  //padding-top: 2px;
  font-size: 16px;
}

.login:hover{
  color: #6504B5;
}

.icon-bt{
  border: none;
  background-color: white
}

.mine:hover{
  color: #6504B5;
}

.bottom-divider{
  height: auto;
  margin: 0;
}

.blank1{
  flex: 0 0 4%
}

.blank2{
  flex: 0 0 14%
}

.blank3{
  flex: 0 0 18%
}

.chatPane{
  position: absolute;
  top: 60px;
  z-index: 100
}

@media (max-width: 1100px) {
  .location,
  .login,
  .mine,
  .divider,
  .blank1,
  .blank2
  {
    display: none; /* 隐藏部分链接 */
  }

  .logo-link{
    flex: 0 0 20%;
  }
  .cascader {
    flex: 0 0 60%; /* 在小屏幕上增加 Cascader 的宽度 */
  }
}

@media (max-width: 400px) {
  .blank3
  {
    display: none;
  }

  .logo-link{
    flex: 0 0 20%;
  }
  .cascader {
    flex: 0 0 60%;
  }
}



</style>