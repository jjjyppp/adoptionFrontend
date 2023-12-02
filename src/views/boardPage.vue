<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import ChatPane from "@/components/ChatPane.vue";
</script>

<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <div style="margin-top: 80px; margin-left: 130px">
    <chat-pane></chat-pane>
  </div>
</template>

<style scoped>

</style>