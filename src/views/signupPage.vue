<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>

  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     </head>
    <section id="signup" class="py-5"  >
      <div class="container"  style="padding-top: 78px">
        <div class="row justify-content-center">
          <div class=" col-12 col-lg-6">
            <div class="sign-inner text-center py-4 my-4">
              <h1 class="pb-3">注册</h1>
              <form action="">
<!--                <span style="margin:0;">*</span>-->
                <label class="form-label" for="name"><span style="color: red;">*</span>用户名</label>
                <input type="text" id="name" placeholder="请输入用户名" v-model.trim="name" @input="checkName"><br>
                <div v-if="nameError" class="error-message">
                  {{ nameError }}
                </div>

                <label class="form-label" for="realname"><span style="color: red;">*</span>真实姓名</label>
                <input type="text" id="realname" placeholder="请输入真实姓名" v-model.trim="realname" @input="checkRealName"><br>
                <div v-if="realnameError" class="error-message">
                  {{ realnameError }}
                </div>

                <label class="form-label" for="idnumber"><span style="color: red;">*</span>身份证号</label>
                <input type="text" id="idnumber" placeholder="请输入身份证号" v-model.trim="idnumber" @input="checkIdnumber"><br>
                <div v-if="idnumberError" class="error-message">
                  {{ idnumberError }}
                </div>

                <label class="form-label" for="tel"><span style="color: red;">*</span>手机号</label>
                <input type="tel" id="tel" placeholder="请输入手机号" v-model.trim="tel" @input="checkTel"><br>
                <div v-if="telError" class="error-message">
                  {{ telError }}
                </div>

                <label class="form-label" for="mail">邮箱</label>
                <input type="email" id="mail" placeholder="请输入邮箱" v-model.trim="mail" @input="checkMail"><br>
                <div v-if="mailError" class="error-message">
                  {{ mailError }}
                </div>

                <div class="position-relative d-inline">
                  <label class="form-label" for="pwd"><span style="color: red;">*</span>设置密码</label>
                  <input type="password" placeholder="设置密码" id="pwd" v-model.trim="password1" @input="checkPw1"><br>
                  <div v-if="pw1Error" class="error-message">
                    {{ pw1Error }}
                  </div>
                  <i class="fa fa-lock fa-lg"></i>
                  <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                  <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                </div>
                 <span class="position-relative d-inline">
                   <label class="form-label" for="pwd"><span style="color: red;">*</span>确认密码</label>
                  <input type="password" placeholder="再次输入您的密码" id="password" v-model.trim="password2" @input="checkPw2"><br>
                   <div v-if="pw2Error" class="error-message">
                    {{ pw2Error }}
                  </div>
                  <span class="position-absolute top-0 end-0 mx-2 " id="password-icon">
                    <i class="fa fa-lock fa-lg"></i>
                    <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                    <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                    </span></span>
                <button class="py-2 px-5 fs-5 my-2" @click.prevent="handlefinish">注册</button>
                <p class="py-3">已有账号？<a href='' @click.prevent="handlelogin">去登录</a></p>
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
import {request} from "@/utils/request";
import {ElMessage} from "element-plus";
import HeaderTag from "@/components/HeaderTag.vue";
export default {
  components: {HeaderTag, FooterCard},
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
      password2:"",
      nameError: null,
      realnameError: null,
      idnumberError: null,
      telError: null,
      mailError: null,
      pw1Error: null,
      pw2Error: null,
    };
  },methods:{
    checkName(){
      if(this.name===''){
        this.nameError='您还未填写用户名'
        return
      }
      console.log(this.name)
      // const nameRegex = /^[a-zA-Z\d-_]*$/
      if(this.name.length<4||this.name.length>16){
        this.nameError = '用户名长度不符合要求(4-16)'
      }
      // else if(!nameRegex.test(this.name)){
      //   this.nameError = '用户名只能包含大小写字母,数字,下划线和连字符'
      // }
      else{
        this.nameError=null
      }
    },
    checkRealName(){
      if(this.realname===''){
        this.realnameError='您还未填写真实姓名'
        return
      }
      const realnameRegex = /^[\u4e00-\u9fa5]{2,16}$/;
      if(this.realname.length<2||this.realname.length>16){
        this.realnameError='姓名长度不符合要求(2-16)'
      }
      else if(!realnameRegex.test(this.realname)){
        this.realnameError='姓名只能包含中文'
      }
      else {
        this.realnameError=null
      }
    },
    checkIdnumber(){
      if(this.idnumber===''){
        this.idnumberError='您还未填写身份证号码'
        return
      }
      const idCardRegex = /^\d{17}[\dXx]$/;
      if (!idCardRegex.test(this.idnumber)) {
        this.idnumberError='身份证号码不符合要求'
      }
      else {
        this.idnumberError=null
      }
    },
    checkTel(){
      if(this.tel===''){
        this.telError='您还未填写手机号码'
        return
      }
      const phoneNumberRegex = /^[1][3-9][0-9]{9}$/;
      if (!phoneNumberRegex.test(this.tel)) {
        this.telError='手机号码不符合要求'
      }
      else {
        this.telError=null
      }
    },
    checkMail(){
      if(this.mail===''){
        this.mailError=null
        return
      }
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.mail)) {
        this.mailError='邮箱格式不符合要求'
      }
      else {
        this.mailError=null
      }
    },
    checkPw1(){
      if(this.password1===''){
        this.pw1Error='您还未填写密码'
        return
      }
      const pwRegex = /^[\x21-\x7e]*$/
      const complexRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/

      if(this.password1.length<8&&this.password1.length>56){
        this.pw1Error='密码长度不符合要求(8-56)'
      }
      else if(!pwRegex.test(this.password1)){
        this.pw1Error='密码只能包含字母,数字和符号'
      }
      else if(!complexRegex.test(this.password1)){
        this.pw1Error='密码未达到复杂性要求:密码必须包含大小写字母和数字'
      }
      else{
        this.pw1Error=null
      }

      // this.checkPw2()
    },
    checkPw2(){
      if(this.password2===''){
        this.pw2Error='您还未确认密码'
        return
      }
      if(this.password1!==this.password2){
        this.pw2Error="两次密码不相同"
      }
      else{
        this.pw2Error=null
      }
    },
    handlefinish:function()
    {
      this.checkName()
      this.checkRealName()
      this.checkIdnumber()
      this.checkTel()
      this.checkMail()
      this.checkPw1()
      this.checkPw2()

      if(this.nameError||this.realnameError||this.idnumberError
          ||this.telError||this.pw1Error||this.pw2Error){
        return
      }

      //提交post
      const usrReq = request({
        url: '/register',
        method: 'POST',
        data: {
          userName: this.name,
          password: this.password1,
          realName: this.realname,
          idCard: this.idnumber,
          phoneNumber: this.tel,
          email: this.mail,
        }
      })

      usrReq.then(response => {
        if(response.data) {
          ElMessage({
            message: '注册成功',
            type: 'success',
            center: true  // 设置消息居中显示
          });
          console.log(response)
          this.$router.replace('/login');
        }
        else {
          ElMessage({
            message: '用户名已存在',
            type: 'warning',
            center: true  // 设置消息居中显示
          }); // 显示错误提示
        }
      }).catch(error=> {
        console.error(error); // 输出后端返回的错误信息
      })

      // if(localStorage['name']===this.name)
      // {
      //   alert("用户名已存在");//如果用户名已存在则无法注册
      // }
      // else if(this.name==='')
      // {
      //   alert("用户名不能为空");
      // }
      // if(this.password!==this.password2){
      //   alert("两次密码不相同");
      // }
      // else{//将新用户信息存储到localStorage
      //   localStorage.setItem('realname',this.realname);
      //   localStorage.setItem('idnumber',this.idnumber);
      //   localStorage.setItem('name',this.name);
      //   localStorage.setItem('password',this.password);
      //   localStorage.setItem('mail',this.mail);
      //   localStorage.setItem('tel',this.tel);
      //   localStorage.setItem('s',"false");
      //   alert("注册成功");
      //   this.$router.replace('/login');//完成注册后跳转至登录页面
      // }
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

.form-label{
  display: inline-block;
  width: 80px; /* 调整 label 宽度，根据需要调整 */
  text-align: right;
  margin-right: 10px;
}

input {
  width: 180px; /* 调整输入框宽度，根据需要调整 */
  padding: 5px; /* 调整输入框内边距，根据需要调整 */
  margin-bottom: 10px; /* 调整输入框下方的间距，根据需要调整 */
}

.position-relative i.fa {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.error-message{
  text-align: left;
  margin-left: 110px;
  color: red;
}

</style>