<template>
  <body>
  <!--  <main class="container">-->
  <div class="tab-container">
    <div class="tab-content">
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
      <adoption-card class="adoption-card"></adoption-card>
    </div>
  </div>
  <!--  </main>-->
  </body>
</template>

<script>

// 处理选项卡内容切换
import UnRehomeCard from "@/components/UnRehomeCard.vue";
import RehomeCard from "@/components/RehomeCard.vue";
import CancelRehomeCard from "@/components/CancelRehomeCard.vue";
import AdoptionCard from "@/components/AdoptionCard.vue";

export default {
  components: {AdoptionCard, CancelRehomeCard, UnRehomeCard, RehomeCard},
  mounted() {
  }
}

</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background: #f0f0f3;
  color: #808b9f;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 375px;
  overflow: auto;
}

.tab-container {
  padding: 24px;
  width: 100%;
}

.tabs {
  width: 380px;
  padding: 4px;
  /* border-radius: 12px 12px 0 0; */
  border-radius: 5px;
  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  display: flex;
}
.tab {
  padding: 12px 36px;
  cursor: pointer;
  transition: 0.3s;
}

.tab.active {
  border-radius: 5px;
  background: #eeeeee;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
  inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  color: #6504B5;
}

.tab-rehome{
  display: flex;
  flex-wrap: wrap;
}

.tab-content {
  width: 90%;
  margin-top: 36px;
  padding: 36px;
  border-radius: 16px;
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  display: flex;
  flex-wrap: wrap;
}

.adoption-card{
  margin-left: 40px;
  margin-top: 20px;
}

.tab-content > div > img {
  height: 100px;
}

.tab-content > div {
  animation: fadeIn 1.3s;
}

.tab-content h2 {
  margin-bottom: 24px;
  font-weight: 400;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 838px) {
  .tab-container {
    width: 100%;
  }
}

@media (min-width: 375px) and (max-width: 418px) {
  .tab {
    padding: 12px 24px;
  }
}

</style>