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
                <input type="text" placeholder="真实姓名" v-model.trim="realname">
                <input type="text" placeholder="身份证号" v-model.trim="idnumber">
                <input type="tel" placeholder="手机号" v-model.trim="tel">
                <input type="email" placeholder="邮箱" v-model.trim="mail">
                <input type="text" placeholder="用户名" v-model.trim="name">
                <div class="position-relative d-inline">
                  <input type="password" placeholder="设置密码" id="pwd" v-model.trim="password">
                  <i class="fa fa-lock fa-lg"></i>
                  <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                  <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                </div>
                 <span class="position-relative d-inline">
                  <input type="password" placeholder="再次输入您的密码" id="password" v-model.trim="password2">
                  <span class="position-absolute top-0 end-0 mx-2 " id="password-icon">
                    <i class="fa fa-lock fa-lg"></i>
                    <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                    <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                    </span></span>
                <a href="#"><button class="py-2 px-5 fs-5 my-2" @click.prevent="handlefinish">注册</button></a>
                <p class="py-3" >已有账号？<a href='' @click.prevent="handlelogin">去登录</a></p>

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
  name:'register',
  props: {
    msg: String
  },
  data () {
    return {
      realname:"",
      idnumber:"",
      tel:"",
      mail:"",
      name:"",
      password1:"",
      password2:""
    };
  },methods:{
    handlefinish:function()
    {
      if(localStorage['name']===this.name)
      {
        alert("用户名已存在");//如果用户名已存在则无法注册
      }
      else if(this.name==='')
      {
        alert("用户名不能为空");
      }
      if(this.password!==this.password2){
        alert("两次密码不相同");
      }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('realname',this.realname);
        localStorage.setItem('idnumber',this.idnumber);
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        localStorage.setItem('s',"false");
        alert("注册成功");
        this.$router.replace('/login');//完成注册后跳转至登录页面
      }
    },
    handlelogin:function()
    {
      this.$router.replace('/login')
    },

  }
};
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