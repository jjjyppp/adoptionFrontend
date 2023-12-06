<script>
import {ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
export default {
  name: "AdoptionCard",
  components:{ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter},
}

</script>

<template>
  <el-card class="card-container" shadow="hover">
    <el-container>
      <el-aside class="aside">
        <img class="pet-img" src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
      </el-aside>
      <el-container>
        <el-header class="header">
          <span class="name">大黄</span>
          <el-tag class="title-label">家养</el-tag>
          <br>
<!--          <span>-->
<!--            <img class="icon" style="margin-left: -5px" src="../assets/icons/address.png" alt="">-->
<!--          </span>-->
          <span class="addr-and-date">江苏·南京</span>
<!--          <span>-->
<!--            <img class="icon" style="margin-left: 20px" src="../assets/icons/date.png" alt="">-->
<!--          </span>-->
          <span class="addr-and-date" style="margin-left: 20px">2023-11-11</span>
          <br>
<!--          <el-tag size="small">中型</el-tag>-->
        </el-header>
        <el-main class="main">
          <span><label style="color: darkgrey">品种：</label>中华田园犬</span><br>
          <span><label style="color: darkgrey">年龄：</label>三个月</span><br>
          <span><label style="color: darkgrey">性别：</label>女孩</span><br>
          <span><label style="color: darkgrey">价格：</label>免费领养</span>
        </el-main>
        <el-footer class="footer">
          <el-tag type="success" effect="plain" size="small">已免疫</el-tag>
          <el-tag class="health-label" type="success" effect="plain" size="small">已驱虫</el-tag>
          <el-tag class="health-label" type="info" effect="plain" size="small">未绝育</el-tag>
        </el-footer>
      </el-container>
    </el-container>
  </el-card>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
.card-container{
  width: 480px;
  //height: 200px;
  margin: 5px;
  contain: layout;
  --el-card-padding: 0 10px;
}

.aside{
  width: 160px;
  height: 180px;
  text-align: left;
}

.header{
  text-align: left;
  height: 50px;
}

.addr-and-date{
  color: rgba(83, 116, 181, 0.84);
  font-size: 14px;
  //margin-left: 2px;
  margin-top: 20px;
}

.main{
  text-align: start;
  height: 100px;
  padding-top: 10px;
  padding-bottom: 0;
}

.footer{
  text-align: left;
  height: 30px;
}

.pet-img {
  width: 160px;
  height: 160px;
  margin-top: 10px;
  border-radius: 5%;
}

.icon{
  width: 20px;
  height: 20px;
}

.title-label{
  margin-left: 5px;
  margin-bottom: 5px;
}

.health-label{
  margin-left: 5px;
}

.name {
  font-size: 24px;
  //height: 18px;
  //margin: 18px 0;
  text-align: left;
}


@container (max-width: 850px) {
  .card {
    grid-template-columns: 1fr;
  }

  img {
    grid-row: 1;
  }
}

</style>