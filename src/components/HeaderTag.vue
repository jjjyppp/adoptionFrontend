<template xmlns="http://www.w3.org/1999/html">
  <div class="header">
    <div class="blank1">
      <img src="../assets/icons/logo.png" alt="" style="height: 60px">
    </div>
<!--    <el-link :underline="false" class="logo-link" href="#">网站名</el-link>-->
<!--    <div class="blank2"></div>-->
    <!--    <div>-->
<!--    <el-icon size="30" class="location">-->
<!--      <location-information/>-->
<!--    </el-icon>-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <el-cascader placeholder="我的位置" size='large' class="cascader" style="max-width: 420px; flex: 0 0 30%;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>-->
<!--    <div>-->
<!--      <button class="adoption-bt">-->
<!--        我要领养-->
<!--      </button>-->
<!--    </div>-->

    <div style="flex:0 0 35%">
      <el-menu router :default-active="$route.path"
               class="el-menu"
               mode="horizontal"
               style="border-bottom: none !important;"
               active-text-color="#DDB4FF"
               background-color="#6504B5"
               text-color="#ffffff">
        <el-menu-item  index="/" class="item" >首页</el-menu-item>
        <el-sub-menu index="2">
          <template v-slot:title="title">宠物领养</template>
          <el-menu-item @click="toAdoptionDog" >宠物狗</el-menu-item>
          <el-menu-item @click="toAdoptionCat">宠物猫</el-menu-item>
          <el-menu-item @click="toAdoptionRabbit">兔子</el-menu-item>
          <el-menu-item @click="toAdoptionOther">其他动物</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/rehome">宠物送养</el-menu-item>
      </el-menu>
    </div>

    <div class="blank3"></div>
    <div style="margin-right: 5px">
      <el-icon size="32" class="message-icon" @click="showChat" >
        <ChatDotRound style="color: white"/>
      </el-icon>
    </div>
    <div v-show="chat" class="chatPane">
      <chat-pane @cancelChat="cancelChat"></chat-pane>
    </div>
    <div>
      <el-divider direction="vertical" class="divider"></el-divider>
    </div>
    <div class="fav" style="display: flex">
      <button class="icon-button" @click="toFavorites">
<!--        <img src="../assets/icons/favorites.png" alt="" style="height: 35px;">-->
        <svg x="1701777721409" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6214" width="25" height="25"><path d="M32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512L562.592 892.8a96 96 0 0 1-124.416-1.952l-308.16-270.688A278.976 278.976 0 0 1 32 407.584z" fill="#ffffff" p-id="6215"></path></svg>
      </button>
      <el-link :underline="false" class="mine" @click="toFavorites">我的收藏</el-link>
    </div>
    <div class="user" v-if="login" style="display: flex">
      <button class="icon-button" @click="toMine">
<!--        <img src="../assets/icons/user.png" alt="" style="height: 35px;background-color: #F9F3FE">-->
        <svg x="1701608125180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7068" width="25" height="25"><path d="M266.24 267.52a248.32 244.48 0 1 0 496.64 0 248.32 244.48 0 1 0-496.64 0zM628.48 593.28H421.76a320 320 0 0 0-320 315.52v20.48c0 71.04 143.36 71.04 320 71.04h206.72c177.28 0 320 0 320-71.04V908.8a320 320 0 0 0-320-315.52z" fill="#ffffff" p-id="7069"></path></svg>
      </button>
      <el-link :underline="false" class="mine" href="#/mine">我的主页</el-link>
    </div>
    <div class="login" v-if="!login" style="display: flex">
      <button class="icon-button" @click="toLogin">
        <svg x="1701608125180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7068" width="32" height="32"><path d="M266.24 267.52a248.32 244.48 0 1 0 496.64 0 248.32 244.48 0 1 0-496.64 0zM628.48 593.28H421.76a320 320 0 0 0-320 315.52v20.48c0 71.04 143.36 71.04 320 71.04h206.72c177.28 0 320 0 320-71.04V908.8a320 320 0 0 0-320-315.52z" fill="#ffffff" p-id="7069"></path></svg>
<!--        <img src="../assets/icons/user.png" alt="" style="height: 35px;">-->
      </button>
      <el-link :underline="false" class="mine" href="#/login">注册/登录</el-link>
    </div>
   </div>
<!--  <el-divider class="bottom-divider"></el-divider>-->
</template>
<script>
import {ElLink, ElCascader, ElIcon, ElDivider, ElMenu, ElSubMenu, ElMenuItem} from "element-plus";
import {codeToText, regionData} from "element-china-area-data";
import {LocationInformation, ChatDotRound, Discount} from "@element-plus/icons-vue";
import global from "@/views/assets/js/global_variable.js";
import router from "@/router";
import ChatPane from "@/components/ChatPane.vue";
export default {
  name: "HeaderTag",
  components:{Discount, ChatPane, ElLink, ElCascader, ElIcon,  ElMenu, ElSubMenu, ElMenuItem, LocationInformation, ElDivider, ChatDotRound},
  data(){
    return{
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
      login: false,
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
    toAdoptionDog(){
      router.push({
        name: 'adoptionPage', query:{type: 'dog'}
      })
    },
    toAdoptionCat(){
      router.push({
        name: 'adoptionPage', query:{type: 'cat'}
      })
    },
    toAdoptionRabbit(){
      router.push({
        name: 'adoptionPage', query:{type: 'rabbit'}
      })
    },
    toAdoptionOther(){
      router.push({
        name: 'adoptionPage', query:{type: 'other'}
      })
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
  background-color: #6504B5;
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
  color: white;
}

.logo-link:hover{
  color: #DDB4FF;
}

.location{
  flex: 0 0 3%;
  justify-content: start;
  //margin-left: 700px;
  //margin-top: 12px;
}


.message-icon{
  margin-top: 7px;
  margin-right: 6px;
  cursor: pointer;
  border-radius: 5px;
}

.message-icon:hover{
  background-color: #DDB4FF;
}

.mine{
  flex: 0 0 6%;
  min-width: 80px;
  justify-content: start;
  //margin-left: 40px;
  height: 50px;
  padding-left: 2px;
  font-size: 14px;
  font-weight: normal;
  color: white;
}

.mine:hover{
  color: #DDB4FF;
}

.mine-icon :hover{
  fill: #DDB4FF;
}


.icon-button{
  border: none;
  background-color: #6504B5;
  padding: 4px;
  //margin: 0;
  //margin-left: 2px;
}

.el-menu{

}

.bottom-divider{
  height: auto;
  margin: 0;
}

.blank1{
  flex: 0 0 4%;
  background-color: white;
}

.blank2{
  flex: 0 0 12%;
}

.blank3{
  flex: 0 0 35%
}

.chatPane{
  position: absolute;
  top: 60px;
  z-index: 10
}

.item{
  width: 130px
}

/*
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
}
 */



@media (max-width: 1130px) {
  .location,
  .login,
  .mine,
  .divider,
  .blank1,
  .blank2
  {
    display: none; /* 隐藏部分链接 */
  }



  .blank3
  {
    flex: 0 0 40%;
  }

  .logo-link{
    flex: 0 0 20%;
  }
  .cascader {
    flex: 0 0 60%; /* 在小屏幕上增加 Cascader 的宽度 */
  }
}

@media (max-width: 800px) {
  .blank3
  {
    display: none;
  }
}



</style>