<template>
  <div>
    <div class="adopt-card" @click="toDetail">
      <div>
        <img class="adopt-img" src="../assets/imgs/cat.jpg" alt="">
      </div>
      <div style="text-align: start; margin-left: 10px">
        <span class="name">猫猫1</span>
        <br>
        <span class="time" style="margin-top: -10px">领养日期:2023-11-11</span>
        <button class="bt" @click.stop="visit">联系前主人</button>
      </div>
      <br>
    </div>
    <div class="chat" v-show="showChat">
      <chat-pane @cancelChat="cancelChat"></chat-pane>
    </div>
  </div>
</template>

<script>



import router from "@/router";
import ChatPane from "@/components/ChatPane.vue";

export default{
  components: {ChatPane},
  data(){
    return{
      showChat: false
    }
  },
  methods:{
    visit(){
      document.body.style.overflow = 'hidden';
      this.showChat=true
    },
    cancelChat(){
      document.body.style.overflow = '';
      this.showChat=false
    },
    toDetail(){
      router.push({
        path:"/petDetail1"
      })
    },
  }
}

</script>

<style scoped>
.adopt-card{
  width: 400px;
  height: 120px;
  background-color: white;
  font-weight: 600;
  border-radius: 6px;
  overflow: visible;
  transition: all 1s;
  position: relative;
  margin-bottom: 1rem!important;
  display: flex;
  border: 1px solid #d2d1d3;
  box-shadow: 0 0 0 2px #6504b5;
}

.chat{
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 50;
}

.adopt-card:hover{
//background-color: white;
  box-shadow: 0 0 0 3px #6504b5;
//transition: 0.5s;
  backdrop-filter: blur(5px); /* 这里的值可以根据你的需求调整模糊程度 */
  background: rgba(0, 0, 0, 0.1);
  transition: 1s;
}

.adopt-img{
  height: 118px;
  width: 120px;
  overflow: hidden;
  border-radius: 6px;
}

.name{
  color: #6504B5;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  text-shadow: 0 1px 10px #d2d1d3, 0 0 4px #d2d1d3;
}

.bt{
  border: none;
  color: #fff;
  background-color: #6504B5;
  font-size: 14px;
  font-weight: 700;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
  width: 100px;
  height: 28px;
  border-radius: 6px;
  margin-left: 160px;
  margin-top: 30px;
}

.bt:hover{
  background-color: #3c036a;
}
</style>