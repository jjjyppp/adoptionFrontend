<template>
  <div class="article">
    <img src="" alt="" class="img" ref="img">
    <h2>{{ article.title }}</h2>
    <p>{{ article.subTitle }}</p>
    <button @click="toArticle">了解更多</button>
  </div>
</template>

<script>
import {Burger} from "@element-plus/icons-vue";
import router from "@/router";
export default {
  name: "ArticleCard",
  components: {Burger},
  props: ['article', 'index'],
  mounted() {
    this.$refs.img.src = this.article.src;
  },
  methods:{
    toArticle(){
      router.push({
        path:'/article', query: {index: this.index}
      })
    }
  }
}
</script>

<style scoped>
.article{
  background-color: white;
  width: 60%;
  height: 319px;
  border:none;
}

img{
  width: 130px;
  height: 130px;
}

h2{
  font-family: Nexa Bold,arial,helvetica,sans-serif;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 0 15px;
  color: #6504B5;
  text-overflow: ellipsis;
  text-transform: uppercase;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  white-space: normal;
}

p{
  line-height: 25px;
  padding: 0 15px;
}

button{
  -webkit-appearance: none;
  color: #6504B5;
  width: 160px;
  height: 40px;
  background: transparent;
  border: 2px solid #6504b5;
  border-radius: 23px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: Nexa Heavy,arial,helvetica,sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  max-width: 100%;
  overflow: hidden;
  margin-top: 20px;
  padding: 8px 30px;
  text-align: center;
  text-decoration: inherit;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transition: background-color .1s,border-color .1s,box-shadow .1s,color .1s;
  white-space: nowrap;
}

button:hover{
  background-color: #6504B5;
  color: white;
  margin-bottom: 20px;
}

.article:hover{
  border: 1.5px solid darkgrey;
  border-radius: 10px;
  //padding: 10px;
  //border-color: black;
}

</style>