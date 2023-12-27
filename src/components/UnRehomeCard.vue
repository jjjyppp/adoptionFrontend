<template>
  <div style="width: 210px; height: 300px; margin-right: 40px; margin-top: 20px" >
    <div class="animal-box text-center" style="height: 290px;cursor: pointer">
      <div @click="toPetDetailPage">
        <a>
          <div class="pet-img">
            <img :src=pet.urls[0] ref="img" alt="" style="width: 100%">
          </div>
          <p class="type">{{pet.name}}</p>
        </a>
      </div>
    </div>
    <div style="display: flex; margin-top: 60px">
      <button class="cancel-rehome" @click="dialogVisible = true" >
        <a style="font-size: 15px;color: white">取消送养</a>
      </button>
      <button class="success-rehome" @click="successDialogVisible = true" >
        <a style="font-size: 15px;color: white">成功送养</a>
      </button>
    </div>
  </div>

  <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      typeof="warning"
      @close="handleClose"
  >
    <span style="font-size: 15px">确认取消送养吗？</span>
    <br>
    <span slot="footer" class="dialog-footer">
        <el-button style="margin-top: 40px;" @click="dialogVisible = false">取 消</el-button>
        <el-button style="background-color: #3a0466;margin-top: 40px;color: white" @click="handleCancel">确 定</el-button>
      </span>
  </el-dialog>

  <el-dialog
      title="提示"
      v-model="successDialogVisible"
      width="30%"
      typeof="warning"
      @close="handleClose"
  >
    <span style="font-size: 15px">您确认已成功送养吗？</span>
    <br>
    <span slot="footer" class="dialog-footer">
        <el-button style="margin-top: 40px;" @click="successDialogVisible = false">取 消</el-button>
        <el-button style="background-color: #3a0466;margin-top: 40px;color: white" @click="handleSuccess">确 定</el-button>
      </span>
  </el-dialog>
</template>


<script>
import {ElButton, ElNotification, ElDialog } from "element-plus"
import router from "@/router";
import {store} from "@/store/store";
import {Delete} from "@element-plus/icons-vue";
import {request} from "@/utils/request";

export default {
  name: "PetDisplayCard",
  components:{Delete, ElButton,ElNotification, ElDialog},
  props: ['pet'],
  mounted() {
    const isPetInStore = store.favoritePets.find(pet => (pet.id===this.pet.id));
    if(isPetInStore) {
      this.isClicked=true
    }
  },
  watch: {
    pet: function(newVal, oldVal) {
      // this.$refs.img.src = this.pet.urls[0];
    }
  },
  data() {
    return {
      dialogVisible:false,
      isClicked: false,
      successDialogVisible: false,
    };
  },
  methods: {
    toPetDetailPage(){
      router.push({
        name: 'petDetailPage', query:{id: this.pet.id}
      })
    },
    handleCancel() {
      store.unrehomes = store.unrehomes.filter(pet => pet.id !== this.pet.id);
      store.cancelCards.push(this.pet)
      ElNotification({
        title: '您已取消送养',
        offset: 50,
        type: 'info'
      });
      this.dialogVisible = false
      request({
        url: `http://localhost:8080/pet/${this.pet.id}`,
        method: 'DELETE'
      }).then((res) => {
        console.log(res.data)
      }).catch((error) => {
      })
    },
    handleSuccess() {
      store.unrehomes = store.unrehomes.filter(pet => pet.id !== this.pet.id);
      store.rehomes.push(this.pet)
      ElNotification({
        title: '您已成功送养',
        offset: 50,
        type: 'success'
      });
      this.successDialogVisible = false
      request({
        url: `http://localhost:8080/pet/${this.pet.id}`,
        method: 'DELETE'
      }).then((res) => {
        console.log(123)
        console.log(res.data)
      }).catch((error) => {
      })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

.animal-box {
  color: #6504b5;
  font-weight: 600;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  transition: all 1s;
  position: relative;
  margin-bottom: 1rem!important;
}

.animal-box p{
  background-color: white;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  bottom: 25px;
  transition: all 1s;
}

.animal-box img{
  transition: all 1s;
  object-fit: cover;
  max-height: 100%;
}

.animal-box span{
  width: 45px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  border-radius: 50px;
}

.animal-box:hover {
  background-color: #6504b5;
}

.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}

.animal-box:hover img {
  opacity: 0.5;
}

.animal-box:hover {
  background-color: #6504b5;
}
.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}
.animal-box:hover img {
  opacity: 0.5;
}

.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}

.animal-box:hover img {
  opacity: 0.5;
}

.text-center {
  text-align: center!important;
}

.animal-box .pet-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.type{
  font-size: calc(1.3rem + .6vw)!important;
  padding-top: 0.4rem!important;
  margin-bottom: 0!important;
  color: #6504B5;
}

.info{
  margin-bottom: 0!important;
  padding-top: 0.2rem!important;
  padding-bottom: 0!important;
  color: #6504B5;
//display: inline-block;
//width: 160px;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bg-light {
  --bs-bg-opacity: 1;
  --bs-light-rgb: 248,249,250;
  background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  --bs-light-rgb: 248,249,250;
  background-color: #6504b5!important;
}

.success-rehome {
  width: 50%;
  height: 50px;
  background: rgba(0, 128, 0, 0.45);
  margin-top: -110px;
  position: relative;
  border-radius: 0 0 10px 0;
  border: transparent
}

.success-rehome:hover{
  background: rgba(0, 128, 0, 0.85);
}

.cancel-rehome {
  width: 50%;
  height: 50px;
  background: rgba(185, 109, 109, 0.45);
  margin-top: -110px;
  position: relative;
  border-radius: 0 0 0 10px;
  border: transparent
}

.cancel-rehome:hover{
  background-color: rgba(185, 109, 109, 0.85);
}


</style>