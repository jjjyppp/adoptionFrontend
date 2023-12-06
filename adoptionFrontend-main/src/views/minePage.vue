<template>
  <div>
    <header-tag></header-tag>
    <div class="content-box">
      <div class="content">
        <div class="title">
          <p>My Petfinder</p>
        </div>
        <!-- tab页 -->
        <div class="detail">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane :label="tabDetail[0].label"
                         :name="tabDetail[0].name">
              <AboutMe />
            </el-tab-pane>
            <el-tab-pane :label="tabDetail[1].label"
                         :name="tabDetail[1].name">
              <AdopterProfile />
            </el-tab-pane>
                        <el-tab-pane :label="tabDetail[2].label"
                         :name="tabDetail[2].name">
              <AccountSettings />
            </el-tab-pane>
                        <el-tab-pane :label="tabDetail[3].label"
                         :name="tabDetail[3].name">
              <EmailPreferences />
            </el-tab-pane>
                       <el-tab-pane :label="tabDetail[4].label"
                         :name="tabDetail[4].name">
              <SavedSearches />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- 底部卡片 -->
    <FooterCard></FooterCard>
  </div>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import ChatPane from "@/components/ChatPane.vue";
import AboutMe from '../components/AboutMe.vue'
import AccountSettings from '../components/AccountSettings.vue'
import SavedSearches from '../components/SavedSearches.vue'
import EmailPreferences from '../components/EmailPreferences.vue'
import AdopterProfile from '../components/AdopterProfile.vue'
import { ElTabs, ElTabPane } from 'element-plus';
export default {
  components: { HeaderTag, ChatPane, FooterCard, ElTabs, ElTabPane, AboutMe, AdopterProfile, SavedSearches, AccountSettings, EmailPreferences },
  data() {
    return {
      activeName: 'first',
      filterText: this.$route.query.tabs,
      tabDetail:[
        {label:'About Me',name:'first'},
        {label:'Adopter Profile',name:'second'},
        {label:'Account Settings',name:'third'},
        {label:'Email Preferences',name:'fourth'},
        {label:'Saved Searches & Alerts',name:'five'},
        ],
    };
  },
  created() {
    this.judge();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    judge() {
      console.log(3);
      if (this.$route.query.tabs === 'toMine') {
        this.activeName = 'first'
      } else if (this.$route.query.tabs === 'mySaved') {
        this.activeName = 'five'
      }
    }
  },
  watch: {
    filterText: {
      deep: true,
      handler(val) {
        if (val) {
          this.judge();
        }
      },
    },
  },

}

</script>

<style>
.content-box {
  width: 100%;
  height: 100%;
  background-color: #efeef1;
  overflow-y: scroll;
}
.content {
  display: block;
  height: 100%;
  background-color: #fff;
  width: 60%;
  margin: 50px auto;
  border-radius: 5px;
}
.title {
  font-size: 24px;
  /* float: left; */
}
.title p {
  width: 20%;
  margin-left: 0px;
  padding-top: 30px;
  padding-bottom: 0px;
}
.el-tabs__nav-scroll {
  padding-left: 20px;
}
.el-tabs__item {
  color: #000;
}
.el-tabs__item.is-active {
  color: #6503b5;
}
.el-tabs__nav-wrap::after {
  height: 0;
}
.el-tabs__active-bar {
  background-color: #6503b5;
}
</style>