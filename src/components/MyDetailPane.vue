<template>
  <body>
  <div class="my-container">
    <p style="font-size: 30px; font-weight: 600; color: #4d4751; text-align: left">个人信息</p>

    <div class="title1" style="margin-top:40px; margin-left: 60px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">用户名</label>
      <el-input @input="checkName" :disabled="!canChangeUsername" size="large" v-model="susername" style="width: 400px; margin-left: 10px; border: none"></el-input>
      <svg v-show="!canChangeUsername" @click="changeUsername" t="1702657847340" class="icon" style="margin-left: 10px; cursor: pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" ><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" p-id="3354"></path></svg>
      <svg v-show="canChangeUsername" @click="saveUsername" style="margin-left: 10px; cursor: pointer" t="1703427727437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="20" height="20"><path d="M182.272 485.376l197.632 147.456 484.352-422.912s29.696-29.696 59.392-6.144c6.144 6.144 17.408 23.552-6.144 53.248L410.624 816.128s-41.984 53.248-83.968 0l-215.04-271.36s-23.552-34.816 6.144-58.368c11.264-12.288 34.816-24.576 64.512-1.024z" fill="#2c2c2c" p-id="5083"></path></svg>
    </div>
    <div v-if="nameError" class="error-message">
      {{ nameError }}
    </div>


    <div class="title1" style="margin-left: 40px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">真实姓名</label>
      <el-input disabled size="large" v-model="srealname" style="width: 400px; margin-left: 10px; border: none"></el-input>
    </div>
    <div class="title1" style="margin-left: 40px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">身份证号</label>
      <el-input disabled size="large" v-model="sidcard" style="width: 400px; margin-left: 10px; border: none"></el-input>
    </div>

    <div class="title1" style="margin-left: 80px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">密码</label>
      <el-input @input="checkPw1" size="large" :disabled="!canChangePassword" v-model="spassword" type="password" style="width: 400px; margin-left: 10px; border: none"></el-input>
      <svg v-show="!canChangePassword" @click="changePassword" t="1702657847340" class="icon" style="margin-left: 10px; cursor: pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" ><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" p-id="3354"></path></svg>
      <svg v-show="canChangePassword" @click="savePassword" style="margin-left: 10px; cursor: pointer" t="1703427727437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="20" height="20"><path d="M182.272 485.376l197.632 147.456 484.352-422.912s29.696-29.696 59.392-6.144c6.144 6.144 17.408 23.552-6.144 53.248L410.624 816.128s-41.984 53.248-83.968 0l-215.04-271.36s-23.552-34.816 6.144-58.368c11.264-12.288 34.816-24.576 64.512-1.024z" fill="#2c2c2c" p-id="5083"></path></svg>
    </div>
    <div v-if="pw1Error" class="error-message">
      {{ pw1Error }}
    </div>

    <div class="title1" v-show="canChangePassword" style="margin-left: 40px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">确认密码</label>
      <el-input @input="checkPw2" size="large" v-model="svpassword" type="password" style="width: 400px; margin-left: 10px; border: none"></el-input>
    </div>
    <div v-if="pw2Error" class="error-message">
      {{ pw2Error }}
    </div>

    <div class="title1" style="margin-left: 40px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">手机号码</label>
      <el-input @input="checkTel" size="large" :disabled="!canChangeTel" v-model="stel" style="width: 400px; margin-left: 10px; border: none"></el-input>
      <svg v-show="!canChangeTel" @click="changeTel" t="1702657847340" class="icon" style="margin-left: 10px; cursor: pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" ><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" p-id="3354"></path></svg>
      <svg v-show="canChangeTel" @click="saveTel" style="margin-left: 10px; cursor: pointer" t="1703427727437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="20" height="20"><path d="M182.272 485.376l197.632 147.456 484.352-422.912s29.696-29.696 59.392-6.144c6.144 6.144 17.408 23.552-6.144 53.248L410.624 816.128s-41.984 53.248-83.968 0l-215.04-271.36s-23.552-34.816 6.144-58.368c11.264-12.288 34.816-24.576 64.512-1.024z" fill="#2c2c2c" p-id="5083"></path></svg>
    </div>
    <div v-if="telError" class="error-message">
      {{ telError }}
    </div>

    <div class="title1" style="margin-left: 80px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">邮箱</label>
      <el-input @input="checkMail" placeholder="您暂未填写邮箱" size="large" :disabled="!canChangeEmail" v-model="semail" style="width: 400px; margin-left: 10px; border: none"></el-input>
      <svg v-show="!canChangeEmail" @click="changeEmail" t="1702657847340" class="icon" style="margin-left: 10px; cursor: pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" ><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" p-id="3354"></path></svg>
      <svg v-show="canChangeEmail" @click="saveEmail" style="margin-left: 10px; cursor: pointer" t="1703427727437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="20" height="20"><path d="M182.272 485.376l197.632 147.456 484.352-422.912s29.696-29.696 59.392-6.144c6.144 6.144 17.408 23.552-6.144 53.248L410.624 816.128s-41.984 53.248-83.968 0l-215.04-271.36s-23.552-34.816 6.144-58.368c11.264-12.288 34.816-24.576 64.512-1.024z" fill="#2c2c2c" p-id="5083"></path></svg>
    </div>
    <div v-if="mailError" class="error-message">
      {{ mailError }}
    </div>

    <div class="title1" style="margin-left: 80px; display: flex; justify-content: flex-start; align-items: center;">
      <label class="name-label">地址</label>
      <el-input size="large" placeholder="您暂未填写地址" :disabled="!canChangeAddress" v-model="saddress" style="width: 400px; margin-left: 10px; border: none"></el-input>
      <svg v-show="!canChangeAddress" @click="changeAddress" t="1702657847340" class="icon" style="margin-left: 10px; cursor: pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" ><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" p-id="3354"></path></svg>
      <svg v-show="canChangeAddress" @click="saveAddress" style="margin-left: 10px; cursor: pointer" t="1703427727437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="20" height="20"><path d="M182.272 485.376l197.632 147.456 484.352-422.912s29.696-29.696 59.392-6.144c6.144 6.144 17.408 23.552-6.144 53.248L410.624 816.128s-41.984 53.248-83.968 0l-215.04-271.36s-23.552-34.816 6.144-58.368c11.264-12.288 34.816-24.576 64.512-1.024z" fill="#2c2c2c" p-id="5083"></path></svg>    </div>
    </div>
  </body>
</template>

<script>
import {Paperclip} from "@element-plus/icons-vue";

import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton, ElIcon} from 'element-plus';
export default {
  components: {Paperclip, ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton, ElIcon },
  data() {
    // 从localStorage中获取userVO字符串, 将userVO字符串解析为JavaScript对象
    const userVO = JSON.parse(localStorage.getItem("userVO"));
    return {
      susername:userVO.userName,
      srealname:userVO.realName,
      sidcard:userVO.idCard,
      spassword:userVO.password,
      semail:userVO.email,
      stel:userVO.phoneNumber,
      saddress: userVO.address,
      username:userVO.userName,
      realname:userVO.realName,
      idcard:userVO.idCard,
      password:userVO.password,
      email:userVO.email,
      tel:userVO.phoneNumber,
      address: userVO.address,
      svpassword:'',
      formInline: {
        name: '',
        phoneNumber: '',
        country: '',
        address: '',
        address2: '',
        Town: '',
        State: '',
        code: '',
      },
      select_range: [
        { value: 'all', label: '全国' },
        { value: 'district', label: '仅限同城' },
        { value: 'city', label: '仅限同市' },
        { value: 'province', label: '仅限同省' },
      ],
      select_range2: [
        { value: 'all', label: '全国' },
        { value: 'district', label: '仅限同城' },
        { value: 'city', label: '仅限同市' },
        { value: 'province', label: '仅限同省' },
      ],
      nameError: null,
      realnameError: null,
      idnumberError: null,
      telError: null,
      mailError: null,
      pw1Error: null,
      pw2Error: null,
      labelPosition: 'top',
      canChangeUsername: false,
      canChangeName: false,
      canChangePassword: false,
      canChangeTel: false,
      canChangeEmail: false,
      canChangeAddress: false
    };
  },
  methods: {
    checkName(){
      if(this.susername===''){
        this.nameError=null
        return
      }
      console.log(this.susername)
      const nameRegex = /^[a-zA-Z\d-_]*$/
      if(this.susername.length<4||this.susername.length>16){
        this.nameError = '用户名长度不符合要求(4-16)'
      }
      else if(!nameRegex.test(this.susername)){
        this.nameError = '用户名只能包含大小写字母,数字,下划线和连字符'
      }
      else{
        this.nameError=null
      }
    },
    checkTel(){
      if(this.stel===''){
        this.telError=null
        return
      }
      const phoneNumberRegex = /^[1][3-9][0-9]{9}$/;
      if (!phoneNumberRegex.test(this.stel)) {
        this.telError='手机号码不符合要求'
      }
      else {
        this.telError=null
      }
    },
    checkMail(){
      if(this.semail===''){
        this.mailError=null
        return
      }
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.semail)) {
        this.mailError='邮箱格式不符合要求'
      }
      else {
        this.mailError=null
      }
    },
    checkPw1(){
      const pwRegex = /^[\x21-\x7e]*$/
      const complexRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/

      if(this.spassword===''){
        this.pw1Error=null
        return
      }

      if(this.spassword.length<8&&this.spassword.length>56){
        this.pw1Error='密码长度不符合要求(8-56)'
      }
      else if(!pwRegex.test(this.spassword)){
        this.pw1Error='密码只能包含字母,数字和符号'
      }
      else if(!complexRegex.test(this.spassword)){
        this.pw1Error='密码未达到复杂性要求:密码必须包含大小写字母和数字'
      }
      else{
        this.pw1Error=null
      }

      // this.checkPw2()
    },
    checkPw2(){
      if(this.svpassword===''){
        this.pw2Error=null
        return
      }

      if(this.spassword!==this.svpassword){
        this.pw2Error="两次密码不相同"
      }
      else{
        this.pw2Error=null
      }
    },
    changeUsername(){
      this.canChangeUsername=true
    },
    changePassword(){
      this.canChangePassword=true
      this.spassword=''
    },
    changeTel(){
      this.canChangeTel=true
    },
    changeEmail(){
      this.canChangeEmail=true
    },
    changeAddress(){
      this.canChangeAddress=true
    },
    saveUsername(){
      if(this.susername===''){
        this.susername=this.username
        this.canChangeUsername=false
      }
      else if(this.nameError===null){
        this.canChangeUsername=false
      }
    },
    savePassword(){
      if(this.spassword===''&&this.svpassword===''){
        this.spassword=this.password
        this.canChangePassword=false
      }
      else {
        if(this.spassword!==this.svpassword){
          this.pw2Error="两次密码不相同"
        }
        else if(this.pw1Error===null&&this.pw2Error===null){
          this.canChangePassword=false
          this.svpassword=''
        }
      }
    },
    saveTel(){
      if(this.stel===''){
        this.stel=this.tel
        this.canChangeTel=false
      }
      else if(this.telError===null){
        this.canChangeTel=false
      }

    },
    saveEmail(){
      if(this.semail===''){
        this.semail=this.email
        this.canChangeEmail=false
      }
      else if(this.mailError===null){
        this.canChangeEmail=false
      }
    },
    saveAddress(){
      if(this.saddress===''){
        this.saddress=this.address
      }
      this.canChangeAddress=false
    },

  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background: #f0f0f3;
  color: #808b9f;
}

.icon:hover path{
  fill: #6504B5;
}

.name-label{
  font-weight: 700;
}

.my-container {
  min-height: 800px;
  width: 90%;
  margin-top: 60px;
  margin-left: 24px;
  padding: 36px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: -10px -10px 50px #ffffff, 10px 10px 50px rgba(174, 174, 192, 0.4);
}

.title1 {
  //margin-left: 5%;
  //justify-content: left;
  text-align: left;
  width: 100%;
  font-size: 20px;
  margin-top: 40px;
}

.title1 p {
  margin-left: 16px;
  padding-top: 8px;
  padding-bottom: 5px;
  font-weight: 700;
  width: 70%;
  text-align: left;
  margin-top: 20px;
  font-size: 15px;
}
.formcontent {
}
.el-form-item {
  width: 43%;
  margin-left: 20px;
}
.button {
  width: 45%;
  float: left;
  margin-left: 10px;
  margin-right: 54%;
}
.tip {
  font-size: 14px;
  width: 100%;
  height: 5%;
  padding-top: 60px;
  padding-bottom: 15px;
}
.box1{
  display: flex;
  text-align: center;
  justify-content: space-between;
  width:50%;
}

.error-message{
  text-align: left;
  margin-left: 130px;
  color: red;
}

</style>