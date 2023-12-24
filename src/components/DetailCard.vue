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
  methods: {
    openFullScreenPreview() {
      this.dialogVisible = true;
    },
    openFullScreenPreview2() {
      this.dialogVisible2 = true;
    },
}
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
            <span v-if="pet.health.length===0">暂无</span>
            <el-tag type="success" effect="plain" v-for="(health, index) in pet.health" v-if="pet.health.length!==0" :key="index" :pet="pet" style="margin-right: 10px" >{{health}}</el-tag>
<!--            <el-tag type="success" effect="plain">已免疫</el-tag>-->
<!--            <el-tag  type="success" effect="plain">已驱虫</el-tag>-->
<!--            <el-tag  type="info" effect="plain">未绝育</el-tag>-->
          </span><br>
          <span><label style="color: darkgrey">领养要求：</label>
            <span v-if="pet.requirements.length===0">暂无</span>
            <el-tag v-for="(requirment, index) in pet.requirements" v-if="pet.requirements.length!==0" effect="plain" style="margin-right: 10px">{{requirment}}</el-tag>
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
    <div class="certification">
      <p class="story-title">宠物健康证明：</p>
      <div class="box">
        <el-image
            style="width: 100%;height: 400px;padding: 15px;cursor:pointer;"
            :src="url"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            fit="cover"
            @click="openFullScreenPreview"
        />
        <el-dialog
            v-model="dialogVisible"
            :fullscreen="true"
            :close-on-click-modal="false"
            append-to-body
        >
          <el-image
              style="width: 100%; height: 100%"
              :src="url"
              :initial-index="4"
              fit="cover"
          />
        </el-dialog>
        <el-image
            style="width: 100%;height: 400px;padding: 15px;cursor:pointer;"
            :src="url2"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            fit="cover"
            @click="openFullScreenPreview2"
        />
      </div>
      <el-dialog
          v-model="dialogVisible2"
          :fullscreen="true"
          :close-on-click-modal="false"
          append-to-body
      >
        <el-image
            style="width: 100%; height: 100%"
            :src="url2"
            :initial-index="4"
            fit="cover"
        />
      </el-dialog>
    </div>

<!--      </el-container>-->

  </el-card>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
.card-container{
  width: 70%;
  //height: 800px;
  //margin: 80px;
  contain: layout;
  --el-card-padding: 0 10px;
}

.word-break{
  display: inline-block;
  width: 780px;
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
  margin-left: 20px;
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
  border-bottom: 1px solid #a9a9a9;
}
.certification {
  text-align: start;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
  font-size: 20px;
}
.story-title {
  font-size: 23px;
  color: darkgrey
}
.box{
  display: flex;
  height: 400px;
  border:1px solid #ffffff;
  justify-content: space-evenly;
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