<template>
    <div class="box-card">
      <div class="head">
        <button @click="back" class="button-back">
          <svg x="1700642760769" class="back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6466" width="75" height="75"><path d="M711.1 928.3c-13.2 0-26.3-5-36.4-15.2L297.8 532.9c-20.1-20.2-20.1-53.1 0-73.3L674.7 79.2c20.1-20.3 52.6-20.3 72.7 0 20.1 20.2 20.1 53.1 0 73.3L406.9 496.2l340.5 343.6c20.1 20.3 20.1 53.1 0 73.3-10 10.1-23.2 15.2-36.3 15.2z" p-id="6467"></path></svg>
        </button>
      </div>
      <div style="margin-top: 160px">
        <h3 class="question">
          你想要寻找哪里的宠物？
        </h3>
      </div>
      <div style="text-align: left">
        <span style="margin-left: 50px">
          <el-cascader popper-class="pc-sel-area-cascader" placeholder="请选择你所在的区域" size='large' style="width: 410px" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
        </span>
        <span style="margin-left: 20px">
          <el-select :teleported="false" :popper-append-to-body="false" popper-class="range" style="width: 210px" size="large" v-model="range" filterable
                     placeholder="请选择你能接受的范围" @change="getRange($event)">
            <el-option
                v-for="item in select_range"
                :key="item.value"
                :label="item.label"
                :value="item.value"></el-option>
          </el-select>
        </span>
      </div>
      <div class="footer">
        <button class="continue" @click="toAdoption">继续</button>
      </div>
    </div>
</template>

<script>
import { regionData, codeToText } from 'element-china-area-data';
import { ElCascader, ElSelect, ElOption } from 'element-plus'
import router from "@/router";

let select_range= [
  {value: 'all', label: '全国'},
  {value: 'district', label: '仅限同城'},
  {value: 'city', label: '仅限同市'},
  {value: 'province', label: '仅限同省'},
]


export default {
  name: "SearchCard",
  components: {ElCascader, ElSelect, ElOption},
  data(){
    return{
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
      select_range: select_range,
      range: ""
    }
  },
  mounted() {

  },

  methods:{
    addressChange (arr) {
      console.log(this.selectedOptions)
      console.log(arr)
      console.log(codeToText[arr[0]], codeToText[arr[1]], codeToText[arr[2]])
    },
    getRange (opt) {
      console.log(opt)
    },
    back(){
      this.$emit("backToHome", true)
    },
    toAdoption(){
      router.push({
        name:"adoptionPage"
      })
    }
  }
}

</script>

<style lang="less">
.box-card{
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(77,71,81,.2);
  gap: 16px;
  width: 900px;
  height: 460px;
  padding: 34px;
  z-index: auto;
  align-items: center;
  box-sizing: border-box;
  //display: flex;
  flex-direction: column;
  margin: -20px auto 15px;
  max-width: 812px;
  position: relative;
}

.head{
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.button-back{
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
}

button{
  background: transparent;
  border-radius: 5px;
  border: none;
  //border-color: white;
  color: inherit;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: inherit;

}

button:hover{
  background: #6504b5;
  fill: white;
}

.back-icon{
  width: 20px;
  height: 20px;
}

.pic{
  //margin-bottom: 60px;
  //text-align: center;
  margin-right: 280px;
}

.question{
  font-size: 30px;
  color: #4d4751;
  display: block;
  font-family: Nexa Bold,arial,helvetica,sans-serif;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: none;
  text-transform: none;
}

.pc-sel-area-cascader {
  .el-cascader-node.in-active-path,
  .el-cascader-node.is-active,
  .el-cascader-node.is-selectable.in-checked-path {
    background-color: #F9F3FE;
    border-color: #6504b5;
  }
}

.range.selected,.range:hover{
  background-color: #F9F3FE;
}

.footer{
  width: 100%;
  margin-top: 30px;
  text-align: center;
}

.continue{
  position: relative;
  -webkit-appearance: none;
  background-color: #6504b5;
  border: 2px solid #6504b5;
  border-radius: 23px;
  box-shadow: 0 1px 3px rgba(77,71,81,.2);
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-family: Nexa Heavy,arial,helvetica,sans-serif;
  font-size: 18px;
  font-weight: 400;
  width: 180px;
  height: 45px;
  line-height: 1.4;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  text-decoration: inherit;
  text-overflow: ellipsis;
  text-transform: uppercase;
  padding: 11px 30px 35px;
  transition: background-color .1s,border-color .1s,box-shadow .1s,color .1s;
  white-space: nowrap;
}

.continue:hover{
  background-color: #3c036a;
}

</style>