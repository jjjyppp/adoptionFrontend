<template>
  <div>
    <div class="title">
      <p>Profile completion: 1%</p>
    </div>
    <div style="float:left;">
      <img src="../views/assets/img/进度条.png">
      <div class="tip" >Your profile must be complete to submit inquiries to organizations</div>
      <el-button class="button"
                 color="#6503b5"
                 size="primary"
                 round>GUIDE ME</el-button>
    </div>
    <div class="title1">
      <p>ABOUT ME</p>
    </div>
    <div class="tip1">Tell us about your lifestyle and current home</div>
    <el-form :inline="true"
             :model="formInline"
             :label-position="labelPosition"
             class="demo-form-inline">
      <el-form-item >
        <el-select v-model="formInline.pet"
                   placeholder="Desired pet"
                   clearable>
          <el-option v-for="item in select_range"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
      formInline: {
        pet:'',
      },
      labelPosition: 'top',
      select_range: [
        { value: 'all', label: '全国' },
        { value: 'district', label: '仅限同城' },
        { value: 'city', label: '仅限同市' },
        { value: 'province', label: '仅限同省' },
      ],
    };
  },
  methods: {
  }
}

</script>

<style scoped>
.title {
  width: 100%;
  font-size: 16px;
}
.title1{
  width: 100%;
  font-size: 16px;
  margin-top: 200px;
  text-align: left;
  margin-left: 20px;

}
.title p {
  padding-top: 0px;
  font-weight: 700;
  width: 100%;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 14px;
}
.formcontent {
}
.el-form-item {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 43%;
  margin-left: 20px;
}
.tip {
  margin-top: 15px;
  text-align: left;
  margin-left: 15px;
}
.tip1 {
  text-align: left;
  margin-left: 20px;
  margin-top: -10px;
}
.button {
  float: left;
  margin-left: 15px;
  margin-bottom: 50px;
  margin-top: 15px;
}
</style>