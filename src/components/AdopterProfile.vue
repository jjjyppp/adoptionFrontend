<template>
  <div>
    <div class="title">
      <p>简介完成度: 1%</p>
    </div>
    <div style="float:left;">
      <img src="../views/assets/img/进度条.png">
      <div class="tip" >您的个人资料必须完整，才能向组织提交查询</div>
      <el-button class="button"
                 color="#6503b5"
                 size="primary"
                 round>引导我</el-button>
    </div>
    <div class="title1">
      <p>关于我</p>
    </div>
    <div class="tip1">请向我们介绍您的生活方式和目前的住所</div>
    <el-form :inline="true"
             :model="formInline"
             :label-position="labelPosition"
             class="demo-form-inline">
      <el-form-item >
        <el-select v-model="formInline.pet"
                   placeholder="想要的宠物"
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