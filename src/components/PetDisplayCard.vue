<template>
  <div style="width: 210px; height: 300px" >
    <div class="animal-box text-center" style="height: 278px">
      <router-link :to="{ name: 'petDetailPage', params: { id: pet.id } }">
        <a>
          <div class="pet-img">
            <img src="" ref="img" alt="" style="width: 100%">
          </div>
          <p class="type">{{pet.name}}</p>
          <p class="info">{{pet.age}} {{pet.address}}</p>
        </a>
        <el-button href="#" @click.prevent="addToFavorites">
          <span :class="{ 'bg-light': !isClicked, 'bg-dark': isClicked }">
            <div style="margin-top: 4px">
<!--              <img src="../assets/icons/heart.png" alt="" width="26">-->
              <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="26" height="26" :style="{ fill: isClicked ? '#ffffff' : '#4c0586' }">
    <path d="M1024 358.156C1024 195.698 892.3 64 729.844 64 643.482 64 565.814 101.218 512 160.49 458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576L96 576l320 320c32 32 64 64 96 64s64-32 96-64l320-320-0.49 0C986.782 522.186 1024 444.518 1024 358.156zM841.468 481.232 517.49 805.49c-1.678 1.678-3.532 3.532-5.49 5.48-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156 896 405.596 876.632 449.306 841.468 481.232z"></path>
  </svg>
            </div>
          </span>
        </el-button>
      </router-link>
    </div>
  </div>
</template>


<script>
import {ElButton, ElNotification } from "element-plus"

export default {
  name: "PetDisplayCard",
  components:{ElButton,ElNotification},
  props: ['pet'],
  mounted() {
    // console.log("123"+props.pet)
    // this.$refs.img.src = this.pet.urls;
    // console.log(this.pet.urls)
  },
  watch: {
    pet: function(newVal, oldVal) {
      // 当 myProp 整个对象被替换时触发
      console.log('myProp 发生变化:', newVal, oldVal);
      this.$refs.img.src = this.pet.urls;
      console.log(this.pet.urls[0])
    }
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    addToFavorites() {
      this.isClicked = !this.isClicked;

      if(this.isClicked){
        ElNotification({
          title: '您已成功收藏',
          message: '可以进入"我的收藏"中查看它哦',
        });
      } else {
        ElNotification({
          title: '您已取消收藏',
          message: '再看看其他宠物吧？',
        });
      }
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
  padding-top: 1rem!important;
  margin-bottom: 0!important;
  color: #6504B5;
}

.info{
  margin-bottom: 0!important;
  padding-top: 0!important;
  padding-bottom: 0!important;
  color: #6504B5;
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

</style>