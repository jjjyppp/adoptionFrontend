<template>
  <div class="contentall">
    <div class="title">
      <span>您已为新宠物设置了 0 个保存搜索。保存搜索会使您可以第一时间查看任何新添加的宠物</span>
      <div class="box">
      <span>要进行设置，请使用搜索结果上方的 "保存搜索 "按钮。</span>
      </div>
    </div>
    <div class="fav" style="display: flex">
        <img src="../views/assets/img/箭头.png" alt="" style="height: 20px;margin-top:15px;">
      <a href="#" class="mine" style="margin-top:12px;margin-left:15px;" >All(0)</a>
    </div>
  </div>
</template>

<script>
import { ElForm, ElOption, ElSelect, ElFormItem, ElInput, ElButton } from 'element-plus';

export default {
  components: { ElForm, ElFormItem, ElOption, ElSelect, ElInput, ElButton },
  data() {
    return {
    
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
  width: 80%;
  font-size: 16px;
  text-align: left;
}
.title p {
  padding-top: 20px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 0px;
}
.title span {
  margin-top: 15px;
  text-align: left;
  font-weight: 400;
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
  margin-top: 20px;
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
}
</style>