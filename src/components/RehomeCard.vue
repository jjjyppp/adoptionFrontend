<template>
  <div style="width: 210px; height: 300px; margin-right: 40px; margin-top: 20px" >
    <div class="animal-box text-center" style="height: 280px;cursor: pointer">
      <div @click="toPetDetailPage">
        <a>
          <div class="pet-img">
            <img :src=pet.urls[0] ref="img" alt="" style="width: 100%">
          </div>
          <p class="type">{{pet.name}}</p>
        </a>
      </div>
    </div>
  </div>

</template>


<script>
import {ElButton, ElNotification, ElDialog } from "element-plus"
import router from "@/router";
import {store} from "@/store/store";
import {Delete} from "@element-plus/icons-vue";

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
    handleCancelFav() {
      store.favoritePets = store.favoritePets.filter(pet => pet.id !== this.pet.id);
      console.log(store.favoritePets);
      ElNotification({
        title: '您已取消收藏',
        message: '再看看其他宠物吧!',
        offset: 50,
        type: 'error'
      });
      this.isClicked = false
      this.dialogVisible = false
      // if(window.location.href==='http://localhost:5173/#/favorites'){
      //   location.reload();
      // }
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
  padding-top: 1.4rem!important;
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