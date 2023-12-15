<template>
  <body>
  <div class="tab-container">

    <div class="title1">
      <p>用户名</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black">{{susername}}</span>
<!--        <span style="color: #6504b5;font-weight: 700;">Change</span>-->
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>
      </div>
    </div>
    <div class="title1">
      <p>真实姓名</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black">{{srealname}}</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
    <div class="title1">
      <p>身份证号</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black">{{sidcard}}</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
    <div class="title1">
      <p>密码</p>
      <div class="box1">
<!--        <span style="display:block;margin-left:20px;color: black">{{spassword}}</span>-->
        <span style="display:block;margin-left:20px;color: black">********</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
    <div class="title1">
      <p>手机号码</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black">{{stel}}</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
    <div class="title1">
      <p>邮箱</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black">{{semail}}</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
    <div class="title1">
      <p>家庭住址</p>
      <div class="box1">
        <span style="display:block;margin-left:20px;color: black;margin-bottom: 60px">{{saddress}}</span>
        <svg t="1702657847340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="20" height="20" color="#6504b5"><path d="M846 792H142c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h704c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8zM194.7 726.4l157.4-41.5c4.1-1.1 7.8-3.2 10.8-6.2l357.5-357.5c9.4-9.4 9.4-24.6 0-33.9L614.3 181c-9.4-9.4-24.6-9.4-33.9 0L222.9 538.5c-3 3-5.2 6.7-6.2 10.8l-41.5 157.4c-3.2 12 7.6 22.8 19.5 19.7z m62.5-91.8l16.6-63.2c0.7-2.7 2.2-5.3 4.2-7.3l312.3-312.4c3.1-3.1 8.2-3.1 11.3 0l48.1 48.1c3.1 3.1 3.1 8.2 0 11.3L337.3 623.5c-2 2-4.5 3.4-7.2 4.2L267 644.4c-5.9 1.5-11.3-3.9-9.8-9.8z" fill="#6504b5" p-id="3354"></path></svg>

      </div>
    </div>
<!--    <el-form :inline="true"-->
<!--             :model="formInline"-->
<!--             :label-position="labelPosition"-->
<!--             class="demo-form-inline">-->

<!--      &lt;!&ndash; 第三部分 &ndash;&gt;-->
<!--      <div class="title1">-->
<!--        <p>您的家庭住址</p>-->
<!--      </div>-->
<!--      <el-form-item label="Country (required)">-->
<!--        <el-select v-model="formInline.country"-->
<!--                   placeholder="国家(必选)"-->
<!--                   clearable>-->
<!--          <el-option v-for="item in select_range"-->
<!--                     :key="item.value"-->
<!--                     :label="item.label"-->
<!--                     :value="item.value"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="Street address">-->
<!--        <el-input v-model="formInline.address"-->
<!--                  placeholder="街道地址"-->
<!--                  clearable />-->
<!--      </el-form-item>-->
      <!-- <el-form-item label="Street address (continued)">
        <el-input v-model="formInline.address2"
                  placeholder="Street address (continued)"
                  clearable />
      </el-form-item> -->
<!--      <el-form-item label="City / Town">-->
<!--        <el-input v-model="formInline.Town"-->
<!--                  placeholder="所在城市/城镇"-->
<!--                  clearable />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="State"-->
<!--                    style="width:45%;">-->
<!--        <el-select v-model="formInline.State"-->
<!--                   placeholder="选择一个省份"-->
<!--                   clearable>-->
<!--          <el-option v-for="item in select_range2"-->
<!--                     :key="item.value"-->
<!--                     :label="item.label"-->
<!--                     :value="item.value"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="ZIP code">-->
<!--        <el-input v-model="formInline.code"-->
<!--                  placeholder="邮政编码"-->
<!--                  clearable />-->
<!--      </el-form-item>-->
<!--    </el-form>-->

  </div>
  </body>
</template>

<script>
name:'Temp';
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton, ElIcon} from 'element-plus';
export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton, ElIcon },
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

.tab-container {
  width: 80%;
  margin-top: 60px;
  margin-left: 24px;
  padding: 36px;
  border-radius: 16px;
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
}



.title1 {
  margin-left: 15%;
  width: 100%;
  font-size: 20px;
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

</style>