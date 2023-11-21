<script>

import HeaderTag from "@/components/HeaderTag.vue";
import AdoptionCard from "@/components/AdoptionCard.vue";
import {ElPagination, ElCascader, ElButton, ElIcon, ElSelect, ElOption} from "element-plus";
import {Search, Location} from '@element-plus/icons-vue'
import { regionData, codeToText} from 'element-china-area-data';

let select1= [
  {value: 'all', label: '全部种类'},
  {value: 'dog', label: '宠物狗'},
  {value: 'cat', label: '宠物猫'},
  {value: 'rabbit', label: '宠物兔'},
  {value: 'other', label: '其他'}
]
let alltype= [
  {pro:'all',label: '全部品种'},
  {pro:'dog',label: '全部品种'}, {pro:'dog',label: '金毛'}, {pro:'dog',label: '拉布拉多'}, {pro:'dog',label: '泰迪'}, {pro:'dog',label: '博美'}, {pro:'dog',label: '中华田园犬'}, {pro:'dog',label: '其他'},
  {pro:'cat',label: '全部品种'}, {pro:'cat',label: '加菲猫'}, {pro:'cat',label: '布偶猫'}, {pro:'cat',label: '暹罗猫'}, {pro:'cat',label: '金渐层'}, {pro:'cat',label: '银渐层'}, {pro:'cat',label: '中华田园猫'}, {pro:'cat',label: '其他'},
  {pro:'rabbit',label: '全部品种'}, {pro: 'rabbit',label: '垂耳兔'}, {pro: 'rabbit',label: '垂耳兔'}, {pro: 'rabbit',label: '猫猫兔'}, {pro: 'rabbit',label: '垂耳兔'}, {pro: 'rabbit',label: '其他'},
  {pro:'other',label: '全部品种'}
]
let select_gender= [
  {value: 'all', label: '全部性别'},
  {value: 'female', label: '女孩'},
  {value: 'male', label: '男孩'},
  {value: 'unknown', label: '未知'}
]
let select_age= [
  {value: 'all', label: '全部年龄'},
  {value: 'age1', label: '0~6个月'},
  {value: 'age2', label: '6个月~2岁'},
  {value: 'age3', label: '2岁~7岁'},
  {value: 'age4', label: '大于7岁'},
]
let select_source= [
  {value: 'all', label: '全部来源'},
  {value: 'home', label: '家养'},
  {value: 'shelter', label: '救助站'},
  {value: 'save', label: '个人救助'},
  {value: 'other', label: '其他'},
]

export default {
  name: "adoptionPage",
  components:{ElPagination, ElCascader, ElButton, ElIcon, ElSelect, ElOption, Search, Location, HeaderTag, AdoptionCard},
  data(){
    return {
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
      select1: select1,
      loading: false,
      filters: {
        value1: select1[0].label,
        value2: "全部品种"
      },
      select2:[{value: 'all', label: '全部品种'}],
      select_gender: select_gender,
      select_age: select_age,
      select_source: select_source,
      gender: "全部性别",
      age: "全部年龄",
      source: "全部来源"
    }
  },
  mounted() {

  },
  methods: {
    addressChange (arr) {
      console.log(this.selectedOptions)
      console.log(arr)
      console.log(codeToText[arr[0]], codeToText[arr[1]], codeToText[arr[2]])
    },
    getRole (prov) {
      let roles = []
      this.select2= [{value: 'all', label: '全部品种'}]
      this.filters.value2="全部品种"
      for (var val of alltype) {
        if (prov===val.pro) {
          console.log(val)
          roles.push({label: val.label,value: val.label})
        }
        this.select2 = roles
      }
    },
    getList (opt) {
      console.log(opt)
    },
    getGender (opt) {
      console.log(opt)
    },
    getAge (opt) {
      console.log(opt)
    },
    getSource (opt) {
      console.log(opt)
    }
  }
}
</script>

<template>
  <header-tag></header-tag>
<!--  <input v-model="searchQuery" @input="handleInput" placeholder="输入搜索关键字">-->
  <div class="search">
<!--    <span class="icon">-->
<!--      <img width="50" style="padding-top: 20px" src="../assets/icons/address.png" alt="">-->
<!--    </span>-->
    <div class="icon">
      <el-icon size="30" class="icon">
        <Location />
      </el-icon>
    </div>
    <div>
      <span class="cascader">
        <el-cascader class="address" placeholder="全国" size='large' style="width: 210px;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
      </span>
      <span>
        <el-select class="select" size="large" v-model="filters.value1" filterable placeholder="宠物类型" @change="getRole($event)">
          <el-option
              v-for="item in select1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select class="select" size="large" v-model="filters.value2" filterable
                   placeholder="宠物品种" :loading="loading" @change="getList($event)">
          <el-option
              v-for="item in select2"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
        </el-select>
      </span>
    </div>
    <div class="choose">
      <span>
        <el-select class="select" size="large" v-model="gender" filterable placeholder="宠物性别" @change="getGender($event)" style="margin-left: 345px" >
          <el-option
              v-for="item in select_gender"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select class="select" size="large" v-model="age" filterable placeholder="宠物年龄" @change="getAge($event)">
          <el-option
              v-for="item in select_age"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
        </el-select>
        <el-select class="select" size="large" v-model="source" filterable placeholder="宠物来源" @change="getSource($event)">
          <el-option
              v-for="item in select_source"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
        </el-select>
      </span>
    </div>
<!--    <span>-->
<!--      <input class="input" type="text" placeholder="请输入宠物种类或品种" :value="type" @input="onInput"/>-->
<!--    </span>-->
<!--    <span>-->
<!--      <el-button style="height: 40px">-->
<!--        <el-icon >-->
<!--          <Search />-->
<!--        </el-icon>-->
<!--        <span>搜索</span>-->
<!--      </el-button>-->
<!--    </span>-->
  </div>

  <div class="container">
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
    <adoption-card></adoption-card>
  </div>
  <div class="pagination">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
    </el-pagination>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  margin-left: 60px;
  margin-top: 50px;
}

.pagination{
  //display: flex;
  //justify-content: center;
  //align-items: center;
  margin-left: 348px;
  margin-top: 60px;
  margin-bottom: 50px;
}

.search{
  //position: fixed;
  text-align: left;
  margin-top: 100px;
}

.cascader{
  margin-left: 115px;
}

el-cascader::placeholder{
  color: black;
}

.select{
  margin-left: 20px;
  width: 160px;
}

.choose{
  margin-top: 20px;
}

.input{
  height: 36px;
  width: 400px;
  margin-left: 10px;
  border: 1px solid rgba(204, 204, 204, 0.75);
  border-radius: 3px;
  padding-left: 10px;
}

.quick-search{
  text-align: left;
  margin-top: 10px;
}

.tags{
  margin-left: 420px;
}

.icon{
  position: absolute;
  margin-top: 2px;
  margin-left: 40px;
}

</style>