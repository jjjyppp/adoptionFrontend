<script>
import {ElIcon, ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location} from '@element-plus/icons-vue'
export default {
  name: "detailCard",
  components:{Location, ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter, ElIcon},
}
</script>

<template>
  <el-card class="card-container" shadow="hover" style = "border-radius: 15px">

<!--      <el-container>-->
        <el-header class="header">
          <span class="name">大黄</span>
          <br>
          <el-icon size="30" class="location-icon" style="position: relative; top: 5px;">
            <location/>
          </el-icon>
          <span class="addr-and-date" >江苏省·南京市</span>
          <span class="addr-and-date" style="margin-left: 30px">2023-11-11</span>
          <br>
        </el-header>
        <el-main class="main">
          <span><label style="color: darkgrey">品种：</label>中华田园犬</span><br>
          <span><label style="color: darkgrey">年龄：</label>三个月</span><br>
          <span><label style="color: darkgrey">性别：</label>母</span><br>
          <span><label style="color: darkgrey">体型：</label>中型</span><br>
          <span><label style="color: darkgrey">领养方式：</label>免费领养</span><br>
          <span><label style="color: darkgrey">宠物来源：</label>家养</span><br>
          <span><label style="color: darkgrey">健康情况：</label>
            <el-tag type="success" effect="plain">已免疫</el-tag>
            <el-tag  type="success" effect="plain">已驱虫</el-tag>
            <el-tag  type="info" effect="plain">未绝育</el-tag>
          </span><br>
          <span><label style="color: darkgrey">领养要求：</label>
            <el-tag  effect="plain">仅限同城</el-tag>
            <el-tag  effect="plain">定期线下回访</el-tag>
            <el-tag  effect="plain">签订领养合同</el-tag>
          </span>
        </el-main>

        <div class="story">
          <p class="story-title">认识我：</p>
          <p>
            一只可爱的金毛犬，失落地漂泊在城市街头。我发现了它，带它回家。金毛犬得到温馨的庇护，重新找到了快乐，成为家庭的忠实伴侣。
          </p>

        </div>
    <div class="attention">
      <p class="story-title">注意事项：</p>
      <p>
        领养前请确保提供足够的食物、水源和关爱。及时带宠物看兽医，保持健康。建立日常规律，培养良好行为。耐心沟通，建立亲密关系。
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
  width: 62%;
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
  border-bottom: 1px solid #a9a9a9;
}

.attention {
  text-align: start;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  font-size: 20px;
}
.story-title {
  font-size: 23px;
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