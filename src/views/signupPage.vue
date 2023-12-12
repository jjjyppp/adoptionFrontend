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
                <label for="name">用户名</label>
                <input type="text" id="name" placeholder="请输入用户名" v-model.trim="name"><br>

                <label for="realname">真实姓名</label>
                <input type="text" id="realname" placeholder="请输入真实姓名" v-model.trim="realname"><br>

                <label for="idnumber">身份证号</label>
                <input type="text" id="idnumber" placeholder="请输入身份证号" v-model.trim="idnumber"><br>

                <label for="tel">手机号</label>
                <input type="tel" id="tel" placeholder="请输入手机号" v-model.trim="tel"><br>

                <label for="mail">邮箱</label>
                <input type="email" id="mail" placeholder="请输入邮箱" v-model.trim="mail"><br>
                <div class="position-relative d-inline">
                  <label for="pwd">设置密码</label>
                  <input type="password" placeholder="设置密码" id="pwd" v-model.trim="password"><br>
                  <i class="fa fa-lock fa-lg"></i>
                  <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                  <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                </div>
                 <span class="position-relative d-inline">
                   <label for="pwd">确认密码</label>
                  <input type="password" placeholder="再次输入您的密码" id="password" v-model.trim="password2"><br>
                  <span class="position-absolute top-0 end-0 mx-2 " id="password-icon">
                    <i class="fa fa-lock fa-lg"></i>
                    <i class="fa fa-eye-slash fa-lg" v-if="!psw" aria-hidden="true"></i>
                    <i class="fa fa-eye fa-lg" aria-hidden="true" @click="psw=!psw"></i>
                    </span></span>
                <button class="py-2 px-5 fs-5 my-2" @click.prevent="handlefinish">注册</button>
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
import {request} from "@/utils/request";
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
      //两次密码校验
      if(this.password!==this.password2){
           alert("两次密码不相同");
      }
      // 邮箱格式验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.mail)) {
        alert("请输入有效的邮箱地址");
        return;
      }

      // 身份证格式验证
      const idCardRegex = /^\d{17}[\dXx]$/;
      if (!idCardRegex.test(this.idnumber)) {
        alert("请输入有效的身份证号码");
        return;
      }

      // 手机号格式验证
      const phoneNumberRegex = /^[1][3-9][0-9]{9}$/;
      if (!phoneNumberRegex.test(this.tel)) {
        alert("请输入有效的手机号码");
        return;
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
          address: ["Jiangsu","Nanjing"]
        }
      })

      usrReq.then(response => {
        alert("注册成功");
        console.log(response)
        this.$router.replace('/login');
      }).catch(error=> {
        console.error(error.response.data); // 输出后端返回的错误信息
        alert("注册失败：" + error.response.data.message); // 显示错误提示
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
label {
  display: inline-block;
  width: 70px; /* 调整 label 宽度，根据需要调整 */
  text-align: right;
  margin-right: 10px; /* 可以根据需要调整右侧的间距 */
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

</style>