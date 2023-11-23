<script setup>

import HeaderTag from "@/components/HeaderTag.vue";
</script>

<template>
  <header-tag></header-tag>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <title>Petfinder | 领养</title>
  </head>
  <!--Main start-->
  <main>
    <section id="find-animal" class="py-5">
      <div class="container">
        <div class="row py-1 py-md-3">
          <div class="col-lg-4 col-12">
            <div class="sort py-3  mb-3 text-center">
              <form action="">


                <label for="sort" class="me-4">排序</label>
                <select name="sort" id="sort">
                  <option value="">A-Z</option>
                  <option value="">最新发布</option>
                  <option value="">热门</option>
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

                <div class="search-box " >
                  <p class="text-light fs-4 fw-bold py-2">年龄</p>

                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label " for="flexCheckDefault">
                      幼年（1岁以下）
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaultt">
                    <label class="form-check-label" for="flexCheckDefaultt">
                      成年
                    </label>
                  </div>
                  <div class="form-check py-2 px-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefaulttt">
                    <label class="form-check-label" for="flexCheckDefaulttt">
                      老年（7岁以上）
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div class="search-box " >
              <p class="text-light fs-4 fw-bold py-2">体重</p>
            </div>
          <div class="wrapper">
              <div class="price-input">
                <div class="field">
                  <span>Min(kg)</span>
                  <input type="number" class="input-min" value="0">
                </div>
                <div class="separator">-</div>
                <div class="field">
                  <span>Max(kg)</span>
                  <input type="number" class="input-max" value="100">
                </div>
              </div>
              <div class="slider">
                <div class="progress"></div>
              </div>
              <div class="range-input">
                <input type="range" class="range-min" min="0" max="10000" value="2500" step="100">
                <input type="range" class="range-max" min="0" max="10000" value="7500" step="100">
              </div>
            </div>
            <a><button class="py-2 px-5 fs-5 my-2 text-light">筛选</button></a>



          </div>


          <div class="col-lg-8 col-12">
            <div class="animal py-3 px-3">
              <div class="row justify-content-between">
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a >
                      <div class="pet-img">
                        <img src="./assets/img/cat1.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">五岁 南京</p>
                    </a>
                    <a><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">两岁 南京</p>
                    </a>
                    <a><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">六岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">七岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">三岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">五岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a >
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">九岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">四岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a >
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">半岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">六岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">五岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
                <div class="col-xl-3 col-md-3 col-6">
                  <div class="animal-box text-center mb-3">
                    <a>
                      <div class="pet-img">
                        <img src="./assets/img/indir.jpg" alt="">
                      </div>
                      <p class="fs-3 pt-3 mb-0 ">猫猫</p>
                      <p class="py-0 mb-0">一岁 南京</p>
                    </a>
                    <a href="#"><span class="bg-light like-button"><i
                        class="fa-regular fa-heart"></i></span></a>
                  </div>

                </div>
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
  <footer>
    <!--Footer top strat-->
    <section id="footer-top" class="py-4">
      <div class="container">
        <div class="row pt-4">
          <div class="col-md-2 col-sm-6">
            <div class="footer-inner">
              <h5 class="py-2">关于</h5>
              <ul class="px-0">
                <a href="#">
                  <li class="m-0">关于我们</li>
                </a>
                <a href="#">
                  <li>合作单位</li>
                </a>
                <a href="#">
                  <li>新闻</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="footer-inner">
              <h5 class="py-2">关于宠物</h5>
              <ul class="px-0">
                <a href="#">
                  <li>收养宠物</li>
                </a>
                <a href="#">
                  <li>科学养宠科普</li>
                </a>
                <a href="#">
                  <li>宠物行为</li>
                </a>
                <a href="#">
                  <li>宠物健康</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="footer-inner">
              <h5 class="py-2">公益事业</h5>
              <ul class="px-0">
                <a href="#">
                  <li>领养或救助</li>
                </a>
                <a href="#">
                  <li>流浪动物收容所</li>
                </a>
                <a href="#">
                  <li>绝育行动</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="footer-inner">
              <h5 class="py-2">联系电话</h5>
              <p>
                +15094378007
              </p>
              <h5 class="py-2">地址</h5>
              <p>
                南京大学鼓楼校区
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="sign">
              <h5 class="py-2">关爱动物，科学养宠，我们在行动</h5>
              <a class="text-center d-block py-5"><span class="py-2 px-4 fs-5"> 登录</span></a>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!--Footer top end-->

    <!--Footer bottom start-->
    <section id="footer-bottom" class="py-3">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <p class="mb-0">
              ©2022 Petfinder.com All trademarks are owned by nju, or used
              with permission.
            </p>
          </div>
          <div class="col-md-4">
            <div class="social-media text-center">
              <a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a>
              <a href="#"><span><i class="fa-brands fa-twitter"></i></span></a>
              <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
              <a href="#"><span><i class="fa-brands fa-youtube"></i></span></a>
              <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Footer bottom end-->
  </footer>
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

<style scoped>
/* scoped 样式 */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');

/* 本地样式 */
@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');
</style>