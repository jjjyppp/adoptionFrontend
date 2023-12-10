<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     </head>
    <section id="signup" class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class=" col-12 col-lg-6">
            <div class="sign-inner text-center py-4 my-4">
              <h1 class="pb-3">注册</h1>
              <form action="">
                <input type="text" placeholder="真实姓名">
                <input type="text" placeholder="身份证号">
                <input type="number" placeholder="手机号">
                <input type="text" placeholder="用户名">

                <div class="position-relative d-inline">
                  <input type="password" placeholder="设置密码" id="pwd" >
                  <i class="fa fa-lock fa-lg"></i>
                  <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                  <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                </div>
                 <span class="position-relative d-inline">
                  <input type="password" placeholder="再次输入您的密码" id="password" >
                  <span class="position-absolute top-0 end-0 mx-2 " id="password-icon">
                    <i class="fa fa-lock fa-lg"></i>
                    <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                    <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                    </span></span>
                <a href="#"><button class="py-2 px-5 fs-5 my-2">注册</button></a>
                <p class="py-3" >已有账号？<a class="text">去登录</a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  <footer-card></footer-card>
</template>

<script>
import FooterCard from "@/components/FooterCard.vue";
export default {
  components: {FooterCard},
  data () {
    return {
      psw: true,
      userCode: '',
      userPwd: ''
    }
  }
}
</script>


<style>
@import url('./assets/css/plugin.css');
@import url('./assets/css/main.css');

.fa-eye,.fa-eye-slash{
  position: absolute;
  right: 15px;
  top: 13px;
}
</style>