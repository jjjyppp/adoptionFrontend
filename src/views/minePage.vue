<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import ChatPane from "@/components/ChatPane.vue";
export default {
  components:{HeaderTag, ChatPane}
}

</script>

<style scoped>

</style>