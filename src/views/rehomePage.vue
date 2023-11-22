

<template>
  <header-tag></header-tag>
  <div class="form">
    <div class="input-group">
      <label for="pet-name">宠物名字:</label>
      <el-input id="pet-name" v-model="petName"></el-input>
    </div>
    <div class="input-group">
      <label>宠物种类:</label>
      <el-select v-model="selectedPetType" @change="onTypeChange">
        <el-option
            v-for="type in petTypes"
            :key="type.pro"
            :label="type.label"
            :value="type.pro"
        ></el-option>
      </el-select>
    </div>
    <div class="input-group" v-if="selectedPetType !== 'other'">
      <label class="show-depend">宠物品种:</label>
      <el-select  v-model="selectedPetBreed">
        <el-option
            v-for="breed in filteredBreeds"
            :key="breed.label"
            :label="breed.label"
            :value="breed.label"
        ></el-option>
      </el-select>
    </div>

    <div class="input-group">
      <label for="pet-size">宠物体型:</label>
      <el-select id="pet-size" v-model="petSize" filterable >
        <el-option
            v-for="item in petSizes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input-group">
      <label for="pet-gender">宠物性别:</label>
      <el-select id="pet-gender" v-model="petGender" filterable >
        <el-option
            v-for="item in petGenders"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="input-group">
      <label for="pet-age">宠物年龄:</label>
      <el-select id="pet-age" v-model="petAge" filterable >
        <el-option
            v-for="item in petAges"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="input-group">
      <label for="pet-source">宠物来源:</label>
      <el-select id="pet-source" v-model="selectedPetSource">
        <el-option
            v-for="source in petSources"
            :key="source.value"
            :label="source.label"
            :value="source.value"
        ></el-option>
      </el-select>
    </div>

    <div class="input-group">
      <label>健康情况:</label>
      <el-checkbox-group v-model="selectedHealthConditions" >
        <el-checkbox label="已免疫"></el-checkbox>
        <el-checkbox label="已驱虫"></el-checkbox>
        <el-checkbox label="已绝育"></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="input-group">
      <label>领养要求:</label>
      <el-checkbox-group v-model="selectedAdoptNeeds" >
        <el-checkbox label="不可转送"></el-checkbox>
        <el-checkbox label="定期免疫"></el-checkbox>
        <el-checkbox label="仅限同城"></el-checkbox>
        <br/>
        <el-checkbox label="签订领养合同"></el-checkbox>
        <el-checkbox label="定期视频回放"></el-checkbox>
        <el-checkbox label="定期线下回访"></el-checkbox>

      </el-checkbox-group>
    </div>

    <div class="input-group">
      <label>领养方式:</label>
      <el-select v-model="adoptionType" @change="onAdoptionTypeChange">
        <el-option label="有偿领养" value="paid">有偿领养</el-option>
        <el-option label="无偿领养" value="free">无偿领养</el-option>
      </el-select>
    </div>

    <div class="input-group">
      <label v-if="adoptionType === 'paid'" class="show-depend">领养金额:</label>
      <el-select v-if="adoptionType === 'paid'" v-model="adoptionAmount">
        <el-option label="100元以下" value="below100"></el-option>
        <el-option label="100到300元" value="100to300"></el-option>
        <el-option label="300到500元" value="300to500"></el-option>
        <el-option label="500到1000元" value="500to1000"></el-option>
        <el-option label="1000元以上" value="above1000"></el-option>
      </el-select>
    </div>


    <div class="input-group" v-if="adoptionType === 'paid'" >
      <label class="show-depend">有偿原因:</label>
      <el-input  type="textarea" v-model="paymentReason" rows="4" placeholder="请输入有偿原因"> </el-input>
    </div>


    <div class="input-group">
      <label>宠物图片:</label>
      <el-upload
          class="uploadImage"
          action=""
          ref="upload"
          :limit="limitnum"
          list-type="picture-card"
          :http-request="uploadSectionFile"
          :auto-upload="true"
          :file-list="fileList"
          :on-error="uploadFileError"
          :on-success="uploadFileSuccess"
          :on-exceed="exceedFile"
          :on-remove="removeFile">
      </el-upload>
    </div>

    <div class="input-group">
      <label>所在地区:</label>
      <el-cascader class="address" placeholder="全国" size='large' style="width: 210px;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
    </div>


    <div class="input-group">
      <label>联系人姓名:</label>
      <el-input v-model="contact.name"></el-input>

      <label>联系电话:</label>
      <el-input v-model="contact.phone"></el-input>

      <label>联系人微信号:</label>
      <el-input v-model="contact.wechat"></el-input>
    </div>

    <div class="input-group">
      <label>说说ta的故事吧!</label>
    </div>
    <el-input
        type="textarea"
        v-model="petExperience"
        placeholder="说说ta的来历，经历或故事吧，这样能让领养人更了解ta"
        rows="4"
    ></el-input>

    <div class="input-group">
      <label>养护Ta时的注意事项</label>
    </div>
    <el-input
        type="textarea"
        v-model="petExperience"
        placeholder="说说Ta的性格和习性吧，还有需要特别注意的事项 (如忌口、药物、伤病史等)"
        rows="4"
    ></el-input>



    <el-button @click="submitForm" type="primary" color="#6504b5">提交</el-button>
  </div>



</template>

<script>

import HeaderTag from "@/components/HeaderTag.vue";
import {ElPagination, ElButton, ElIcon, ElSelect, ElOption, ElInput, ElCheckboxGroup, ElCheckbox, ElUpload, ElCascader} from "element-plus";
import { regionData, codeToText} from 'element-china-area-data';



export default {
  name: "rehomePage",
  components:{ElPagination, ElButton, ElIcon, ElSelect, ElOption, ElInput, ElCheckboxGroup, ElCheckbox, ElUpload, ElCascader, HeaderTag},

  data() {
    return {
      petName: "",
      petSize: "",
      petGender: "",
      petAge: "",
      selectedPetType: 'other',
      selectedPetBreed: '',
      selectedPetSource: '',
      petTypes: [
        { pro: 'dog', label: '宠物狗' },
        { pro: 'cat', label: '宠物猫' },
        { pro: 'rabbit', label: '兔子' },
        { pro: 'other', label: '其他' }
      ],
      petBreeds: [
        { pro: 'dog', label: '金毛' },
        { pro: 'dog', label: '拉布拉多' },
        { pro: 'dog', label: '泰迪' },
        { pro: 'dog', label: '博美' },
        { pro: 'dog', label: '中华田园犬' },
        { pro: 'dog', label: '其他' },
        { pro: 'cat', label: '加菲猫' },
        { pro: 'cat', label: '布偶猫' },
        { pro: 'cat', label: '暹罗猫' },
        { pro: 'cat', label: '金渐层' },
        { pro: 'cat', label: '银渐层' },
        { pro: 'cat', label: '中华田园猫' },
        { pro: 'cat', label: '其他' },
        { pro: 'rabbit', label: '垂耳兔' },
        { pro: 'rabbit', label: '猫猫兔' },
        { pro: 'rabbit', label: '其他' }
      ],
      petSizes: [
        { label: "小型", value: "small" },
        { label: "中型", value: "medium" },
        { label: "大型", value: "large" },
        // Add more options for pet sizes
      ],
      petGenders: [
        { label: "公", value: "male" },
        { label: "母", value: "female" },
        // Add more options for pet genders
      ],
      petAges: [
        { label: "0~6个月", value: "0-6" },
        { label: "6个月~2岁", value: "6-24" },
        { label: "2岁~7岁", value: "24-84" },
        { label: "大于7岁", value: "84+" },
        // Add more options for pet ages
      ],
      petSources: [
        { value: 'home', label: '家养' },
        { value: 'shelter', label: '救助站' },
        { value: 'save', label: '个人救助' },
        { value: 'other', label: '其他' }
      ],
      selectedHealthConditions : [],
      selectedAdoptNeeds : [],
      adoptionType: '', // 领养方式
      adoptionAmount: '', // 金额
      paymentReason: '',


      fileList:[],//上传的文件列表
      limitnum:4,//最大允许上传个数

      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],

      contact: {
        name: '',
        phone: '',
        wechat: ''
      },

      petExperience: ''
    };
  },





  computed: {
    filteredBreeds() {
      if (this.selectedPetType === '') {
        return [];
      } else {
        return this.petBreeds.filter(breed => breed.pro === this.selectedPetType);
      }
    }
  },





  methods: {
    // Existing methods

    submitForm() {
      // Validate the form inputs
      if (
          !this.petName ||
          !this.petType ||
          !this.petBreed ||
          !this.petSize ||
          !this.petGender ||
          !this.petAge
      ) {
        // Show an error message or handle the validation as needed
        return;
      }

      // Create an adoption posting with the form data
      const adoptionPosting = {
        petName: this.petName,
        petType: this.petType,
        petBreed: this.petBreed,
        petSize: this.petSize,
        petGender: this.petGender,
        petAge: this.petAge,
        // Add other form data properties
      };

      // Perform the necessary actions with the adoption posting, such as sending it to a server or storing it locally

      // Reset the form fields
      this.petName = "";
      this.petType = "all";
      this.petBreed = "全部品种";
      this.petSize = "";
      this.petGender = "";
      this.petAge = "";
    },


    onTypeChange() {
      this.selectedPetBreed = '';
    },

    onAdoptionTypeChange() {
      if (this.adoptionType !== 'paid') {
        this.adoptionAmount = ''; // 清空金额选项
      }
    },


    //自定义上传
    uploadSectionFile(param){
      var fileObj = param.file;
      var form = new FormData();
      // 文件对象
      form.append("file", fileObj);
      this.$axios.post('/file/upload',form).then(res => {
        param.onSuccess(res)
      }).catch(({err}) => {
        param.onError(err)
      })
    },
    //上传失败
    uploadFileError(err, file, fileList){
      this.$message.error("上传失败！")
    },
    //上传成功
    uploadFileSuccess(response, file, fileList){
      if(response.data.error==0){
        file.response=response.data.data;
        this.fileList.push(file)
      }else{
        this.$message.error(response.data.message);//文件上传错误提示
      }
    },
    // 文件超出个数限制时的钩子
    exceedFile(files, fileList){
      this.$message.error('只能上传'+this.limitnum+'个文件');
    },
    //删除文件
    removeFile(file,fileList) {
      this.fileList=fileList;
    },


    addressChange (arr) {
      console.log(this.selectedOptions)
      console.log(arr)
      console.log(codeToText[arr[0]], codeToText[arr[1]], codeToText[arr[2]])
    },



  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: auto;
  max-width: 900px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group {
  display: flex;
  align-items: left;
  margin-bottom: 10px;
}

.input-group label {
  justify-content: center;
  width: 150px;
  margin-left: 10px;
  text-align: center;  line-height: 30px; /* 根据实际情况调整行高 */

}

.el-select,
.el-input {
  width: 200px;
}

.el-button {
  margin-top: 10px;
}

.show-depend {
  text-align: center;

  color: white;
  background-color: #6504b5;
  border-radius: 10px;
}

.uploadImage .el-upload-dragger {
  background-image: url("../assets/icons/upload_icon.png");
  background-size: cover;
}


</style>