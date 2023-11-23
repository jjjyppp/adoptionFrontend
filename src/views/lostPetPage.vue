<script setup>
import {ElTag} from "element-plus";
import HeaderTag from "@/components/HeaderTag.vue";
import lostPetCard from "@/components/lostPetCard.vue";

</script>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jump() {
      this.$router.push('/findMyPet')
    }
  }
}
</script>
<template>
  <header-tag></header-tag>
  <el-tag class="tag" size="large">寻找宠物</el-tag>
  <el-tag class="tag" size="large" color="lightgreen">寻找主人</el-tag>
  <el-button class="button" @click='jump'>丢寻登记</el-button>
  <div class="container">
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
    <lost-pet-card></lost-pet-card>
  </div>

</template>

<style scoped>
.tag {
  margin: 30px;
  font-size: 20px;
}
.button {
  margin: 30px;
  font-size: 20px;
  background: gold;
}
.container{
  display: flex;
  flex-wrap: wrap;
  margin-left: 60px;
  margin-top: 20px;
}

</style>