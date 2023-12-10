<template>
  <div>
    <div class="title">
      <p>真实姓名</p>
      <div class="box">
        <span style="display:block;margin-left:20px;">{{srealname}}</span>
        <span style="color: #6504b5;font-weight: 700;">Change</span>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="title">
      <p>手机号码</p>
      <div class="box">
        <span style="display:block;margin-left:20px;">{{stel}}</span>
        <span style="color: #6504b5;font-weight: 700;">Change</span>
      </div>
    </div>
    <el-form :inline="true"
             :model="formInline"
             :label-position="labelPosition"
             class="demo-form-inline">

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
      <p>您现有的宠物</p>
    </div>
    <el-button class="button"
               color="#6503b5"
               size="large"
               round>添加一个宠物</el-button>
    <!-- 提示 -->
    <div class="tip">您可以在我们的数据库中搜索成千上万只正在寻找永久家园的宠物</div>
  </div>
</template>

<script>
name:'Temp';
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';
export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
      srealname:localStorage.getItem('realname'),
      stel:localStorage.getItem('tel'),
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
.box{
  display: flex;
  text-align: center;
  justify-content: space-between;
  width:50%;

}
</style>