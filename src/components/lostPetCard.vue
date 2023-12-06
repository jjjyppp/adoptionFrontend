<script>
import {ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location, Present} from '@element-plus/icons-vue'
export default {
  name: "lostPetCard",
  components:{Location, Present, ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter},
}

</script>

<template>
  <el-card class="card-container" shadow="hover">
    <el-container>
      <el-aside class="aside">
        <img class="pet-img" src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="">
      </el-aside>
      <el-container>
        <br>
        <el-header class="header">
          <el-tag class="title-label">寻找宠物</el-tag>
          <span class="name">啸天犬</span>
          <span class="addr-and-date" style="margin-left: 20px">2023-11-11</span>
          <br>
        </el-header>
        <el-main class="main">
          <span><label style="color: darkgrey">丢失时间：</label>2023.11.11 14:00左右</span><br>
          <span><label style="color: darkgrey">主人描述：</label>我是二郎神，谁捡到我的爱犬归还重重有赏。</span><br>
          <div style="display: flex; align-items: center;">
            <div class="icon">
              <el-icon size="50">
                <Present />
              </el-icon>
            </div>
            <div class = "present">赏100块</div>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <div class="location">
      南天门22号
    </div>
  </el-card>
</template>




<style scoped>
* {
  font-family: sans-serif;
}
.card-container{
  width: 480px;
  height: 220px;
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
  height: 60px;
}

.addr-and-date{
  color: rgba(83, 116, 181, 0.84);
  font-size: 14px;
//margin-left: 2px;
  margin-top: 20px;
}

.main{
  text-align: start;
  height: 110px;
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
  color: cornflowerblue;
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


.present {
  color: cornflowerblue;
}

.location {
  width: 400px;
  text-align: left;
  color: gray;
  background: whitesmoke;
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