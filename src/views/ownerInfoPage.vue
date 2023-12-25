<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";

import {store} from "@/store/store";
import {ElDivider, ElIcon} from "element-plus";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import AdvertisementCardsLong from "@/components/AdvertisementCardsLong.vue";
import SupportUsCard from "@/components/SupportUsCard.vue";
</script>

<script>
import PetDisplayCardInFav from "@/components/PetDisplayCardInFav.vue";
import {request} from "@/utils/request";
import {store} from "@/store/store";
import {ElPagination} from "element-plus";

export default {
  components:{PetDisplayCardInFav, ElPagination},
  data() {
    return {
      pets:[],
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    request({
      url: `http://localhost:8080/stationPets`,
      method: 'GET'
    }).then((res) => {
      console.log(res.data)
      this.pets=res.data
    }).catch((error) => {
    })
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
      this.scrollToTop();
    },
    scrollToStation() {
      // 获取栖霞区动物收容中心的位置
      const stationElement = document.getElementById('animal-center-title');

      // 滚动到对应位置
      if (stationElement) {
        const yOffset = stationElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    }
  }
}
</script>
<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

  </head>

  <header-tag ></header-tag>
  <div style="background: #f0f0f0; min-height: 1150px;align-items: center;justify-content: center;">
    <div style="height: 260px; background-color: white; display: flex">
      <div style="width: 42%;">
        <div class="shelter-box py-5 px-4 ">
          <div class="img p-3" style="margin-top: 50px; margin-left: 80px ;border-radius: 50%; height: 120px; width: 120px"> <img src="src/assets/imgs/avatar4.jpg" alt="" style="border-radius: 50%; height: 100px; width: 100px;margin-left: -10px;margin-top: -10px"></div>
        </div>
        <div style="text-align: start; margin-left: 250px; margin-top: -50px">
          <h1 class="mt-3" style="font-size: 36px; color: black">Molly</h1>
          <el-divider style="margin-top: 10px; margin-bottom: 5px; width: 400px"></el-divider>
          <p align="left" style="margin-top: 16px; margin-left: -6px; font-size: 20px" ><span style="font-size: 24px">
            <svg style="margin-right: 4px" t="1703465400820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4217" width="30" height="30"><path d="M895.616384 347.812188q0 10.22977-0.511489 19.436563t-1.534466 19.436563q-9.206793 84.907093-37.338661 163.164835t-71.096903 150.377622-99.228771 138.613387-121.734266 127.872128q-9.206793 11.252747-23.528472 11.252747-15.344655 0-24.551449-11.252747-65.470529-61.378621-122.245754-128.895105t-100.251748-141.170829-71.608392-152.935065-36.315684-165.210789q0-8.183816-0.511489-15.344655t-0.511489-15.344655q0-71.608392 28.131868-135.032967t76.211788-110.481518 113.038961-74.677323 138.613387-27.62038 138.101898 27.62038 112.527473 74.677323 76.211788 110.481518 28.131868 135.032967zM540.643357 507.396603q33.758242 0 63.424575-12.787213t51.66034-34.26973 34.781219-50.637363 12.787213-61.89011-12.787213-61.89011-34.781219-50.637363-51.66034-34.26973-63.424575-12.787213-63.424575 12.787213-52.171828 34.26973-35.292707 50.637363-12.787213 61.89011 12.787213 61.89011 35.292707 50.637363 52.171828 34.26973 63.424575 12.787213z" p-id="4218" fill="#6504b5"></path></svg>
          </span>福建省厦门市集美区</p>
        </div>
      </div>
      <div style="width: 30%; margin-left: 20%; margin-top: 20px">
        <div>
          <p align="left" style="font-size: 20px"><span class="pe-4">
            <svg t="1703466413167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7255" width="30" height="30"><path d="M576.853333 474.453333l351.573334-331.093333c-17.066667-17.066667-40.96-27.306667-64.853334-27.306667h-699.733333c-27.306667 0-47.786667 10.24-64.853333 27.306667l351.573333 331.093333c34.133333 34.133333 88.746667 34.133333 126.293333 0z" p-id="7256" fill="#6504b5"></path><path d="M576.853333 580.266667c-34.133333 34.133333-92.16 34.133333-126.293333 0L68.266667 225.28v590.506667c0 51.2 40.96 92.16 92.16 92.16h699.733333c51.2 0 92.16-40.96 92.16-92.16V225.28l-375.466667 354.986667z" p-id="7257" fill="#6504b5"></path></svg>          </span>wangchunchia@outlook.com</p>
          <hr>
          <p class="mt-3" align="left" style="font-size: 20px"><span class="pe-4">
            <svg  t="1703465785746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5313" width="30" height="30"><path d="M871.673333 770.813333l-165.933333-165.94a53.4 53.4 0 0 0-75.426667 0l-37.713333 37.713334c-21.333333 21.333333-90.413333 0.1-150.846667-60.34S360.046667 452.76 381.413333 431.4l37.713334-37.713333a53.4 53.4 0 0 0 0-75.426667l-165.94-165.933333a53.393333 53.393333 0 0 0-75.42 0l-37.713334 37.713333c-27.866667 27.866667-44.84 64.52-50.46 108.946667-5.213333 41.206667-0.406667 87.42 14.28 137.333333C133.333333 536.586667 199.773333 642 290.9 733.1S487.42 890.666667 587.653333 920.126667c36.926667 10.86 71.813333 16.32 104.146667 16.32a264.333333 264.333333 0 0 0 33.213333-2.04c44.426667-5.62 81.08-22.593333 108.946667-50.46l37.713333-37.713334a53.393333 53.393333 0 0 0 0-75.42z" fill="#6504b5" p-id="5314"></path></svg>          </span>**********（已实名认证）</p>
          <hr>
          <button @click="scrollToStation" style="-webkit-appearance: none;
                                color: #6504B5;
                                width: 600px;
                                height: 40px;
                                background: transparent;
                                border: 2px solid #6504b5;
                                border-radius: 23px;
                                box-sizing: border-box;
                                cursor: pointer;
                                display: inline-block;
                                font-family: Nexa Heavy,arial,helvetica,sans-serif;
                                font-size: 20px;
                                font-weight: 600;
                                line-height: 1.4;
                                max-width: 100%;
                                overflow: hidden;
                                margin-top: 20px;

                                text-align: center;
                                text-decoration: inherit;
                                text-overflow: ellipsis;
                                text-transform: uppercase;
                                transition: background-color .1s,border-color .1s,box-shadow .1s,color .1s;
                                white-space: nowrap;"
                  onmouseover="this.style.backgroundColor='#6504B5'; this.style.color='white'"
                  onmouseout="this.style.backgroundColor='white'; this.style.color='#6504B5'"
          >查看我发布的宠物</button>
          <!--          <hr>-->
        </div>

      </div>

    </div>
    <div style="height: 250px;background: white">
      <hr>
      <div style="height: 1500px;padding-left: 150px;padding-right: 150px">
        <p style="font-size: 25px;font-weight: bolder">个人介绍</p>
        <p style="font-size: 18px;text-align: left">我是来自厦门集美区的Molly。
          </p>
        <p style="font-size: 18px;text-align: left">
          由于工作原因，我无法全身心地照顾我的宠物，因此我希望能找到一个负责任、爱心且有足够时间照顾宠物的领养家庭。
          小福非常喜欢与人亲近，也习惯了定期遛弯和简单的训练，希望未来的领养家庭能够给予它足够的关爱和陪伴。
          如果你对它感兴趣，并且有充足的时间和爱心，欢迎联系我领养它，谢谢～</p>
      </div>
    </div>


    <section id="find-animal" class="py-5" >
      <div class="container">
        <div class="row py-1 py-md-3">
          <div class="rescue-pets">
            <h2 class="art-question" id="animal-center-title" >Molly发布的所有宠物</h2>
            <div style="display: flex; flex-wrap: wrap; text-align: center; justify-content: center; margin-left: 40px">
              <pet-display-card style="margin-top: 20px; margin-right: 30px" v-for="(pet, index) in pets.slice(0,2)" :key="index" :pet="pet" />
            </div>
            <div class="col-12 text-end py-2" v-if="pets.length!==0" style="margin-top: 20px;">
              <el-pagination
                  :current-page="currentPage"
                  :page-size="pageSize"
                  background
                  layout="prev, pager, next"
                  :total=pets.length
                  @current-change="handleCurrentChange"
                  style="margin-left: 82%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer-card></footer-card>
  <div is="vue:script" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
       crossorigin="anonymous"></div>
  <div is="vue:script" src="./assets/js/plugin.js"></div>

  <div is="vue:script" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
       integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
       crossorigin="anonymous" referrerpolicy="no-referrer"></div>
  <div is="vue:script" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js"
       integrity="sha512-CX7sDOp7UTAq+i1FYIlf9Uo27x4os+kGeoT7rgwvY+4dmjqV0IuE/Bl5hVsjnQPQiTOhAX1O2r2j5bjsFBvv/A=="
       crossorigin="anonymous" referrerpolicy="no-referrer"></div>

  <div is="vue:script" src="./assets/js/main.js"></div>

</template>

<style lang="less">
@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');

.shelter-box {
  position: relative;
  width: 0%;
  height: 0%;
}
.shelter-box .img {
  position: absolute;
  border: 4px solid white;
  background-color: #6504b5;
  border-radius: 50px;
  box-shadow: 0 0 28px grey;
  top: 10px;
}

.location-icon{
  color: black;
}

.art-question{
  line-height: 1.2;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

</style>