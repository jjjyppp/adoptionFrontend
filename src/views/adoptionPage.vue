<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import {ElSelect} from "element-plus";
</script>

<template>
  <header-tag></header-tag>
  <head>
    <link rel="icon" type="image/x-icon" href="./assets/img/petfinder-logo-D1913C04F6-seeklogo.com.png">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/plugin.css">
    <link rel="stylesheet" href="./assets/css/main.css">
  </head>
  <!--Main start-->

  <main style="background: #f0f0f0">
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

            <div class="search pb-3  mb-3 text-center">
              <form action="">
                <div  class="search-box mb-3">
                  <p class="text-light fs-4 fw-bold py-2">种类</p>

                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label " for="flexCheckDefault">
                      狗
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      猫
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt" checked="checked">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      啮齿类宠物
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaulttt">
                    <label class="form-check-label" for="flexCheckDefaulttt">
                      其他
                    </label>
                  </div>
                </div>
                <div class="search-box mb-3">
                  <p class="text-light fs-4 fw-bold py-2">性别</p>
                  <div class="form-check form-check-inline px-5 py-4">
                    <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">公</label>
                  </div>
                  <div class="form-check form-check-inline px-5">
                    <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">母</label>
                  </div>
                </div>
                <div class="search-box mb-3" >
                  <p class="text-light fs-4 fw-bold py-2">年龄</p>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label " for="flexCheckDefault">
                      0~6个月
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      6个月~2岁
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      2岁~7岁
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaulttt">
                    <label class="form-check-label" for="flexCheckDefaulttt">
                      大于7岁
                    </label>
                  </div>
                </div>
                <div class="search-box " >
                  <p class="text-light fs-4 fw-bold py-2">体型</p>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label " for="flexCheckDefault">
                      小型
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      中型
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      大型
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div class="search-box mb-3">
              <p class="text-light fs-4 fw-bold py-2">领养方式</p>
              <div class="form-check form-check-inline px-5 py-4">
                <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">有偿</label>
              </div>
              <div class="form-check form-check-inline px-5">
                <input class="form-check-input me-3" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">无偿</label>
              </div>
            </div>

            <strong>领养方式</strong>
            <el-select
                v-model="value" placeholder="全部"
                style="width: 90%; height: 60px"
                class="custom-select"
            >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  style="background: white;height: 60px;"
              >
              </el-option>
            </el-select>


            <a><button class="py-2 px-5 fs-5 my-2 text-light">筛选</button></a>
          </div>
          <div class="col-lg-8 col-12">
            <div class="animal py-3 px-3">
              <div class="row justify-content-between">
                <pet-display-card v-for="(pet, index) in pets" :key="index" :pet="pet" />
              </div>
            </div>
          </div>
          <div class="col-12 text-end py-2">
            <a href="#"><button class="py-2 px-3 fs-5 ">
              &lt; 上一页</button></a>
            <a href="#"><button class="py-2 px-3 fs-5 ">下一页 ></button></a>
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
export default {
  components: {
    PetDisplayCard,
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
    };
  },
};
</script>



<style scoped>
/* 本地样式 */
@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');

/deep/

.el-input__inner{
  height: 52px;
}

/* 下面设置右侧按钮居中 */
.el-input__suffix {
  top: 5px;
}
.el-input__icon {
  line-height: inherit;
}
.el-input__suffix-inner {
  display: inline-block;
}







</style>