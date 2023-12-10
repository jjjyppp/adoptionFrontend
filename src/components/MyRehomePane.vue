<template>
  <body>
<!--  <main class="container">-->
    <div class="tab-container">
      <div class="tabs">
        <div id="tab1" class="tab active">待送养</div>
        <div id="tab2" class="tab">已送养</div>
        <div id="tab3" class="tab">已取消</div>
      </div>
      <div class="tab-content">
        <div class="tab-rehome" data-tab="tab1">
          <un-rehome-card class="rehomepane-card"></un-rehome-card>
          <un-rehome-card class="rehomepane-card"></un-rehome-card>
          <un-rehome-card class="rehomepane-card"></un-rehome-card>
          <un-rehome-card class="rehomepane-card"></un-rehome-card>
        </div>
        <div class="tab-rehome" data-tab="tab2" style="display: none">
          <rehome-card class="rehomepane-card"></rehome-card>
          <rehome-card class="rehomepane-card"></rehome-card>
          <rehome-card class="rehomepane-card"></rehome-card>
        </div>
        <div class="tab-rehome" data-tab="tab3" style="display: none">
          <cancel-rehome-card class="rehomepane-card"></cancel-rehome-card>
          <cancel-rehome-card class="rehomepane-card"></cancel-rehome-card>
        </div>
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

export default {
  components: {CancelRehomeCard, UnRehomeCard, RehomeCard},
  mounted() {
    const tabContainer = document.querySelector(".tabs");
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content > *");

    const changeTab = (tabId) => {
      const newTab = document.querySelector(`div[data-tab=${tabId}]`);
      tabContents.forEach((content) => {
        content.style.display = "none";
      });
      newTab.style.display = "flex";
    };

    // tab 点击事件
    tabContainer.addEventListener("click", ({ target: currentTab }) => {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      currentTab.classList.add("active");
      changeTab(currentTab.id);
    });
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

.tab-container {
  padding: 24px;
  width: 100%;
}

.tabs {
  width: 380px;
  padding: 4px;
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
  background: #6504B5;
  box-shadow: inset -1px -1px 1px rgba(255, 255, 255, 0.7),
  inset 1px 1px 2px rgba(174, 174, 192, 0.2);
  color: white;
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
}

.rehomepane-card{
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