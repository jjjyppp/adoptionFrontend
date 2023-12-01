<script>
import {ElIcon, ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location} from '@element-plus/icons-vue'
import PetDisplayCard from "@/components/PetDisplayCard.vue";
export default {
  components:{PetDisplayCard, Location, ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter, ElIcon},
  data() {
    return {
      pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 5, name: '猫猫5', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
    };
  },
}
</script>

<template>
  <div class="recommend-container" style="border-radius: 15px; justify-content: center;">
    <p class="interest-text">您可能感兴趣：</p>
    <div class="card-container">
      <PetDisplayCard style="margin-left: 7px;margin-right: 7px; margin-top: 15px;" v-for="(pet) in pets" :key="pet.id" :pet="pet" />
    </div>
  </div>

<!--  <div>-->
<!--    <p class="interest-text">您可能也感兴趣：</p>-->
<!--    <div class="card-container" style="border-radius: 15px; display: flex; justify-content: center; align-items: center;">-->
<!--      <PetDisplayCard style="margin-left: 15px; margin-top: 15px;" v-for="(pet) in pets" :key="pet.id" :pet="pet" />-->
<!--    </div>-->
<!--  </div>-->

</template>

<style scoped>
* {
  font-family: sans-serif;
}


.recommend-container{
  /*width: 900px;*/
  width: 100%;
  height: 450px;
  background: #4c0586;
  text-align: center;
  /*margin: 20px;*/
  padding: 20px;
}

.interest-text {
  color: white;
  text-align: center;
  padding-top: 20px;
  font-size: 35px;
}
.card-container{
  display: flex;
  text-align: center;
  margin: 15px;
  justify-content: center;
}


</style>