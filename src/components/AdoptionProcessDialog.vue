<template>
  <el-dialog
      :visible="dialogVisible"
      @update:visible="updateDialogVisible"
      title="领养流程说明"
      width="40%"
      @close="handleClose"
      :center="true"
      style="border-radius: 10px"
  >
    <!-- 内容放在这里 -->
    <p>这里是领养流程的说明...</p>
  </el-dialog>
</template>

<script>
import { ElDialog } from "element-plus";
export default {
  components: { ElDialog },
  props: {
    dialogVisible: Boolean, // value prop 用于 v-model
  },
  methods: {
    updateDialogVisible(newValue) {
      this.$emit('update:dialogVisible', newValue); // 发出 update:dialogVisible 事件
    },
    handleClose() {
      this.$emit('close'); // 发出 close 事件
    },
  },
}
</script>

<style scoped>
</style>
