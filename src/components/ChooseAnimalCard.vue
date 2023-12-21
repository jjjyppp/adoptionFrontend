<template>
  <div class="choose-back">
    <div style="padding-top: 200px">
    <div class="choose-card">
      <div class="head">
        <button @click="back" class="button-back">
          <svg x="1700642760769" class="back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6466" width="75" height="75"><path d="M711.1 928.3c-13.2 0-26.3-5-36.4-15.2L297.8 532.9c-20.1-20.2-20.1-53.1 0-73.3L674.7 79.2c20.1-20.3 52.6-20.3 72.7 0 20.1 20.2 20.1 53.1 0 73.3L406.9 496.2l340.5 343.6c20.1 20.3 20.1 53.1 0 73.3-10 10.1-23.2 15.2-36.3 15.2z" p-id="6467"></path></svg>
        </button>
      </div>
      <div style="margin-top: 12px">
        <h3 class="question">
          您想要寻找哪种宠物？
        </h3>
      </div>

     <ul class="list1">
        <li>
          <button class="card-button1">
            <img src="../assets/icons/dog1.png" alt="" class="choose-card-bt-img" @click="toAdoptionDog">
            <span class="card-text">宠物狗</span>
          </button>
        </li>
        <li>
          <button class="card-button1">
            <img src="../assets/icons/cat1.png" alt="" class="choose-card-bt-img" @click="toAdoptionCat">
            <span class="card-text">宠物猫</span>
          </button>
        </li>
      </ul>


      <ul class="list1">
        <li>
          <button class="card-button1">
            <img src="../assets/icons/rabbit1.png" alt="" class="choose-card-bt-img" @click="toAdoptionRabbit">
            <span class="card-text">兔子</span>
          </button>
        </li>
        <li>
          <button class="card-button1">
            <img src="../assets/icons/other.png" alt="" class="choose-card-bt-img" @click="toAdoptionOther">
            <span class="card-text">其他</span>
          </button>
        </li>
      </ul>

    </div>
    </div>
  </div>
</template>

<script>

import { ElCascader, ElSelect, ElOption } from 'element-plus'
import router from "@/router";

export default {
  name: "SearchCard",
  components: {ElCascader, ElSelect, ElOption},
  data(){
    return{
    }
  },
  mounted() {

  },

  methods:{
    back(){
      this.$emit("backToHome")
    },

    toAdoption(){
      router.push({
        name:"adoptionPage"
      })
    },
    toAdoptionDog(){
      this.$emit("getType", 'dog')
    },
    toAdoptionCat(){
      this.$emit("getType", 'cat')
    },
    toAdoptionRabbit(){
      this.$emit("getType", 'rabbit')
    },
    toAdoptionOther(){
      this.$emit("getType", 'other')
    },
  }
}

</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose-card-bt-img{
  height: 90px;
}

.choose-back{
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px); /* 这里的值可以根据你的需求调整模糊程度 */
  background: rgba(0, 0, 0, 0.5);
}

.choose-card{
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(77,71,81,.2);
  gap: 16px;
  width: 500px;
  height: 500px;
  padding: 34px;
  z-index: 10;
  align-items: center;
  box-sizing: border-box;
  //display: flex;
  flex-direction: column;
  margin: -20px auto 15px;
  max-width: 812px;
  position: relative;
}

.head{
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.button-back{
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
}

.button-back{
  background: transparent;
  border-radius: 5px;
  border: none;
  //border-color: white;
  color: inherit;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: inherit;

}

.button-back:hover{
  background: #6504b5;
  fill: white;
}

.back-icon{
  width: 20px;
  height: 20px;
}

.pic{
  //margin-bottom: 60px;
  //text-align: center;
  margin-right: 280px;
}

.question{
  font-size: 25px;
  color: #4d4751;
  display: block;
  font-family: Nexa Bold,arial,helvetica,sans-serif;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: none;
  text-transform: none;
}



.list1{
  display: grid;
  gap: 16px;
  //grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  grid-template-columns: repeat(2, 1fr);
  margin: unset;
  max-width: none;
  width: 95%;
}
.card-button1{
  align-items: center;
  background: #fff;
  border: 1px solid #d2d1d3;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0,0,0,.05);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 6px;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 154px;
  margin-top: 20px;
  margin-right: 10px;
}

.card-button1:hover{
  background-color: white;
  box-shadow: 0 0 0 3px #6504b5;
}

</style>