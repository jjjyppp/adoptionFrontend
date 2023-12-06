<template>
  <div class="contentall">
    <header-tag></header-tag>
    <div class="content">
      <div class="top">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home </el-breadcrumb-item>
          <el-breadcrumb-item><a href="/"> Adopt or Get Involved</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/"> Adopting Pets</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">How to Adopt a Pet</a></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">How to Adopt a Dog or Cat During COVID-19</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="bottom">
        <el-card class="box-card">
          <template #header>
            <span class="header">{{header}}</span>
          </template>
          <img :src="src"
               alt="">
          <p style="text-align: left;line-height:30px;">{{content}}</p>
        </el-card>
      </div>
    </div>
    <!-- 底部卡片 -->
    <FooterCard></FooterCard>
  </div>
</template>

<script>
import { ElBreadcrumb, ElBreadcrumbItem, ElCard } from 'element-plus';
import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";

export default {
  components: { ElBreadcrumb, ElBreadcrumbItem, HeaderTag, FooterCard, ElCard },
  data() {
    return {
      src: 'src/views/assets/img/狗狗.png',
      header: 'How to Adopt a Dog or CatDuring COVID-19',
      content: 'ls it okay to adopt a dog or cat during the COVID-19 pandemic? How do youreach out to ask around coronavirus? And are there ways to help pets inneed right now without adopting or fostering? Sponsored ad.The pet adoption process has certainly changed a lot over the last few'
    };
  },
}

</script>

<style scoped>
.box-card {
  height: 70%;
}
.contentall {
  padding: 20px;
}
.content {
  margin: 0 auto;
  width: 60%;
  text-align: left;
}
.header {
  font-size: 24px;
  font-weight: 600;
}
.top {
  margin-top: 30px;
  margin-bottom: 30px;
}
.bottom {
  margin-bottom: 20px;
}
</style>