<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import RecommendCard from "@/components/RecommendCard.vue";
import { store } from "@/store/store";

</script>
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
  mounted() {
    // let ids=store.favoritePets
    // for(let i=0;i<ids.length; i++){
    //   this.pets.push(this.getPetById(ids[i]))
    // }
  },
  methods: {
    getPetById(petId) {
      request({
        url: `http://localhost:8080/pet/${petId}`,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        return res.data
      }).catch((error) => {
      })

      return null;
    },
  },
}
</script>
<template>
  <header-tag ></header-tag>
  <body style="background: #f0f0f0;align-items: center;justify-content: center;">
  <h1 style="padding-top: 40px;padding-left: 60px;font-family: 'PingFang HK';text-align: left; color: #4D4751">我的收藏</h1>
  <br>
  <div class="pet-container">
    <PetDisplayCard
        style="margin-right: 10px"
        v-for="(id, index) in store.favoritePets"
        :key="index"
        :pet="getPetById(id)" />
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