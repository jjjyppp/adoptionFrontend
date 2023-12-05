<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <!--Main start-->

  <main style="background-color:#f0f0f0; margin-top: 50px">
    <section id="find-animal" class="py-5">
      <div class="container">
        <div class="row py-1 py-md-3">
          <div class="col-lg-4 col-12">
            <div class="sort py-3  mb-3 text-center">
              <form action="">
                <label for="sort" class="me-4">排序</label>
                <select name="sort" id="sort">
                  <option value="">A-Z</option>
                  <option value="">热门</option>
                  <option value="">最新发布</option>
                  <option value="">附近</option>
                </select>
              </form>
            </div>

            <form action="">

              <p class="fs-4 fw-bold">种类</p>
              <div style="text-align:-webkit-center" class="mb-2 multiple-select custom-select">
                <el-select multiple id='pet-type' v-model="petType" size="large" :popper-append-to-body="false" popper-class="multiple-select" class="custom-select" placeholder="请选择宠物种类" filterable>
                  <el-option
                      v-for="type in petTypes"
                      :key="type.value"
                      :label="type.label"
                      :value="type.value"
                  ></el-option>
                </el-select>
              </div>

              <p class="fs-4 fw-bold py-2">性别</p>
              <el-checkbox-group v-model="petGender" style="zoom: 140%">
                <el-checkbox label="公"></el-checkbox>
                <el-checkbox label="母"></el-checkbox>
              </el-checkbox-group>

              <p class="fs-4 fw-bold py-2">年龄</p>
              <div style="text-align:-webkit-center" class="mb-3">

                <el-select multiple id="pet-age" size="large" placeholder="请选择宠物年龄" v-model="petAge" filterable >
                  <el-option
                      v-for="item in petAges"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  ></el-option>
                </el-select>
              </div>

              <p class="fs-4 fw-bold py-2">体型</p>
              <div style="text-align:-webkit-center" class="mb-3">
                <el-select multiple id="pet-size" size="large" placeholder="请选择宠物体型" v-model="petSize" filterable >
                  <el-option
                      v-for="item in petSizes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <p class="fs-4 fw-bold py-2">来源</p>
              <div style="text-align:-webkit-center" class="mb-3">
                <el-select  multiple id="pet-source" size="large" placeholder="请选择宠物来源" v-model="selectedPetSource">
                  <el-option
                      v-for="source in petSources"
                      :key="source.value"
                      :label="source.label"
                      :value="source.value"
                  ></el-option>
                </el-select>
              </div>
            </form>
            <p class=" fs-4 fw-bold py-2">健康情况</p>
            <div style="text-align:-webkit-center" class="mb-3">
              <el-select multiple id="HealthCondition" size="large" placeholder="请选择宠物健康情况" v-model="healthCondition" >
                <el-option
                    v-for="item in HealthConditions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <!--            <p class="fs-4 fw-bold">领养方式</p>-->
            <!--            <el-checkbox-group v-model="adoptionType" style="zoom: 140%">-->
            <!--              <el-checkbox label="有偿领养"></el-checkbox>-->
            <!--              <el-checkbox label="无偿领养"></el-checkbox>-->
            <!--            </el-checkbox-group>-->
            <!--            <div class="form-check form-check-inline px-5 py-3">-->
            <!--              <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">-->
            <!--              <label class="form-check-label" for="inlineRadio1">有偿</label>-->
            <!--            </div>-->
            <!--            <div class="form-check form-check-inline px-5">-->
            <!--              <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">-->
            <!--              <label class="form-check-label" for="inlineRadio2">无偿</label>-->
            <!--            </div>-->

            <p class=" fs-4 fw-bold py-2">领养金额</p>
            <div style="text-align:-webkit-center" class="mb-3">
              <el-select multiple placeholder="请选择领养金额" size="large" v-model="adoptionAmount">
                <el-option label="免费" value="0"></el-option>
                <el-option label="100元以下" value="below100"></el-option>
                <el-option label="100到300元" value="100to300"></el-option>
                <el-option label="300到500元" value="300to500"></el-option>
                <el-option label="500到1000元" value="500to1000"></el-option>
                <el-option label="1000元以上" value="above1000"></el-option>
              </el-select>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="animal py-3 px-3">
              <div class="row justify-content-between">
                <pet-display-card v-for="(pet, index) in pets" :key="index" :pet="pet" />
              </div>
            </div>
          </div>
          <div class="col-12 text-end py-2" style="margin-top: 20px">
            <button class="py-2 px-3 fs-5 " style="margin-right: 20px">&lt; 上一页</button>
            <button class="py-2 px-3 fs-5 ">下一页 ></button>
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
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import {
  ElCheckbox,
  ElCheckboxGroup,
  ElOption,
  ElSelect,
} from "element-plus";
export default {
  name: "adoptionPage",
  components: {
    PetDisplayCard,ElSelect, ElOption,HeaderTag,FooterCard, ElCheckboxGroup, ElCheckbox
  },
  data() {
    return {
      pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 5, name: '猫猫5', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 6, name: '猫猫6', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 7, name: '猫猫7', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 8, name: '猫猫8', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 9, name: '猫猫9', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 10, name: '猫猫10', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 11, name: '猫猫11', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 12, name: '猫猫12', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
      petName: "",
      petSize: "",
      petAge: "",
      petType: '',
      petGender: [],
      selectedPetSource: '',
      healthCondition:'',
      petTypes: [
        { value: 'dog', label: '宠物狗' },
        { value: 'cat', label: '宠物猫' },
        { value: 'rabbit', label: '兔子' },
        { value: 'other', label: '其他' }
      ],

      petSizes: [
        { label: "小型", value: "small" },
        { label: "中型", value: "medium" },
        { label: "大型", value: "large" },
        // Add more options for pet sizes
      ],
      petGenders: [
        { label: "公", value: "male" },
        { label: "母", value: "female" },
        // Add more options for pet genders
      ],
      petAges: [
        { label: "0~6个月", value: "0-6" },
        { label: "6个月~2岁", value: "6-24" },
        { label: "2岁~7岁", value: "24-84" },
        { label: "大于7岁", value: "84+" },
        // Add more options for pet ages
      ],
      petSources: [
        { value: 'home', label: '家养' },
        { value: 'shelter', label: '救助站' },
        { value: 'save', label: '个人救助' },
        { value: 'other', label: '其他' }
      ],
      HealthConditions:[
        { value: '已免疫', label: '已免疫' },
        { value: '已驱虫', label: '已驱虫' },
        { value: '已绝育', label: '已绝育' },
      ],
      selectedAdoptNeeds : [],
      adoptionType: '', // 领养方式
      adoptionAmount: '', // 金额
    };
  },
  methods:{
  }
};
</script>



<style lang="less">

@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');


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




</style>