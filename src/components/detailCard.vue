<script>
import {ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location} from '@element-plus/icons-vue'
export default {
  name: "detailCard",
  components:{Location, ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter},
}
</script>

<template>
  <el-card class="card-container" shadow="hover" style = "border-radius: 15px">

<!--      <el-container>-->
        <el-header class="header">
          <span class="name">大黄</span>
          <br>
          <span class="addr-and-date" >江苏省·南京市</span>
          <span class="addr-and-date" style="margin-left: 30px">2023-11-11</span>
          <br>
        </el-header>
        <el-main class="main">
          <span><label style="color: darkgrey">品种：</label>中华田园犬</span><br>
          <span><label style="color: darkgrey">年龄：</label>三个月</span><br>
          <span><label style="color: darkgrey">性别：</label>女</span><br>
          <span><label style="color: darkgrey">体型：</label>中型</span><br>
          <span><label style="color: darkgrey">价格：</label>免费领养</span><br>
          <span><label style="color: darkgrey">宠物来源：</label>家养</span><br>
          <span><label style="color: darkgrey">健康情况：</label>
            <el-tag type="success" effect="plain">已免疫</el-tag>
            <el-tag class="health-label" type="success" effect="plain">已驱虫</el-tag>
            <el-tag class="health-label" type="info" effect="plain">未绝育</el-tag>
          </span>
        </el-main>

        <div class="story">
          <p class="story-title">认识我：</p>
          <p>
            一位名叫上野英三郎（Hidesaburō Ueno）的教授每天都会从东京的上野车站乘火车去工作，而八公每天都会陪伴他到车站，并在傍晚时分准时返回车站等候主人的归来。
            然而，在1925年5月21日，教授因脑溢血突然去世，而八公却在车站等候主人归来，始终没有等到。尽管主人已故，但八公对主人的忠诚却没有改变。它每天都在同一时间来到上野车站等待，直至自己在1935年3月8日死去。
          </p>

        </div>

<!--      </el-container>-->

  </el-card>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
.card-container{
  width: 60%;
  //height: 800px;
  //margin: 80px;
  contain: layout;
  --el-card-padding: 0 10px;
}


.header{
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: left;
  height: 120px;
  border-bottom: 1px solid #a9a9a9;
}

.name {
  font-size: 50px;
//height: 18px;
  text-align: left;
}
.location-icon{
  color: rgba(83, 116, 181, 0.84);
}
.addr-and-date{
  color: rgba(83, 116, 181, 0.84);
  font-size: 20px;
}

.main{
  text-align: start;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid #a9a9a9;
  font-size: 20px;

}
.story {
  text-align: start;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  font-size: 20px;
}
.story-title {
  font-size: 30px;
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