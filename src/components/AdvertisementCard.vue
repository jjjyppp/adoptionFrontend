<template>
  <el-Card class="advertise" shadow="hover" style = "border-radius: 0px">
    <div class="advertise-body">
      <br>
      <p style="color: white">广告位招租</p>
      <el-button class="sponsor" round>支持我们</el-button><br>
    </div>
  </el-Card>
</template>


<script>
import {ElCard, ElButton} from "element-plus";
export default {
  components: {ElCard, ElButton}
}

</script>

<style>
.advertise {
  width: 90%;
  background: red;
  height: 200px;

}
.sponsor {
  margin-top: 55px;
  color: #2e0152;
}
.sponsor:hover {
  background-color: #2e0152;
  color: white;
}
</style>