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
    <p style="font-size: 17px;text-align: left">A：</p>
    <p style="font-size: 17px;text-align: left">欢迎来到PetPat！</p>
    <p style="font-size: 17px;text-align: left">以下是领养的具体流程，让您更好地了解如何在这里寻找并领养您心仪的小伙伴。</p>
    <p style="font-size: 17px;text-align: left">1. 浏览宠物库： 首先，您可以浏览我们丰富的宠物库，通过筛选条件找到符合您要求的宠物。每只宠物都有详细的信息和照片，帮助您更全面地了解它们。</p>
    <p style="font-size: 17px;text-align: left">2. 点击“我要收养”： 当您发现一只喜欢的宠物时，只需点击“我要领养”按钮，系统将引导您进入领养申请流程。</p>
    <p style="font-size: 17px;text-align: left">3. 私聊卖家： 领养申请提交后，系统将自动通知卖家。您可以在站内信中与卖家进行私聊，讨论更多关于宠物的信息，包括性格、饲养习惯等。</p>
    <p style="font-size: 17px;text-align: left">4. 确认领养： 在与卖家充分沟通并确认一切无误后，您可以选择确认领养。这将触发支付流程，您可以选择合适的支付方式完成领养费用的支付（如有）。</p>
    <p style="font-size: 17px;text-align: left">5. 线下交易： 领养费用支付成功（如有）后，您和卖家将协商线下交易事宜，包括具体的交接地点和时间。请确保在公共场所进行交易，确保双方的安全。</p>
    <p style="font-size: 17px;text-align: left">6. 领养成功： 宠物正式交接后，恭喜您完成领养过程！我们希望您和新伙伴能够在未来的日子里共同创造美好回忆。</p>
    <p style="font-size: 17px;text-align: left">如果有任何疑问，随时与我们的客服团队联系。祝您在我们的网站上找到一个温馨的家庭成员！</p>

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
