<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <!--Main start-->

  <main style="background-color:#f0f0f0; margin-top: 20px">
    <div class="choose-animal-card" v-show="showChooseCard">
      <choose-animal-card @getType="getType" @backToHome="backToHomeHandler"></choose-animal-card>
    </div>
    <section id="find-animal" class="py-5">
      <div class="container">
        <div class="row py-1 py-md-3">
          <div class="filter">
            <table class="screen">
              <tr class="screen-row">
                <td class="left-box">地址</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags" style="margin-top: -6px; margin-left: -40px">
                      <el-cascader placeholder="请选择你所在地区" style="width: 500px; margin-left: 48px" :options='options' v-model='selectedOptions' @change='addressChange'>
                      </el-cascader>

                      <el-select v-if="selectedOptions.length!==0" style="width: 200px; margin-left: 20px;" v-model="range" filterable placeholder="请选择你能接受的范围" @change="rangeChange" >
                        <el-option
                            v-for="item in select_range"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="screen-row">
                <td class="left-box">种类</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags">
                      <span v-for="(item, index) in petTypes" :class="{ 'tag-item-chose': isTypeChose[index], 'tag-item': !isTypeChose[index] } " @click="chooseTypeTag(index)">{{item.label}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="screen-row">
                <td class="left-box">品种</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags">
                      <span v-for="(item, index) in filteredBreeds.slice(0, 14)" :class="{ 'tag-item-chose': isBreedChose[index], 'tag-item': !isBreedChose[index] } " @click="chooseBreedTag(index)">{{item.label}}</span>
                    </div>
                    <div class="show-all" @click="showBreeds" v-if="!showAllBreeds">
                      全部
                      <i class="pull-icon"></i>
                    </div>
                    <div class="show-all" @click="hideBreeds" v-if="showAllBreeds">
                      收起
                      <i class="pull-icon" style="transform: rotate(180deg);"></i>
                    </div>
                  </div>
                  <div v-if="showAllBreeds" style="display: flex; flex-wrap: wrap; padding-right: 50px" >
                    <span v-for="(item, index) in filteredBreeds.slice(14, filteredBreeds.length)" :class="{ 'tag-item-chose': isBreedChose[index+14], 'tag-item': !isBreedChose[index+14] } " @click="chooseBreedTag(index+14)">{{item.label}}</span>
                  </div>
                </td>
              </tr>
              <tr class="screen-row">
                <td class="left-box">性别</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags">
                      <span v-for="(item, index) in petGenders" :class="{ 'tag-item-chose': isGenderChose[index], 'tag-item': !isGenderChose[index] } " @click="chooseGenderTag(index)">{{item.label}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="screen-row">
                <td class="left-box">体型</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags">
                      <span v-for="(item, index) in petSizes" :class="{ 'tag-item-chose': isSizeChose[index], 'tag-item': !isSizeChose[index] } " @click="chooseSizeTag(index)">{{item.label}}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="screen-row">
                <td class="left-box">健康情况</td>
                <td class="right-box">
                  <div class="tag-box">
                    <div class="tags">
                      <span v-for="(item, index) in healthConditions" :class="{ 'tag-item-chose': isHealthChose[index], 'tag-item': !isHealthChose[index] } " @click="chooseHealthTag(index)">{{item.label}}</span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="choseTags" v-if="choseBreed.concat(choseGender, choseSize, choseHealth).length!==0">
            <p style="color: rgba(0,0,0,0.67); font-weight: 580">当前筛选：</p>
            <el-tag
                v-for="tag in choseBreed.concat(choseGender, choseSize, choseHealth)"
                :key="tag"
                closable
                @close="handleClose(tag)"
                size="default"
                type="info"
                style="margin-right: 5px; background-color: white; color: #6504B5; border-color: #6504B5;">
              {{tag}}
            </el-tag>
            <p class="clear" @click="clear">重置条件</p>
          </div>

          <div style="margin-left: 48px; margin-top: 20px; text-align: left">
            <p style="color: rgba(0,0,0,0.67); font-weight: 580;">共为您找到{{this.pets.length}}个符合条件的宠物</p>
          </div>
          <div style="display: flex" >
            <div class="my-tabs" style="margin-left: 48px; width: 36%">
              <el-tabs class="sourceTags" v-model="activeName" type="card" @click="handleClick">
                <el-tab-pane label="全部" name="全部" :style="{ 'font-size': '30px' }"></el-tab-pane>
                <el-tab-pane label="家养" name="家养"></el-tab-pane>
                <el-tab-pane label="个人救助" name="个人救助"></el-tab-pane>
                <el-tab-pane label="救助站" name="救助站"></el-tab-pane>
              </el-tabs>
            </div>

            <div style="margin-top: 10px; margin-left: 240px">
              <span
                  v-for="(tag, index) in sortTags"
                  :key="index"
                  @click="selectSortTag(index)"
                  :class="{ 'sort-tag': true, 'selected': selectedIndex === index }">
              {{tag}}
                <el-divider v-if="index!==sortTags.length-1" direction="vertical"></el-divider>
              </span>
              <!--              <span class="sort-tag">综合排序</span>-->
              <!--              <el-divider direction="vertical"></el-divider>-->
              <!--              <span class="sort-tag">高价优先</span>-->
              <!--              <el-divider direction="vertical"></el-divider>-->
              <!--              <span class="sort-tag">低价优先</span>-->
              <!--              <el-divider direction="vertical"></el-divider>-->
              <!--              <span class="sort-tag">幼年优先</span>-->
              <!--              <el-divider direction="vertical"></el-divider>-->
              <!--              <span class="sort-tag">老年优先</span>-->
              <!--              <el-divider direction="vertical"></el-divider>-->
              <!--              <span class="sort-tag">最新发布</span>-->
            </div>


          </div>

          <div style="margin-top: 40px" v-if="pets.length===0">
            <el-empty description="暂时没有满足您要求的宠物哦！看看其他的宠物吧！"></el-empty>
          </div>

          <div style="width: 92%; background-color: inherit; margin-left: 52px">
            <div class="justify-content-between">
              <pet-display-card style="margin-top: 20px" v-for="(pet, index) in pets.slice((currentPage - 1) * pageSize, currentPage * pageSize)" :key="index" :pet="pet" />
            </div>
          </div>

          <div class="col-12 text-end py-2" v-if="pets.length!==0" style="margin-top: 20px;">
            <el-pagination
                :current-page="currentPage"
                :page-size="pageSize"
                background
                layout="prev, pager, next"
                :total=pets.length
                @current-change="handleCurrentChange"
                style="margin-left: 84%"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--Main end-->

  <!--Footer start-->
  <footer-card></footer-card>
  <!--Footer end-->


  <!--Js link-->

  <div is="vue:script" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
       crossorigin="anonymous"></div>
  <div is="vue:script" src="./assets/js/plugin.js"></div>

  <div is="vue:script" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
       integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA=="
       crossorigin="anonymous" referrerpolicy="no-referrer"></div>
  <div is="vue:script" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js"
       integrity="sha512-CX7sDOp7UTAq+i1FYIlf9Uo27x4os+kGeoT7rgwvY+4dmjqV0IuE/Bl5hVsjnQPQiTOhAX1O2r2j5bjsFBvv/A=="
       crossorigin="anonymous" referrerpolicy="no-referrer"></div>

  <div is="vue:script" src="./assets/js/main.js"></div>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import router from "@/router";
import {codeToText, regionData} from "element-china-area-data";
import {request} from "@/utils/request";
import chooseAnimalCard from "@/components/ChooseAnimalCard.vue";
import FooterCard from "@/components/FooterCard.vue";
import {ElCascader, ElDivider, ElEmpty, ElOption, ElPagination, ElSelect, ElTabPane, ElTabs, ElTag} from "element-plus";
import {Discount} from "@element-plus/icons-vue";
// import ElPagination from "element-plus"

let select_range= [
  {value: '全国', label: '全国'},
  {value: '仅限同城', label: '仅限同城'},
  {value: '仅限同市', label: '仅限同市'},
  {value: '仅限同省', label: '仅限同省'},
]

export default {
  components: {
    Discount,
    FooterCard, chooseAnimalCard, PetDisplayCard, HeaderTag, ElPagination, ElEmpty, ElTabs, ElTabPane, ElTag, ElDivider, ElCascader, ElOption, ElSelect},
  data(){
    return{
      options: regionData,
      selectedOptions: [],
      range: '',
      select_range: select_range,
      sortTags: ['综合排序', '高价优先', '低价优先', '幼年优先', '老年优先', '最新发布'],
      selectedIndex: 0,
      currentPage: 1,
      pageSize: 15,
      pets: [],
      showChooseCard:false,
      showTags:false,
      showtag1:true,
      showtag2:false,
      isHovered:false,
      activeName: '全部',
      petTypes: [
        { pro: 'dog', label: '宠物狗' },
        { pro: 'cat', label: '宠物猫' },
        { pro: 'rabbit', label: '兔子' },
        { pro: 'other', label: '其他' }
      ],
      petBreeds: [
        { pro: 'dog', label: '不限' },
        { pro: 'dog', label: '中华田园犬' },
        { pro: 'dog', label: '金毛' },
        { pro: 'dog', label: '拉布拉多' },
        { pro: 'dog', label: '泰迪' },
        { pro: 'dog', label: '比熊' },
        { pro: 'dog', label: '柯基' },
        { pro: 'dog', label: '雪纳瑞' },
        { pro: 'dog', label: '吉娃娃' },
        { pro: 'dog', label: '巨型贵宾犬' },
        { pro: 'dog', label: '秋田犬' },
        { pro: 'dog', label: '藏獒' },
        { pro: 'dog', label: '狼青' },
        { pro: 'dog', label: '博美' },
        { pro: 'dog', label: '萨摩耶' },
        { pro: 'dog', label: '边境牧羊犬' },
        { pro: 'dog', label: '德国牧羊犬' },
        { pro: 'dog', label: '柴犬' },
        { pro: 'dog', label: '贵宾犬' },
        { pro: 'dog', label: '比熊' },
        { pro: 'dog', label: '法国斗牛犬' },
        { pro: 'dog', label: '松狮犬' },
        { pro: 'dog', label: '吉娃娃' },
        { pro: 'dog', label: '马尔济斯犬' },
        { pro: 'dog', label: '约克夏梗' },
        { pro: 'dog', label: '蝴蝶犬' },
        { pro: 'dog', label: '巴哥犬' },
        { pro: 'dog', label: '西部高地白梗' },
        { pro: 'dog', label: '苏格兰梗' },
        { pro: 'dog', label: '英国玩具梗' },
        { pro: 'dog', label: '哈士奇' },
        { pro: 'dog', label: '腊肠犬' },
        { pro: 'dog', label: '杜宾犬' },
        { pro: 'dog', label: '斗牛梗' },
        { pro: 'dog', label: '伯恩山犬' },
        { pro: 'dog', label: '藏獒' },
        { pro: 'dog', label: '史毕诺犬' },
        { pro: 'dog', label: '其他' },
        { pro: 'cat', label: '不限' },
        { pro: 'cat', label: '狸花猫' },
        { pro: 'cat', label: '橘猫' },
        { pro: 'cat', label: '奶牛猫' },
        { pro: 'cat', label: '三花猫' },
        { pro: 'cat', label: '加菲猫' },
        { pro: 'cat', label: '布偶猫' },
        { pro: 'cat', label: '暹罗猫' },
        { pro: 'cat', label: '波斯猫' },
        { pro: 'cat', label: '缅因猫' },
        { pro: 'cat', label: '蓝猫' },
        { pro: 'cat', label: '金渐层' },
        { pro: 'cat', label: '银渐层' },
        { pro: 'cat', label: '英国短毛猫' },
        { pro: 'cat', label: '美国短尾猫' },
        { pro: 'cat', label: '苏格兰折耳猫' },
        { pro: 'cat', label: '豹猫' },
        { pro: 'cat', label: '孟买猫' },
        { pro: 'cat', label: '伯曼猫' },
        { pro: 'cat', label: '无毛猫' },
        { pro: 'cat', label: '波米拉猫' },
        { pro: 'cat', label: '茶杯猫' },
        { pro: 'cat', label: '喜马拉雅猫' },
        { pro: 'cat', label: '金吉拉' },
        { pro: 'cat', label: '热带草原猫' },
        { pro: 'cat', label: '其他' },
        { pro: 'rabbit', label: '不限' },
        { pro: 'rabbit', label: '垂耳兔' },
        { pro: 'rabbit', label: '猫猫兔' },
        { pro: 'rabbit', label: '其他' },
        { pro: 'other', label: '不限' },
      ],
      petGenders: [
        { label: "不限", value: "不限" },
        { label: "公", value: "公" },
        { label: "母", value: "母" },
      ],
      petAges: [
        { label: "不限", value: "不限" },
        { label: "0~6个月", value: "0~6个月" },
        { label: "6个月~2岁", value: "6个月~2岁" },
        { label: "2岁~7岁", value: "2岁~7岁" },
        { label: "大于7岁", value: "大于7岁" },
      ],
      petSizes: [
        { label: "不限", value: "不限" },
        { label: "小型", value: "小型" },
        { label: "中型", value: "中型" },
        { label: "大型", value: "大型" },
      ],
      healthConditions:[
        { value: '不限', label: '不限' },
        { value: '已免疫', label: '已免疫' },
        { value: '已驱虫', label: '已驱虫' },
        { value: '已绝育', label: '已绝育' },
      ],
      petPrices: [
        {label: "不限", value: "不限" },
        {label:"免费", value:"免费"},
        {label:"100元以下", value:"100元以下"},
        {label:"100到300元", value:"100到300元"},
        {label:"300到500元", value:"300到500元"},
        {label:"500到1000元", value:"500到1000元"},
        {label:"1000元以上", value:"1000元以上"},
      ],
      petSources: [
        { value: '不限', label: '不限' },
        { value: '家养', label: '家养' },
        { value: '救助站', label: '救助站' },
        { value: '个人救助', label: '个人救助' },
      ],
      tags: [],
      isTypeChose: [true],
      isBreedChose: [true],
      isGenderChose: [true],
      isAgeChose: [true],
      isSizeChose: [true],
      isHealthChose: [true],
      isPriceChose: [true],
      isSourceChose: [true],
      petType: '',
      petBreed: [],
      petGender: [],
      petAge: [],
      petSize: [],
      petSource: [],
      healthCondition: [],
      petPrice: [],
      showAllBreeds: false,
      petAddress: '',
      allBreeds: [],
      choseBreed: [],
      choseGender: [],
      choseSize: [],
      choseHealth: []
    }
  },
  computed: {
    filteredBreeds() {
      if (this.petType === '') {
        return [];
      } else {
        this.allBreeds=this.petBreeds.filter(breed => breed.pro === this.petType);
        return this.allBreeds
      }
    }
  },
  mounted() {
    this.updatePets()
  },
  watch: {
    $route(to, from) {
      // 在每次路由导航之后执行的逻辑
      console.log('Route is updated within adoption component');
      console.log('From:', from);
      console.log('To:', to);

      this.petBreed=[]
      this.petGender=[]
      this.petAge=[]
      this.petSize=[]
      this.petSource=[]
      this.healthCondition=[]
      this.petPrice=[]
      this.petAddress=''
      this.range=''

      // 执行逻辑
      this.updatePets();
    },
  },
  methods: {
    clear(){
      this.isBreedChose = [true]
      this.isGenderChose = [true]
      this.isAgeChose = [true]
      this.isSizeChose = [true]
      this.isHealthChose = [true]
      this.isPriceChose = [true]
      this.choseBreed = []
      this.choseSize = []
      this.choseGender = []
      this.choseHealth = []
      this.petBreed=[]
      this.petGender=[]
      this.petAge=[]
      this.petSize=[]
      this.petSource=[]
      this.healthCondition=[]
      this.petPrice=[]
      // this.petAddress=''
      // this.selectedOptions=[]
      // this.range=''
      this.activeName = '全部'
      this.filter()
    },
    addressChange(arr){
      this.petAddress=codeToText[arr[0]] + codeToText[arr[1]] + codeToText[arr[2]]
      this.filter()
    },
    rangeChange(){
      this.filter()
    },
    selectSortTag(index) {
      this.selectedIndex = index;
      // 在这里可以执行相应的排序逻辑
    },
    handleClose(tag) {
      if(this.choseBreed.indexOf(tag)!==-1){
        let breeds=this.petBreeds.filter(breed => breed.pro === this.petType)
        for (let i=0;i<breeds.length;i++){
          if(breeds[i].label===tag){
            this.chooseBreedTag(i)
            break
          }
        }
      }
      if(this.choseSize.indexOf(tag)!==-1){
        for (let i=0;i<this.petSizes.length;i++){
          if(this.petSizes[i].label===tag){
            this.chooseSizeTag(i)
          }
        }
      }
      if(this.choseGender.indexOf(tag)!==-1){
        for (let i=0;i<this.petGenders.length;i++){
          if(this.petGenders[i].label===tag){
            this.chooseGenderTag(i)
          }
        }
      }
      if(this.choseHealth.indexOf(tag)!==-1){
        for (let i=0;i<this.healthConditions.length;i++){
          if(this.healthConditions[i].label===tag){
            this.chooseHealthTag(i)
          }
        }
      }
    },
    handleClick(tab, event) {
      console.log(this.activeName)
      this.filter()
    },
    updatePets(){
      this.petType = router.currentRoute.value.query.type;

      let temp = router.currentRoute.value.query.selectedOptions
      // console.log(this.selectedOptions)
      if(temp!==undefined&&temp.length!==0){
        this.selectedOptions=temp
        let arr=temp
        this.petAddress=codeToText[arr[0]] + codeToText[arr[1]] + codeToText[arr[2]]
        this.range = router.currentRoute.value.query.range
        this.filter()
        for (let i=0;i<this.petTypes.length;i++){
          if(this.petTypes[i].pro===this.petType){
            this.chooseTypeTag(i)
          }
        }
      }
      else if(this.petType===undefined){
        document.body.style.overflow = 'hidden';
        this.showChooseCard=true
      }
      else{
        request({
          url: `http://localhost:8080/petsByType/${this.petType}`,
          method: 'GET'
        }).then((res) => {
          console.log(res.data)
          this.pets=res.data
        }).catch((error) => {
        })
        for (let i=0;i<this.petTypes.length;i++){
          if(this.petTypes[i].pro===this.petType){
            this.chooseTypeTag(i)
          }
        }
      }
    },
    backToHomeHandler(){
      document.body.style.overflow = '';
      this.showChooseCard=false

      router.back()
    },
    getType(val){
      this.petType=val
      console.log("type="+val)

      document.body.style.overflow = '';
      this.showChooseCard=false

      request({
        url: `http://localhost:8080/petsByType/${this.petType}`,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        this.pets=res.data
        for (let i=0;i<this.petTypes.length;i++){
          if(this.petTypes[i].pro===this.petType){
            this.chooseTypeTag(i)
          }
        }
      }).catch((error) => {
      })
    },
    filter(){
      let breed, gender, age, size, source = [], health, price, address

      if(this.petType==='other'){
        breed='其他'
      }
      else {
        if (this.petBreed.length === 0) {
          breed = this.petBreeds.filter(breed => breed.pro === this.petType).map(item => item.label)
        }
        else breed = this.petBreed
      }

      if(this.petGender.length===0){
        gender=this.petGenders.map(item => item.value)
      }
      else gender=this.petGender

      if(this.petAge.length===0){
        age=this.petAges.map(item => item.value)
      }
      else age=this.petAge

      if(this.petSize.length===0){
        size=this.petSizes.map(item => item.value)
      }
      else size=this.petSize

      if(this.activeName==='全部'){
        source=this.petSources.map(item => item.value)
      }
      else{
        source.push(this.activeName)
      }

      if(this.healthCondition.length===0){
        health=["none"]
      }
      else health=this.healthCondition

      if(this.petPrice.length===0){
        price=this.petPrices.map(item => item.value)
      }
      else price=this.petPrice

      if(this.petAddress===''){
        address='全国'
      }
      else address=this.petAddress

      if(this.range==='全国'){
        address='全国'
      }

      console.log(breed)
      console.log(gender)
      console.log(age)
      console.log(size)
      console.log(source)
      console.log(health)
      console.log(price)
      console.log(address)

      request({
        url: `http://localhost:8080/filteredPets/${this.petType}/${address}/${breed}/${gender}/${age}/${size}/${source}/${health}/${price}`,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        this.pets=res.data
      }).catch((error) => {
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.scrollToTop();
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    },
    chooseTypeTag(index) {
      console.log(index)
      for (let i = 0; i < this.petTypes.length; i++) {
        if (i === index) {
          this.isTypeChose[i] = true
          this.petType = this.petTypes[index].pro
          this.isBreedChose = [true]
          this.isGenderChose = [true]
          this.isAgeChose = [true]
          this.isSizeChose = [true]
          this.isHealthChose = [true]
          this.isPriceChose = [true]
          this.choseBreed = []
          this.choseSize = []
          this.choseGender = []
          this.choseHealth = []
          this.petBreed=[]
          this.petGender=[]
          this.petAge=[]
          this.petSize=[]
          this.petSource=[]
          this.healthCondition=[]
          this.petPrice=[]
          // this.petAddress=''
          // this.selectedOptions=[]
          // this.range=''
          this.activeName = '全部'
        } else {
          this.isTypeChose[i] = false
        }
      }
      this.filter()
    },
    chooseBreedTag(index) {
      for (let i = 0; i < this.filteredBreeds.length; i++) {
        if (i === index) {
          if(this.isBreedChose[i]){
            if(i===0) break
            this.isBreedChose[i]=false
            let label = this.filteredBreeds[index].label
            let pos = this.petBreed.indexOf(label)
            this.choseBreed.splice(this.choseBreed.indexOf(label),1)
            this.petBreed.splice(pos, 1)
            if(this.isBreedChose.indexOf(true)===-1){
              this.isBreedChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isBreedChose = [true]
              this.petBreed=[]
              this.choseBreed=[]
            }
            else {
              this.isBreedChose[0] = false
              this.isBreedChose[i] = true
              this.petBreed.push(this.filteredBreeds[index].label)
              this.choseBreed.push(this.filteredBreeds[index].label)
            }
          }
        }
      }
      console.log(this.petBreed)
      this.filter()
    },
    chooseGenderTag(index){
      for (let i = 0; i < this.petGenders.length; i++) {
        if (i === index) {
          if(this.isGenderChose[i]){
            if(i===0) break
            this.isGenderChose[i]=false
            let label = this.petGenders[index].label
            let pos = this.petGender.indexOf(label)
            this.choseGender.splice(this.choseGender.indexOf(label),1)
            this.petGender.splice(pos, 1)
            if(this.isGenderChose.indexOf(true)===-1){
              this.isGenderChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isGenderChose = [true]
              this.petGender=[]
              this.choseGender=[]
            }
            else {
              this.isGenderChose[0] = false
              this.isGenderChose[i] = true
              this.petGender.push(this.petGenders[index].label)
              this.choseGender.push(this.petGenders[index].label)
            }
          }
        }
      }
      this.filter()
      console.log(this.petGender)
    },
    chooseAgeTag(index){
      for (let i = 0; i < this.petAges.length; i++) {
        if (i === index) {
          if(this.isAgeChose[i]){
            if(i===0) break
            this.isAgeChose[i]=false
            let label = this.petAges[index].label
            let pos = this.petAge.indexOf(label)
            this.petAge.splice(pos, 1)
            if(this.isAgeChose.indexOf(true)===-1){
              this.isAgeChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isAgeChose = [true]
              this.petAge=[]
            }
            else {
              this.isAgeChose[0] = false
              this.isAgeChose[i] = true
              this.petAge.push(this.petAges[index].label)
            }
          }
        }
      }
      this.filter()
      console.log(this.petAge)
    },
    chooseSizeTag(index){
      for (let i = 0; i < this.petSizes.length; i++) {
        if (i === index) {
          if(this.isSizeChose[i]){
            if(i===0) break
            this.isSizeChose[i]=false
            let label = this.petSizes[index].label
            let pos = this.petSize.indexOf(label)
            this.choseSize.splice(this.choseSize.indexOf(label),1)
            this.petSize.splice(pos, 1)
            if(this.isSizeChose.indexOf(true)===-1){
              this.isSizeChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isSizeChose = [true]
              this.petSize=[]
              this.choseSize=[]
            }
            else {
              this.isSizeChose[0] = false
              this.isSizeChose[i] = true
              this.petSize.push(this.petSizes[index].label)
              this.choseSize.push(this.petSizes[index].label)
            }
          }
        }
      }
      this.filter()
      console.log(this.petSize)
    },
    // chooseSourceTag(index){
    //   for (let i = 0; i < this.petSources.length; i++) {
    //     if (i === index) {
    //       if(this.isSourceChose[i]){
    //         if(i===0) break
    //         this.isSourceChose[i]=false
    //         let label = this.petSources[index].label
    //         let pos = this.petSource.indexOf(label)
    //         this.petSource.splice(pos, 1)
    //         if(this.isSourceChose.indexOf(true)===-1){
    //           this.isSourceChose[0]=true
    //         }
    //       }
    //       else {
    //         if(i===0){
    //           this.isSourceChose = [true]
    //           this.petSource=[]
    //         }
    //         else {
    //           this.isSourceChose[0] = false
    //           this.isSourceChose[i] = true
    //           this.petSource.push(this.petSources[index].label)
    //         }
    //       }
    //     }
    //   }
    //   this.filter()
    //   console.log(this.petSource)
    // },
    chooseHealthTag(index){
      for (let i = 0; i < this.healthConditions.length; i++) {
        if (i === index) {
          if(this.isHealthChose[i]){
            if(i===0) break
            this.isHealthChose[i]=false
            let label = this.healthConditions[index].label
            let pos = this.healthCondition.indexOf(label)
            this.choseHealth.splice(this.choseHealth.indexOf(label),1)
            this.healthCondition.splice(pos, 1)
            if(this.isHealthChose.indexOf(true)===-1){
              this.isHealthChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isHealthChose = [true]
              this.healthCondition=[]
              this.choseHealth=[]
            }
            else {
              this.isHealthChose[0] = false
              this.isHealthChose[i] = true
              this.healthCondition.push(this.healthConditions[index].label)
              this.choseHealth.push(this.healthConditions[index].label)
            }
          }
        }
      }
      this.filter()
      console.log(this.healthCondition)
    },
    choosePriceTag(index){
      for (let i = 0; i < this.petPrices.length; i++) {
        if (i === index) {
          if(this.isPriceChose[i]){
            if(i===0) break
            this.isPriceChose[i]=false
            let label = this.petPrices[index].label
            let pos = this.petPrice.indexOf(label)
            this.petPrice.splice(pos, 1)
            if(this.isPriceChose.indexOf(true)===-1){
              this.isPriceChose[0]=true
            }
          }
          else {
            if(i===0){
              this.isPriceChose = [true]
              this.petPrice=[]
            }
            else {
              this.isPriceChose[0] = false
              this.isPriceChose[i] = true
              this.petPrice.push(this.petPrices[index].label)
            }
          }
        }
      }
      this.filter()
      console.log(this.petPrice)
    },
    showBreeds(){
      this.showAllBreeds=true
    },
    hideBreeds(){
      this.showAllBreeds=false
    }
  }
}
</script>


<style lang="less">

@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');


.selected {
  color: #6504B5; /* 变色样式，可以根据实际需求修改 */
  font-weight: bold; /* 加粗样式，可以根据实际需求修改 */
}

.clear{
  font-weight: 580;
  color: black;
}

.clear:hover{
  color: #6504B5;
  cursor: pointer;
}

.choseTags{
  display: flex;
  text-align: left;
  padding-top: 10px;
  margin-left: 48px;
}

// 修改el-tabs
.my-tabs .el-tabs__item.is-active {
  background: rgba(0, 102, 255, 0.08);
  border-radius: 4px 4px 3px 3px;
  color: #6504B5;
}

.my-tabs .el-tabs__active-bar {
  background-color: #166fe8; /* 修改底部横杠的颜色 */
  height: 3px; /* 修改底部横杠的高度 */
}
.my-tabs /deep/ .el-tabs__active-bar::after{
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 39%;
  bottom:2px;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 5px solid #166fe8;
}
.my-tabs /deep/ .el-tabs__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px !important;
  padding: 0 !important;
}
.my-tabs /deep/ .el-tabs__nav.is-top{
  display: flex;
}
.my-tabs /deep/ .el-tabs__nav.is-top > div {
  width: 100px;
  text-align: center;
}

.el-tabs__active-bar.is-top {
  padding: 0 24px;
  box-sizing: border-box !important;
  background-clip: content-box !important;
}

.el-tabs__item{
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 22px;
  color: #495056;
  cursor: pointer;
  position: relative;
}

.el-tabs__item:hover{
  color: #6504B5;
}


.filter{
  width: 100%;
  justify-content: center;
  display: flex;
}

.screen{
  border-top: 2px solid #e6e6e6;
  border-right: 2px solid #e6e6e6;
  border-left: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
  color: #495056;
}

.screen-row{
  width: 100%;
  text-align: center;
  font-size: 14px;
  background: #fafafa;
  border-bottom: 1px solid #e6e6e6;
}

.left-box{
  color: #7a838d;
  float: left;
  width: 70px;
  height: 100%;
  display: inline-block;
  line-height: 42px;
}

.right-box{
  float: left;
  width: 1128px;
  background: #fff;
}

.tag-box{
  padding: 10px 0 10px 6px;
  height: 42px;
  overflow: hidden;
}

.tags{
  float: left;
  width: 1040px;
  text-align: left;
}

.tag-item{
  float: left;
  margin: 0 8px;
  cursor: pointer;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 12px!important;
}

.tag-item-chose{
  float: left;
  margin: 0 8px;
  cursor: pointer;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 12px!important;
  color: white;
  background-color: #6504B5;
  border-radius: 6px;
  height: 21px;
}

.tag-item:hover{
  color: #6504B5;
}

.tag-item:after{
  box-sizing: border-box;
}

.show-all{
  float: right;
}

.show-all:hover{
  color: #6504B5;
  cursor: pointer;
}

.pull-icon{
  width: 11px;
  height: 6px;
  margin-right: 14px;
  background-image: url(https://sta.guazistatic.com/guazi-mall-pc/img/sprite-icon.83e2a48.png);
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 4px;
  background-position: -40px 0;
  -webkit-transition: all .4s;
  transition: all .4s;
  vertical-align: 2px;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  color: #6504b5;
}


.input-group label {
  justify-content: center;
  width: 150px;
  margin-left: 10px;
  text-align: center;  line-height: 30px; /* 根据实际情况调整行高 */
}

.el-select {
  width: 80%;
}

.justify-content-between{
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  //text-align: center;
}


</style>