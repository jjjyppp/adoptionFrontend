<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";

import {store} from "@/store/store";
import {ElButton} from "element-plus";
</script>

<script>
import PetDisplayCardInFav from "@/components/PetDisplayCardInFav.vue";
import {request} from "@/utils/request";
import {store} from "@/store/store";
import router from "@/router";

export default {
  components:{PetDisplayCardInFav},
  data() {
    return {

    };
  },
  mounted() {},
  methods: {

  }
}
</script>
<template>
  <header-tag ></header-tag>
  <p>123</p>
  <div style="display: flex">

  </div>
  <footer-card></footer-card>
</template>

<style scoped>

</style>