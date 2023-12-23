<script>
import {ElIcon, ElCard, ElContainer, ElHeader, ElTag, ElAside, ElMain, ElFooter} from "element-plus";
import {Location} from '@element-plus/icons-vue'
import {request} from "@/utils/request";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import {ElImage, ElDialog} from "element-plus";
export default {
  name: "detailCard",
  components: {
    PetDisplayCard,
    Location,
    ElCard,
    ElTag,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElIcon,
    ElImage,
    ElDialog
  },
  props: ['petId'],
  data() {

    return {
      url: 'https://box.nju.edu.cn/f/331fa5bc8e4241d48744/?dl=1',
      srcList: [
        'https://box.nju.edu.cn/f/331fa5bc8e4241d48744/?dl=1',
      ],
      url2: 'https://box.nju.edu.cn/f/12b4959d4b874c27895b/?dl=1',
      srcList2: [
        'https://box.nju.edu.cn/f/12b4959d4b874c27895b/?dl=1',
      ],
      dialogVisible: false,
      dialogVisible2: false,
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
        date: '',
      }
    }
  },
  mounted() {
  },
  watch: {
    petId: function (newVal, oldVal) {
      console.log("petId=" + this.petId)
      request({
        url: `http://localhost:8080/pet/${this.petId}`,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        this.pet = res.data
      }).catch((error) => {
      })
    }
  },
}
</script>

<template>
  <div class="card-container111"  style = "border-radius: 15px;background: transparent;width: 500px">

    <!--      <el-container>-->
    <el-header class="header11">
      <span class="name11">{{pet.name}}</span>
      <br>
      <el-icon size="30" class="location-icon" style="position: relative; top: 5px;">
        <location/>
      </el-icon>
      <span class="addr-and-date" >{{pet.address}}</span>
      <span class="addr-and-date" style="margin-left: 30px">{{pet.date}}</span>
      <br>
    </el-header>
    <el-main class="main111">
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
            <el-tag  effect="plain" v-for="(health, index) in pet.health" :key="index" :pet="pet" style="margin-right: 10px;background-color: white; color: #6504B5; border-color: #6504B5;" >{{health}}</el-tag>
        <!--            <el-tag type="success" effect="plain">已免疫</el-tag>-->
        <!--            <el-tag  type="success" effect="plain">已驱虫</el-tag>-->
        <!--            <el-tag  type="info" effect="plain">未绝育</el-tag>-->
          </span><br>
      <span><label style="color: darkgrey">领养要求：</label>
            <el-tag v-for="(requirment, index) in pet.requirements" effect="plain" style="margin-right: 10px; background-color: white; color: #6504B5; border-color: #6504B5;">{{requirment}}</el-tag>
          </span>
    </el-main>
  </div>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
.card-container111{
  /*width: 32%;*/
  height: 500px;
  margin: 40px;
  contain: layout;
  --el-card-padding: 0 10px;
}

.word-break{
  display: inline-block;
  width: 680px;
  word-break: break-all;
  white-space: normal;
}

.header11{
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: left;
  height: 120px;
  border-bottom: 1px solid #a9a9a9;
}

.name11 {
  font-size: 45px;
  color: #333333;
//height: 18px;
  text-align: left;
}
.location-icon{
  //color: rgba(83, 116, 181, 0.84);
  color: darkgrey;

}
.addr-and-date{
  //color: rgba(83, 116, 181, 0.84);
  color: darkgrey;
  font-size: 20px;
}

.main111{
  text-align: start;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 40px;
  /*border-bottom: 1px solid #a9a9a9;*/
  font-size: 20px;
  color: #333333;
}


img{
  width: 100%;
  height: 400px;
  padding: 15px;
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