<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import {ElRow, ElCol, ElMenu, ElMenuItem} from "element-plus";

</script>
<script>
import router from "@/router";

export default {
  methods:{
  }
}
</script>
<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <body style=" height: 1050px;align-items: center;justify-content: center;background: #f0f0f0">
  <div style="padding-top: 100px">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
            background-color="#f0f0f0"
            active-text-color="#6504b5"
            default-active="1"
            class="el-menu-vertical">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">我的送养</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">我的领养</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
  </body>
  <footer-card></footer-card>
</template>

<style scoped>
.el-menu-vertical{
  text-align: center;
}
</style>