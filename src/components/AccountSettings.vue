<template>
  <div class="contentall">
    <div class="title">
      <p>Email</p>
      <div class="box">
      <span style="display:block;margin-left:20px;">{{smail}}</span>
      <span style="color: #6504b5;font-weight: 700;">Change</span>
      </div>
    </div>
    <el-form :model="formInline"
             :label-position="labelPosition"
             class="demo-form-inline">
      <!-- 第一部分 -->
      <div class="title" style="margin-top: 30px;">
        <p>CHANGE PASSWORD</p>
      </div>
      <el-form-item >
        <el-input v-model="formInline.password"
                  placeholder="New password"
                  clearable />
      </el-form-item>
      <el-form-item >
        <el-input v-model="formInline.password2"
                  placeholder="Confirm password"
                  clearable />
      </el-form-item>
    </el-form>
      <el-button class="button"
               color="#6503b5"
               size="large"
               round>UPDATE PASSWORD</el-button>
  </div>
</template>

<script>
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
      formInline: {
        password: '',
        password2: '',
      },
      labelPosition: 'top',
      smail:localStorage.getItem('mail')
    };
  },
  methods: {
  }
}

</script>

<style scoped>
.contentall{
  padding: 20px;
}
.title {
  width: 100%;
  font-size: 16px;
  text-align: left;
}
.title p {
  padding-top: 0px;
  font-weight: 700;
  width: 100%;
  text-align: left;
  margin-left: 20px;
  font-size: 14px;
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
  margin-bottom: 20px;
}
.tip {
  font-size: 14px;
  width: 100%;
  height: 5%;
  padding-top: 60px;
  padding-bottom: 15px;
}
.box{
  display: flex;
  text-align: center;
  justify-content: space-between;
  width:50%;
  
}
</style>