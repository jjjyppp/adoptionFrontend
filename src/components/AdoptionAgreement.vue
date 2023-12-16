<!-- AdoptionAgreement.vue -->
<template>
  <div class="adoption-agreement">
    <h2 class="title">宠物领养协议</h2>

    <div>
      <h3>领养人信息</h3>
      <el-form :model="adopterInfo" label-position="left" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="adopterInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="adopterInfo.idnumber"></el-input>
        </el-form-item>
        <el-form-item label="住址">
          <el-input v-model="adopterInfo.address"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="adopterInfo.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
          <el-input v-model="adopterInfo.email"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <h3>宠物信息</h3>
      <el-form :model="petInfo" label-position="left" label-width="100px">
        <el-form-item label="宠物名字">
          <el-input v-model="petInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="种类/品种">
          <el-input v-model="petInfo.breed"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="petInfo.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="petInfo.gender"></el-input>
        </el-form-item>
        <el-form-item label="健康状况">
          <el-input v-model="petInfo.health"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 领养条件 -->
    <div class="condition-section">
      <h3>领养条件</h3>
      <ul style="text-align: left">
        <li v-for="condition in adoptionConditions" :key="condition" >
          <el-text v-model="adopterAgreement[condition]">{{ condition }}</el-text>
        </li>
      </ul>
    </div>

    <!-- 费用 -->
    <el-form :model="fees" label-position="left" label-width="150px" class="form-section">
      <el-form-item label="领养费用（如果有）">
        <div class="fee-underline-input">
          <input id="inputField" v-model="fees.adoptionFee" class="underlined" />
        </div>
      </el-form-item>
      <el-form-item label="其他费用（如果有）">
        <div class="fee-underline-input">
          <input id="inputField" v-model="fees.otherFees" class="underlined" />
        </div>
      </el-form-item>
    </el-form>

    <!-- 终止协议 -->
    <div class="termination-section">
      <h3>终止协议</h3>
      <div style="text-align: left">
        <el-text >如果领养人发现自己无法遵守协议的任何一项条件，同意立即通知原领养组织或个人，并与领养组织或个人协商解决</el-text>
      </div>
    </div>

    <!-- 协议有效期 -->
    <el-form :model="validity" label-position="left" label-width="150px" class="form-section">
      <el-form-item label="协议有效期">
        <div class="underline-input">
          <input id="inputField" v-model="validity.duration" class="underlined" />
        </div>
      </el-form-item>
    </el-form>

    <!-- 签署 -->
<!--    <div class="signature-section">-->
<!--      <h3>签署</h3>-->
<!--      <el-form :model="signatures" label-position="left" label-width="150px" class="form-section">-->
<!--        <el-form-item label="领养人签名">-->
<!--          <el-input v-model="signatures.adopter" disabled></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="领养组织代表签名">-->
<!--          <el-input v-model="signatures.organization" disabled></el-input>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <el-button type="primary" @click="submitAgreement" class="submit-button" >提交</el-button>-->
<!--    </div>-->


    <div class="signature-section">
<!--      <h3>签署</h3>-->
      <el-form :model="signatures" label-position="left" label-width="150px" class="form-section">
        <div class="flex-container">
          <el-form-item label="领养人签名" style="margin-right: 20px">
            <div class="underline-input">
              <input id="inputField" v-model="signatures.adopter" class="underlined" />
            </div>
          </el-form-item>
          <el-form-item label="送养人签名">
            <div class="underline-input">
              <input id="inputField" v-model="signatures.organization" class="underlined" />
            </div>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <el-button type="primary" @click="submitAgreement" class="submit-button" >提交</el-button>

  </div>

</template>

<script>

import {ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElSwitch, ElText} from "element-plus";

export default {
  components: {ElForm, ElFormItem, ElInput, ElSwitch, ElCheckbox, ElButton, ElText},
  data() {
    return {
      adopterInfo: {
        name: '',
        idnumber: '',
        address: '',
        phone: '',
        email: '',
      },
      petInfo: {
        name: '',
        breed: '',
        age: '',
        gender: '',
        health: '',
      },
      adoptionConditions: [
        '1. 领养人同意对宠物负有全部责任，包括但不限于提供合适的食物、定期的医疗保健、定期的锻炼和充足的关爱。',
        '2. 领养人同意定期带宠物进行兽医检查，接受疫苗接种、体内寄生虫预防和其他必要的医疗服务。',
        '3. 领养人同意不将宠物用于任何非法、虐待或实验性的目的。',
        '4. 如有任何原因，领养人无法再照顾宠物，将会提前通知原领养组织或个人，并配合将宠物交还给原领养组织或个人。',
        '5. 领养人同意不将宠物作为赠送、出售或转让给他人。',
      ],
      adopterAgreement: {
        '1. 领养人同意对宠物负有全部责任，包括但不限于提供合适的食物、定期的医疗保健、定期的锻炼和充足的关爱。': false,
        '2. 领养人同意定期带宠物进行兽医检查，接受疫苗接种、体内寄生虫预防和其他必要的医疗服务。': false,
        '3. 领养人同意不将宠物用于任何非法、虐待或实验性的目的。': false,
        '4. 如有任何原因，领养人无法再照顾宠物，将会提前通知原领养组织或个人，并配合将宠物交还给原领养组织或个人。': false,
        '5. 领养人同意不将宠物作为赠送、出售或转让给他人。': false,
      },
      fees: {
        adoptionFee: '',
        otherFees: '',
      },
      termination: {
        notifyOrganization: false,
        takeBackPet: false,
      },
      validity: {
        duration: '',
      },
      signatures: {
        adopter: '',
        organization: '',
      },
    };
  },
  methods: {
    submitAgreement() {
      // 在这里实现提交协议的逻辑，可以向后端发送数据或进行其他处理
      console.log('提交协议内容：', {
        adopterInfo: this.adopterInfo,
        petInfo: this.petInfo,
        adoptionConditions: this.adopterAgreement,
        fees: this.fees,
        termination: this.termination,
        validity: this.validity,
        signatures: this.signatures,
      });
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: flex-end; /* 将子元素靠右排列 */
}

.fee-underline-input{
  margin-left: -20px;
}

.underline-input {
  margin-left: -70px;
  //position: relative;
  //margin-bottom: 20px; /* 可根据需要调整下划线与其他元素之间的间距 */
}

.underlined {
  border: none;
  border-bottom: 1px solid #409EFF; /* 下划线颜色 */
  //padding: 2px 0; /* 调整下划线的位置 */
  background-color: transparent;
  width: 100%; /* 使输入框宽度充满父元素 */
}

.underlined:focus {
  outline: none;
}

.underline-label {
  position: absolute;
  bottom: 5px; /* 调整标签位置 */
  left: 0;
  color: #409EFF; /* 标签颜色 */
  pointer-events: none; /* 防止标签挡住输入 */
  transition: 0.3s ease; /* 添加过渡效果 */
}

.underlined:focus + .underline-label,
.underlined:not(:placeholder-shown) + .underline-label {
  transform: translateY(-20px); /* 调整标签在输入时的位置 */
  font-size: 12px; /* 输入时标签的字体大小 */
}

.adoption-agreement {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form-section {
  margin-bottom: 20px;
}

.condition-section {
  margin-bottom: 20px;
}

.condition-section h3 {
  font-size: 18px;
  color: #333;
}

.checkbox {
  margin-right: 10px;
}

.termination-section {
  margin-bottom: 20px;
}

.termination-section h3 {
  font-size: 18px;
  color: #333;
}

.validity-section {
  margin-bottom: 20px;
}

.validity-section h3 {
  font-size: 18px;
  color: #333;
}

.signature-section {
  margin-top: 60px;
  text-align: end;
  //justify-content: end;
}

.signature-section h3 {
  font-size: 18px;
  color: #333;
}

.submit-button {
  margin-top: 20px;
  width: 100px;
}
</style>