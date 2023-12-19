<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>

  <div style="background-color: #EFEEF1; padding: 40px">
  <div style="padding-top: 60px">
    <h1>宠物送养</h1>
  </div>

  <div class="form">
    <div class="input-group">
      <label for="pet-name">宠物名字:</label>
      <el-input id="pet-name" v-model="petName"></el-input>
    </div>
    <div class="input-group">
      <label>宠物种类:</label>
      <el-select v-model="petType" placeholder="请选择宠物种类" @change="onTypeChange">
        <el-option
            v-for="type in petTypes"
            :key="type.pro"
            :label="type.label"
            :value="type.pro"
        ></el-option>
      </el-select>
    </div>
    <div class="input-group" v-if="petType !== 'other'">
      <label class="show-depend">宠物品种:</label>
      <el-select  placeholder="请选择宠物品种" v-model="petBreed">
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
      <el-select id="pet-size"  placeholder="请选择宠物体型" v-model="petSize" filterable >
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
      <el-select id="pet-gender" placeholder="请选择宠物性别" v-model="petGender" filterable >
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
      <el-select id="pet-age"  placeholder="请选择宠物年龄" v-model="petAge" filterable >
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
      <el-select id="pet-source"  placeholder="请选择宠物来源" v-model="petSource">
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
      <el-checkbox-group v-model="selectedHealthConditions" style="margin-left: 5px;" >
        <el-checkbox label="已免疫"></el-checkbox>
        <el-checkbox label="已驱虫"></el-checkbox>
        <el-checkbox label="已绝育"></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="input-group">
      <label>领养要求:</label>
      <el-checkbox-group v-model="selectedAdoptNeeds" style="margin-left: 10px;" >
        <el-checkbox label="不可转送"></el-checkbox>
        <el-checkbox label="定期免疫"></el-checkbox>
        <el-checkbox label="签订领养合同" style="margin-left: 25px;"></el-checkbox>
        <br/>
        <el-checkbox label="仅限同城" style="margin-left: 10px;"></el-checkbox>
        <el-checkbox label="定期视频回访" style="margin-left: 24px;"></el-checkbox>
        <el-checkbox label="定期线下回访" style="margin-left: 10px;"></el-checkbox>

      </el-checkbox-group>
    </div>

    <div class="input-group">
      <label>领养方式:</label>
      <el-select v-model="adoptionType"  placeholder="请选择领养方式" @change="onAdoptionTypeChange">
        <el-option label="有偿领养" value="paid">有偿领养</el-option>
        <el-option label="无偿领养" value="free">无偿领养</el-option>
      </el-select>
    </div>

    <div class="input-group">
      <label v-if="adoptionType === 'paid'" class="show-depend">领养金额:</label>
      <el-select v-if="adoptionType === 'paid'" placeholder="请选择领养金额" v-model="adoptionAmount">
        <el-option label="100元以下" value="100元以下"></el-option>
        <el-option label="100到300元" value="100到300元"></el-option>
        <el-option label="300到500元" value="300到500元"></el-option>
        <el-option label="500到1000元" value="500到1000元"></el-option>
        <el-option label="1000元以上" value="1000元以上"></el-option>
      </el-select>
    </div>


    <div class="input-group" v-if="adoptionType === 'paid'" >
      <label class="show-depend">有偿原因:</label>
      <el-input
          style="width: 85%; margin-left: 55px"
          type="textarea"
          v-model="paymentReason"
          rows="4"
          placeholder="请输入有偿原因">
      </el-input>
    </div>


    <div class="input-group">
      <label>宠物图片:<p style= "color: crimson">(最多可上传四张)</p></label>
      <el-upload
          class="uploadImage"
          action="http://localhost:8080/image"
          ref="upload"
          :limit="limitnum"
          list-type="picture-card"
          :auto-upload="true"
          :on-error="uploadFileError"
          :on-success="uploadFileSuccess"
          :on-exceed="exceedFile"
          :on-remove="removeFile"
          :on-preview="handlePreview">
        <img v-if="imageUrl" :src="imageUrl" alt="" class="avatar">
      </el-upload>
      <el-image-viewer
          v-if="showImgViewer"
          @close="closeImgViewer"
          :url-list="imagePreviewUrls"
          :z-index="3000"
          :initial-index="initialImgPreviewIndex"
      />
    </div>

    <div class="input-group">
      <label>所在地区:</label>
      <el-cascader class="address" placeholder="请选择您所在的地区" size='large' style="width: 420px;" :options='options' v-model='selectedOptions' @change='addressChange'></el-cascader>
    </div>
    <br>

    <div class="input-group" style="margin-left: 20px">
      <label>说说ta的故事吧!</label>
    </div>
    <el-input
        style="width: 85%; margin-left: 55px"
        type="textarea"
        v-model="petExperience"
        placeholder="说说ta的来历，经历或故事吧，这样能让领养人更了解ta"
        rows="4"
    ></el-input><br>

    <div class="input-group" style="margin-left: 35px">
      <label>养护ta时的注意事项</label>
    </div>
    <el-input
        style="width: 85%; margin-left: 55px"
        type="textarea"
        v-model="adoptAttention"
        placeholder="说说ta的性格和习性吧，还有需要特别注意的事项 (如忌口、药物、伤病史等)"
        rows="4"
    ></el-input>
    <br>
    <div style="display: flex; justify-content: center;">
      <el-button @click="submitForm" type="primary" color="#6504b5" style="width: 20%; height: 40px">提交</el-button>
    </div>
    <br>
  </div>
  </div>

  <footer-card></footer-card>


</template>

<script>

import HeaderTag from "@/components/HeaderTag.vue";
import {
  ElPagination,
  ElButton,
  ElIcon,
  ElSelect,
  ElOption,
  ElInput,
  ElCheckboxGroup,
  ElCheckbox,
  ElUpload,
  ElCascader,
  ElImageViewer, ElMessage
} from "element-plus";
import { regionData, codeToText} from 'element-china-area-data';
import FooterCard from "@/components/FooterCard.vue";
import global from "@/views/assets/js/global_variable";
import {request} from "@/utils/request";
import router from "@/router";

export default {
  name: "rehomePage",
  components:{
    FooterCard,
    ElPagination, ElButton, ElIcon, ElSelect, ElOption, ElInput, ElCheckboxGroup, ElCheckbox, ElUpload, ElCascader, HeaderTag, ElImageViewer},

  data() {
    return {
      imageUrl: "src/assets/icons/upload_icon.png",
      showImgViewer: false,
      imagePreviewUrls: [],
      imageUrls: [],
      initialImgPreviewIndex: 0,
      petName: '',
      petSize: '',
      petGender: '',
      petAge: '',
      petType: '',
      petBreed: '',
      petSource: '',
      petAddress: '',
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
        { pro: 'dog', label: '萨摩耶' },
        { pro: 'dog', label: '边境牧羊犬' },
        { pro: 'dog', label: '德国牧羊犬' },
        { pro: 'dog', label: '柴犬' },
        { pro: 'dog', label: '其他' },
        { pro: 'cat', label: '加菲猫' },
        { pro: 'cat', label: '布偶猫' },
        { pro: 'cat', label: '暹罗猫' },
        { pro: 'cat', label: '波斯猫' },
        { pro: 'cat', label: '缅因猫' },
        { pro: 'cat', label: '蓝猫' },
        { pro: 'cat', label: '金渐层' },
        { pro: 'cat', label: '银渐层' },
        { pro: 'cat', label: '狸花猫' },
        { pro: 'cat', label: '橘猫' },
        { pro: 'cat', label: '奶牛猫' },
        { pro: 'cat', label: '三花猫' },
        { pro: 'cat', label: '其他' },
        { pro: 'rabbit', label: '垂耳兔' },
        { pro: 'rabbit', label: '猫猫兔' },
        { pro: 'rabbit', label: '其他' },
        { pro: 'other', label: '其他' }
      ],
      petSizes: [
        { label: "小型", value: "小型" },
        { label: "中型", value: "中型" },
        { label: "大型", value: "大型" },
        // Add more options for pet sizes
      ],
      petGenders: [
        { label: "公", value: "公" },
        { label: "母", value: "母" },
        // Add more options for pet genders
      ],
      petAges: [
        { label: "0~6个月", value: "0~6个月" },
        { label: "6个月~2岁", value: "6个月~2岁" },
        { label: "2岁~7岁", value: "2岁~7岁" },
        { label: "大于7岁", value: "大于7岁" },
        // Add more options for pet ages
      ],
      petSources: [
        { value: '家养', label: '家养' },
        { value: '救助站', label: '救助站' },
        { value: '个人救助', label: '个人救助' },
        { value: '其他', label: '其他' }
      ],
      selectedHealthConditions : [],
      selectedAdoptNeeds : [],
      adoptionType: '', // 领养方式
      adoptionAmount: '', // 金额
      paymentReason: '',
      limitnum:4,//最大允许上传个数
      options: regionData,
      selectedOptions: ['110000', '110100', '110101'],
      petExperience: '',
      adoptAttention: ''
    };
  },

  computed: {
    filteredBreeds() {
      if (this.petType === '') {
        return [];
      } else {
        return this.petBreeds.filter(breed => breed.pro === this.petType);
      }
    }
  },

  mounted() {
    if(global.address[0]!==""){
      this.selectedOptions=global.address
    }
  },

  methods: {
    getCurrentDate() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      return year + "-" + month + "-" + day;
    },

    submitForm() {
      if (
          !this.petName ||
          !this.petType ||
          !this.petBreed ||
          !this.petSize ||
          !this.petGender ||
          !this.petAge ||
          !this.petSource ||
          !this.adoptionType ||
          !this.selectedOptions ||
          !this.petExperience ||
          !this.adoptAttention
      ) {
        // Show an error message or handle the validation as needed
        return;
      }

      let price = '免费'
      if(this.adoptionType==='paid'){
        if(!this.adoptionAmount || !this.paymentReason) return;
        price=this.adoptionAmount
      }

      const r = request({
        url: '/pet',
        method: 'POST',
        data: {
          name: this.petName,
          type: this.petType,
          breed: this.petBreed,
          size: this.petSize,
          gender: this.petGender,
          age: this.petAge,
          source: this.petSource,
          health: this.selectedHealthConditions,
          requirements: this.selectedAdoptNeeds,
          price: price,
          reason: this.paymentReason,
          urls: this.imageUrls,
          address: this.petAddress,
          story: this.petExperience,
          attention: this.adoptAttention,
          date: this.getCurrentDate()
        }
      })
      r.then(response => {
        console.log(response)
        router.push({
          name: 'adoptionPage', query:{type: this.petType}
        })
        this.petName=''
        this.petType=''
        this.petBreed=''
        this.petSize=''
        this.petGender=''
        this.petAge=''
        this.petSource=''
        this.selectedHealthConditions=[]
        this.selectedAdoptNeeds=[]
        this.adoptionType=''
        this.adoptionAmount=''
        this.paymentReason=''
        this.imageUrls=[]
        this.selectedOptions=[]
        this.petExperience=''
        this.adoptAttention=''
        this.imagePreviewUrls=[]
        this.initialImgPreviewIndex=0

        console.log(this.imagePreviewUrls)


          // ElMessage({
          //   message: '注册成功',
          //   type: 'success',
          //   center: true  // 设置消息居中显示
          // });
      }).catch(error=> {

      })

      // this.petName = "";
      // this.petType = "all";
      // this.petBreed = "全部品种";
      // this.petSize = "";
      // this.petGender = "";
      // this.petAge = "";
    },


    onTypeChange() {
      console.log(this.petType)
      if(this.petType==='other'){
        this.petBreed='其他'
      }
      else this.petBreed = '';
    },

    onAdoptionTypeChange() {
      if (this.adoptionType !== 'paid') {
        this.adoptionAmount = ''; // 清空金额选项
      }
    },

    //上传失败
    uploadFileError(err, file, fileList){
      this.$message.error("上传失败！")
    },
    //上传成功
    uploadFileSuccess(res, file, fileList){
      this.imagePreviewUrls.push(file.url) // 预览图片的数组
      this.imageUrls.push(res)
    },
    // 文件超出个数限制时的钩子
    exceedFile(files, fileList){
      this.$message.error('只能上传'+this.limitnum+'个文件');
    },
    //删除文件
    removeFile(file,fileList) {
      let index = this.imagePreviewUrls.indexOf(file.url)
      if (index > -1) {
        this.imagePreviewUrls.splice(index, 1)
        this.imageUrls.splice(index, 1)
      }
    },
    handlePreview(file){
      let index = this.imagePreviewUrls.indexOf(file.url)
      if (index >= 0) {
        this.initialImgPreviewIndex = index
      }
      this.showImgViewer = true
    },
    closeImgViewer () {
      this.showImgViewer = false
    },
    addressChange (arr) {
      console.log(this.selectedOptions)
      console.log(arr)
      console.log(codeToText[arr[0]], codeToText[arr[1]], codeToText[arr[2]])
      this.petAddress=codeToText[arr[0]] + codeToText[arr[1]] + codeToText[arr[2]]
    },
  },
};
</script>

<style scoped>

h1 {
  font-size: 30px;
  font-weight: bold;
  color: #6504b5;
}


.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: auto;
  max-width: 900px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.input-group {
  display: flex;
  text-align: left;
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



.uploadImage .el-upload {
  background-image: url("../assets/icons/upload_icon.png");
  background-size: cover;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
  opacity: 0.7;
  border-radius: inherit;
}



</style>
