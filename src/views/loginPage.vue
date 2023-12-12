<script setup>

import FooterCard from "@/components/FooterCard.vue";
import HeaderTag from "@/components/HeaderTag.vue";
</script>


<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <section id="login" class="py-5">
      <div class="container">
        <div class="row justify-content-center pt-5 mt-5">
          <div class="col-12 col-lg-6 text-center ">
            <div class="log-inner py-5">
              <h1 class="py-2"> 登录</h1>
              <input type="text" name="username" v-model.trim="name" id="" placeholder="用户名"  required>
              <input type="password" name="password" v-model.trim="password" id="" placeholder="密码" required>
              <a href="#" ><button class="py-2 px-5 fs-5 my-2" @click.prevent="handlelogin">登录</button></a>
              <p class="py-3" style="color: #c60bcc; font-weight: 700;">尚未注册账号？<a href='' @click.prevent="handleregister" style="color: #0d6efd; text-decoration: underline;" >去注册</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  <footer-card></footer-card>
 </template>
<script>
export default {
  data(){
    return{
      name:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password:"",//密码
      st:"false",//false为不保存登录
    };
  },
  methods:{
    handlelogin:function()
    {
      if(this.name===localStorage['name'] && this.password===localStorage['password'])
      {
        this.$router.replace('/');//如果输入的名字以及密码正确路由跳转至home
      }
      else if(this.name==='')//名字为空
      {
        alert('用户名不为空');
      }
      else if(this.password==='')//密码为空
      {
        alert('密码不为空');
      }
      else{
        alert('账号不存在，请注册后登录');//查无此号
      }
    },
    handleregister:function()
    {
      this.$router.replace('/signup')//点击注册按钮，跳转至注册页面
    },
    //点击保持登录状态触发handlesave
    handlesave:function(){
      this.st="true";//修改登录状态为true
      localStorage.setItem('s',this.st);
      console.log(localStorage.s);
    }
  }
};
</script>

<style>
@import url('./assets/css/main.css');
</style>