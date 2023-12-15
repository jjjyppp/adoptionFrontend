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
              <input style="margin-bottom: 5px" type="text" name="username" v-model.trim="name" id="" placeholder="用户名"  required @input="checkName" >
              <div v-if="nameError" class="errors">
                {{ nameError }}
              </div>
              <input style="margin-bottom: 5px" type="password" name="password" v-model.trim="password" id="" placeholder="密码" required @input="checkPw">
              <div v-if="pwError" class="errors">
                {{ pwError }}
              </div>
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
import {request} from "@/utils/request";
import {ElMessage} from "element-plus";
import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";

export default {
  components: {HeaderTag, FooterCard, ElMessage},
  data(){
    return{
      name:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password:"",//密码
      st:"false",//false为不保存登录
      nameError: null,
      pwError: null,
    };
  },
  methods:{
    checkName(){
      if(this.name===''){
        this.nameError='您还未填写用户名'
      }
      else {
        this.nameError=null
      }
    },
    checkPw() {
      if (this.password === '') {
        this.pwError = '您还未填写密码'
      }
      else {
        this.pwError=null
      }
    },
    handlelogin:function()
    {
      // if(this.name===localStorage['name'] && this.password===localStorage['password'])
      // {
      //   this.$router.replace('/');//如果输入的名字以及密码正确路由跳转至home
      // }
      // if(this.name==='')//名字为空
      // {
      //   alert('用户名不为空');
      // }
      // else if(this.password==='')//密码为空
      // {
      //   alert('密码不为空');
      // }
      // else{
      //   alert('账号不存在，请注册后登录');//查无此号
      // }
      this.checkName()
      this.checkPw()

      if(this.nameError || this.pwError) return

      const loginReq = request({
        url: '/login',
        method: 'POST',
        data: {
          userName: this.name,
          password: this.password,
        }
      });
      loginReq.then(response => {
        localStorage.setItem("loginStatus", "true")
        localStorage.setItem("username", this.name)
        let res=response.data
        if(res>0) {
          ElMessage({
            message: '登录成功',
            type: 'success',
            center: true  // 设置消息居中显示
          });
          this.$router.replace('/');
        }
        else if(res===0){
          ElMessage({
            message: '密码不正确',
            type: 'error',
            center: true  // 设置消息居中显示
          });
        }
        else if(res===-1){
          ElMessage({
            message: '用户名不存在',
            type: 'error',
            center: true  // 设置消息居中显示
          });
        }
      }).catch(error=> {

      })
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

.errors{
  text-align: left;
  margin-left: 80px;
  color: red;
}
</style>