<template>
  <div>
    <el-form :inline="true"
             :model="formInline"
             :label-position="labelPosition"
             class="demo-form-inline">
      <!-- 第一部分 -->
      <div class="title">
        <p>您的姓名</p>
      </div>
      <el-form-item label="您的姓名">
        <el-input v-model="formInline.name"
                  placeholder="姓名"
                  clearable />
      </el-form-item>

      <!-- 第二部分 -->
      <div class="title">
        <p>您的联系方式</p>
      </div>
      <el-form-item>
        <el-input v-model="formInline.phoneNumber"
                  placeholder="Phone number"
                  clearable />
      </el-form-item>
      <!-- 第三部分 -->
      <div class="title">
        <p>您的家庭住址</p>
      </div>
      <el-form-item label="Country (required)">
        <el-select v-model="formInline.country"
                   placeholder="国家(必选)"
                   clearable>
          <el-option v-for="item in select_range"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Street address">
        <el-input v-model="formInline.address"
                  placeholder="街道地址"
                  clearable />
      </el-form-item>
      <!-- <el-form-item label="Street address (continued)">
        <el-input v-model="formInline.address2"
                  placeholder="Street address (continued)"
                  clearable />
      </el-form-item> -->
      <el-form-item label="City / Town">
        <el-input v-model="formInline.Town"
                  placeholder="所在城市/城镇"
                  clearable />
      </el-form-item>
      <el-form-item label="State"
                    style="width:'45%;'">
        <el-select v-model="formInline.State"
                   placeholder="选择一个省份"
                   clearable>
          <el-option v-for="item in select_range2"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="ZIP code">
        <el-input v-model="formInline.code"
                  placeholder="邮政编码"
                  clearable />
      </el-form-item>
    </el-form>
    <!-- 提交按钮 -->
    <div class="title">
      <p>YOUR CURRENT PETS</p>
    </div>
    <el-button class="button"
               color="#6503b5"
               size="large"
               round>add a pet</el-button>
    <!-- 提示 -->
    <div class="tip">you may search our database of thousands of pets looking for forever homes</div>
  </div>
</template>

<script>
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
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
      labelPosition: 'top',
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
.title p {
  padding-top: 0px;
  font-weight: 700;
  width: 70%;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
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
}
.tip {
  font-size: 14px;
  width: 100%;
  height: 5%;
  padding-top: 60px;
  padding-bottom: 15px;
}
</style>