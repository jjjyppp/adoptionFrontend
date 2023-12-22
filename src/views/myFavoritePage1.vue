<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import {store} from "@/store/store";</script>
<script>
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import {request} from "@/utils/request";
import {store} from "@/store/store";

export default {
  components:{PetDisplayCard},
  data() {
    return {
      pets: [
        // { id: 1, name: '猫猫1', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        // { id: 2, name: '猫猫2', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },

      ],
    };
  },
  async mounted() {
    try {
      // 获取所有宠物的 ID
      const petIds = store.favoritePets;
      console.log(petIds)

      // 使用 Promise.all 来并行获取所有宠物数据
      // 将获取的宠物数据保存到组件的数据中
      this.pets = await Promise.all(
          petIds.map((petId) => this.getPetById(petId))
      );
    } catch (error) {
      console.error('Error fetching pet data:', error);
      // 处理错误
    }
  },
  methods: {
    async getPetById(petId) {
      try {
        const response = await request({
          url: `http://localhost:8080/pet/${petId}`,
          method: 'GET'
        })
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    // getPetById(petId) {
    //   request({
    //     url: `http://localhost:8080/pet/${petId}`,
    //     method: 'GET'
    //   }).then((res) => {
    //     this.pet = res.data()
    //     console.log(res.data)
    //     return res.data
    //   }).catch((error) => {
    //   })
    //   //return null;
    // },
  },
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;align-items: center;justify-content: center;">
  <h1 style="padding-top: 40px;padding-left: 60px;font-family: 'PingFang HK';text-align: left; color: #4D4751">我的收藏</h1>
  <br>
  <div class="pet-container">
<!--    <PetDisplayCard-->
<!--        style="margin-right: 10px"-->
<!--        v-for="(petId, index) in store.favoritePets"-->
<!--        :key="index"-->
<!--        :pet="getPetById(petId)" />-->
    <PetDisplayCard
        style="margin-right: 10px"
        v-for="(pet, index) in pets"
        :key="index"
        :pet="pet"
    />
  </div>

  <div style="align-items: center;justify-content: center;padding: 40px;">
    <recommend-card></recommend-card>
  </div>
  </body>
  <footer-card></footer-card>
</template>

<style scoped>
.pet-container {
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-wrap: wrap;
}
</style>