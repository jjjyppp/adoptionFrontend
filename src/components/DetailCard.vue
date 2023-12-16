<script>
import {ElIcon, ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location} from '@element-plus/icons-vue'
import {request} from "@/utils/request";
import PetDisplayCard from "@/components/PetDisplayCard.vue";

export default {
  name: "detailCard",
  components:{PetDisplayCard, Location, ElCard, ElTag, ElContainer, ElHeader, ElAside, ElMain, ElFooter, ElIcon},
  props:['petId'],
  data(){
    return{
      pet: {
        id: -1,
        address: '',
        age: '',
        attention: '',
        breed: '',
        gender: '',
        health: [],
        name: '',
        price: '',
        reason: '',
        requirements: [],
        type: '',
        size: '',
        source: '',
        story: '',
        urls: [],
        date: ''
      }
    }
  },
  mounted() {},
  watch: {
    petId: function(newVal, oldVal) {
      console.log("petId="+this.petId)
      request({
        url: `http://localhost:8080/pet/${this.petId}`,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        this.pet=res.data
      }).catch((error) => {
      })
    }
  },
}
</script>

<template>
  <el-card class="card-container" shadow="hover" style = "border-radius: 15px">

<!--      <el-container>-->
        <el-header class="header">
          <span class="name">{{pet.name}}</span>
          <br>
          <el-icon size="30" class="location-icon" style="position: relative; top: 5px;">
            <location/>
          </el-icon>
          <span class="addr-and-date" >{{pet.address}}</span>
          <span class="addr-and-date" style="margin-left: 30px">{{pet.date}}</span>
          <br>
        </el-header>
        <el-main class="main">
          <span><label style="color: darkgrey">品种：</label>{{pet.breed}}</span><br>
          <span><label style="color: darkgrey">年龄：</label>{{pet.age}}</span><br>
          <span><label style="color: darkgrey">性别：</label>{{pet.gender}}</span><br>
          <span><label style="color: darkgrey">体型：</label>{{pet.size}}</span><br>
          <span><label style="color: darkgrey">领养方式：</label>{{pet.price}}</span><br>
          <span v-if="pet.price!=='免费'" class="word-break">
            <label style="color: darkgrey">有偿原因：</label>
            {{pet.reason}}
          </span><br v-if="pet.price!=='免费'">
          <span><label style="color: darkgrey">宠物来源：</label>{{pet.source}}</span><br>
          <span><label style="color: darkgrey">健康情况：</label>
            <el-tag type="success" effect="plain" v-for="(health, index) in pet.health" :key="index" :pet="pet" style="margin-right: 10px" >{{health}}</el-tag>
<!--            <el-tag type="success" effect="plain">已免疫</el-tag>-->
<!--            <el-tag  type="success" effect="plain">已驱虫</el-tag>-->
<!--            <el-tag  type="info" effect="plain">未绝育</el-tag>-->
          </span><br>
          <span><label style="color: darkgrey">领养要求：</label>
            <el-tag v-for="(requirment, index) in pet.requirements" effect="plain" style="margin-right: 10px">{{requirment}}</el-tag>
          </span>
        </el-main>

        <div class="story">
          <p class="story-title">认识我：</p>
          <p class="word-break">
            {{pet.story}}
          </p>

        </div>
    <div class="attention">
      <p class="story-title">注意事项：</p>
      <p class="word-break">
        {{pet.attention}}
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

.word-break{
  display: inline-block;
  width: 680px;
  word-break: break-all;
  white-space: normal;
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