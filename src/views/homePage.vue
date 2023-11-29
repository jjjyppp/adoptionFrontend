<script setup>

import FooterCard from "@/components/FooterCard.vue";
</script>
<template>
  <header-tag></header-tag>
  <div style="background-color: #EFEEF1">
    <div class="background">
      <div class="quick-search">
        <div class="text">
          <span>快速搜索</span>
        </div>
        <div style="margin-left: 120px; width: 600px">
          <el-row class="autocomplete">
            <el-col :span="12">
              <el-autocomplete
                  class="inline-input"
                  v-model="searchContent"
                  :fetch-suggestions="querySearch"
                  @select="handleSelect"
              ></el-autocomplete>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: -50px; margin-left: 748px">
          <button class="quick-search-bt">
            <svg x="1700709169066" class="quick-search-img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="75" height="75"><path d="M447.325002 129.919978c-178.868807 0-323.872319 145.003512-323.872319 323.874365s145.003512 323.874365 323.872319 323.874365c178.870854 0 323.874365-145.003512 323.874365-323.874365S626.195855 129.919978 447.325002 129.919978zM447.325002 713.712071c-143.31915 0-259.915681-116.598578-259.915681-259.917728s116.596532-259.917728 259.915681-259.917728 259.917728 116.598578 259.917728 259.917728S590.643128 713.712071 447.325002 713.712071z" p-id="4101"></path><path d="M891.573945 840.061734 748.236376 696.699606c-13.43601 16.625656-28.371164 31.91385-44.338834 46.099944l142.458549 142.481062c6.246261 6.246261 14.427594 9.368368 22.60995 9.368368s16.363689-3.123131 22.60995-9.368368C904.065444 872.789113 904.065444 852.553233 891.573945 840.061734z" p-id="4102"></path></svg>
          </button>
        </div>
      </div>
      <div class="slogan">
        <h1 class="title">你可以在这里找到你最好的朋友</h1>
        <p class="subTitle">这里有来自150000位用户的待领养宠物</p>
      </div>
    </div>
    <div class="choose">
      <div class="wrap">
        <ul class="list">
          <li>
            <button class="card-button" @click="searchDog">
              <img src="../assets/icons/dog.png" alt="" class="card-img">
              <span class="card-text">宠物狗</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchCat">
              <img src="../assets/icons/cat.png" alt="" class="card-img">
              <span class="card-text">宠物猫</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchOther">
              <img src="../assets/icons/other.png" alt="" class="card-img">
              <span class="card-text">其他宠物</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchOther">
              <img src="../assets/icons/other.png" alt="" class="card-img">
              <span class="card-text">其他宠物</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="search">
      <div class="type">
        <img id="dogPic" src="../assets/icons/dog.png" alt="" class="search-img" v-show="showDog">
        <img id="catPic" src="../assets/icons/cat.png" alt="" class="search-img" v-show="showCat">
        <img id="otherPic" src="../assets/icons/other.png" alt="" class="search-img" v-show="showOther">
      </div>
      <div style="z-index:0">
        <search-card @backToHome="backToHome" id="search" v-show="show"></search-card>
      </div>
    </div>
    <div class="recommend">
      <div class="rec-sec">
        <el-link :underline="false" class="rec-text" href="#/adoption">它正等着你带它回家
          <el-icon>
            <ArrowRight class="arrow-right"/>
          </el-icon>
        </el-link>
        <div class="rec-cards">
          <pet-display-card style="margin-left: 15px"  v-for="(pet, index) in recommend_pets" :key="index" :pet="pet" />
          <more-animal-card style="margin-left: 15px"></more-animal-card>
        </div>
      </div>
    </div>
    <div class="articles">
      <div style="padding-top: 30px">
        <h2 class="art-question">你准备领养一只宠物吗？</h2>
      </div>
      <div class="cards">
      <article-card v-for="(article, index) in articles" :key="index" :article="article"></article-card>
      </div>
    </div>
    <div class="recent">
      <div class="rec-sec">
        <p class="recent-text">最近浏览过的宠物</p>
        <div class="rec-cards">
          <pet-display-card style="margin-left: 15px"  v-for="(pet, index) in recent_pets" :key="index" :pet="pet" />
        </div>
      </div>
    </div>
  </div>
  <footer-card></footer-card>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import SearchCard from "@/components/SearchCard.vue";
import {Burger, Search, ArrowRight} from "@element-plus/icons-vue";
import {ElAutocomplete, ElCol, ElDivider, ElIcon, ElLink, ElRow} from "element-plus";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import MoreAnimalCard from "@/components/MoreAnimalCard.vue";
import more from "@element-plus/icons/lib/More";
import ArticleCard from "@/components/ArticleCard.vue";
import FooterCard from "@/components/FooterCard.vue";
export default {
  name: "homePage",
  computed: {
    more() {
      return more
    }
  },
  components:{
    FooterCard,
    ArticleCard,
    MoreAnimalCard,
    ArrowRight,
    PetDisplayCard, Search, Burger, HeaderTag, SearchCard, ElDivider, ElRow, ElCol, ElLink, ElIcon, ElAutocomplete},
  data(){
    return{
      dogPath:"src/assets/icons/dog.png",
      catPath:"src/assets/icons/cat.png",
      otherPath:"src/assets/icons/other.png",
      show: false,
      showDog: false,
      showCat: false,
      showOther: false,
      searchContent: "",
      searchChoice: [],
      recommend_pets: [
        { id: 1, name: '猫猫1', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: null, location: '', imageUrl: 'src/views/assets/img/indir.jpg' },
        { id: 3, name: '猫猫3', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
      recent_pets: [
        { id: 1, name: '猫猫1', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: null, location: '', imageUrl: 'src/views/assets/img/indir.jpg' },
        { id: 4, name: '猫猫4', age: null, location: '', imageUrl: 'src/views/assets/img/indir.jpg' },
        { id: 5, name: '猫猫5', age: null, location: '', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
      articles: [
        { id: 1, title: '为什么选择领养而非买卖？', subTitle: "我们要使领养过程更加方便和顺利，让领养代替买卖。", src: 'src/assets/icons/adopt.png' },
        { id: 2, title: '宠物科普 | 为何人人都需要一只宠物', subTitle: "养一只宠物吧~", src: 'src/assets/icons/help.png' },
        { id: 3, title: '如果决定接纳一条生命，就请陪它一生！', subTitle: "请不要随意地领养或弃养", src: 'src/assets/icons/shelter.png' },
      ]
    }
  },
  mounted() {
    this.searchChoice = this.loadAll();
  },
  methods: {
    searchDog(){
      this.show=true
      this.showDog=true
      this.showCat=false
      this.showOther=false
    },
    searchCat(){
      this.show=true
      this.showCat=true
      this.showDog=false
      this.showOther=false
    },
    searchOther(){
      this.show=true
      this.showOther=true
      this.showDog=false
      this.showCat=false
    },
    backToHome(val){
      console.log(val)
      this.show=false;
      this.showDog=false;
      this.showCat=false;
      this.showOther=false
    },
    querySearch(queryString, cb) {
      var searchChoice = this.searchChoice;
      var results = queryString ? searchChoice.filter(this.createFilter(queryString)) : searchChoice;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (searchChoice) => {
        return (searchChoice.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "领养的具体流程"},
        { "value": "送养的具体流程"},
        { "value": "网站如何保障领养双方顺利交易"},
        { "value": "领养到有问题的宠物怎么办"},
        { "value": "宠物没有被领养人善待怎么办"},
        { "value": "如何挑选适合我的宠物"},
        { "value": "领养人需要具备什么条件"}
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>


<style>
.quick-search{
  width: 800px;
  height: 60px;
  background-color: white;
  text-align:left;
  border-radius: 5px;
  display: inline-block;
  margin-top: -40px;
  //text-align: center;
}

.text{
  margin-top: 17px;
  position: absolute;
  font-size: 18px;
  color: #6504B5;
  //padding-top: 100px;
  margin-left: 20px;
}

.slogan{
  margin-bottom: 30px;
}

.quick-search-bt{
  //background-color: #fff;
  //margin-left: 748px;
  //margin-top: -200px;
  border: none;
  border-radius: 5px;
  height: 44px;
  padding: 2px;
  width: 44px;
}

.quick-search-bt:hover{
  background-color: #6504B5;
  fill: white;
}

.quick-search-img{
  //fill: black;
  width: 100%;
  height: 100%;
}

.inline-input .el-input {
  width: 620px;
  height: 60px;
  font-size: 18px;
}

.title{
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 0 40px;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
  //margin-top: 100px;
  margin: 0;

}

.subTitle{
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;

}

.background{
  display: grid;
  place-items: center;
  width: 100%;
  height: 410px;
  background: #6504b5 url("https://box.nju.edu.cn/thumbnail/134b204a714445f48f20/1024/background4.jpg") no-repeat top;
  background-size: 100% 400px;
  text-align: center;
  //display: flex;
  justify-content: center;
  align-items: center;
}

.choose{
  align-items: center;
  box-sizing: border-box;
//display: flex;
//flex-direction: column; max-width: 812px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  z-index: auto;
  margin: -75px auto 15px auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //margin-right: 50px;
}

.list{
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  margin: unset;
  max-width: none;
  width: 100%;
}

.card{
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  text-align: center;
}

.card-button{
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
  gap: 16px;
  height: 100%;
  justify-content: center;
  padding: 16px;
  text-decoration: none;
  width: 100%;
}

.card-button:hover{
  background-color: white;
  box-shadow: 0 0 0 3px #6504b5;
}

.card-img {
  fill: #6504b5;
  height: 80px;
  width: 90px;
}

.search-img {
  fill: #6504b5;
  height: 160px;
  width: 180px;
}

.type{
  //width: 180px;
  display: grid;
  place-items: center;
  margin-bottom: -150px;
  //margin-left: 358px;
  z-index:1;
  position: relative
}

.search{
  margin-top: -160px;
  //margin-left: 272px;
  //width: 900px;
  display: grid;
  place-items: center;
  //height: 500px;
  //background-color: inherit;
}

.card-text{
  color: #4d4751;
  text-align: center;
}

.recommend{
  text-align: center;
  margin-top: 380px;
  //background-color: #d2d1d3;
  //margin-bottom: 24px;
  //margin: 0 auto;
  //max-width: 1220px;
}

.rec-text{
  line-height: 1.2;
  color: #6504b5;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

.rec-text:hover{
  color: #3c036a;
  fill: #3c036a;
}

.arrow-right::before{
  font-weight: bold;
}

.rec-cards{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.art-question{
  line-height: 1.2;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

.articles{
  background-color: white;
  margin-top: 60px;
  height: 500px;
}

.cards{
  display: flex;
  justify-content: center;
}

.recent{
  text-align: center;
  margin-top: 60px;
}

.recent-text{
  line-height: 1.2;
  color: #6504b5;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

</style>