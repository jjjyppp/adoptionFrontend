<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>

  <el-dialog v-model="dialogVisible">
    <p style="font-size: 17px;text-align: left">A：</p>
    <p style="font-size: 17px;text-align: left">感谢您选择使用PetPat，为宠物寻找一个温暖的新家。以下是送养的具体流程，希望这些步骤可以帮助您成功地将宠物送到有爱心的新家。</p>
    <p style="font-size: 17px;text-align: left">1. 登录并上传宠物信息： 首先，请登录您的账户，然后点击“我要送养”按钮。按照系统提示填写宠物的详细信息，包括种类、年龄、性别、健康状况等，并上传照片。</p>
    <p style="font-size: 17px;text-align: left">2. 审核发布： 提交宠物信息后，我们的团队将会审核您的发布内容，以确保信息的真实性和完整性。一旦审核通过，您的宠物信息将在网站上显示。</p>
    <p style="font-size: 17px;text-align: left">3. 等待领养申请： 一旦您的宠物信息上线，感兴趣的领养者将可以看到它。当有领养者提交领养申请时，系统将立即通知您。</p>
    <p style="font-size: 17px;text-align: left">4. 私聊领养者： 您可以通过站内信与领养者进行私聊，了解他们的居住环境、饲养经验以及对宠物的态度。确保双方在领养决策上有清晰的了解。</p>
    <p style="font-size: 17px;text-align: left">5. 确认领养者： 在与领养者充分沟通并确保他们能够提供良好的饲养环境后，您可以选择确认领养。这将通知领养者进行支付(如需）。</p>
    <p style="font-size: 17px;text-align: left">6. 完成送养： 领养者支付成功（如有）后，您和领养者可以协商具体的交接时间和地点。请确保在交接时提供一份宠物的健康证明和相关资料。</p>
    <p style="font-size: 17px;text-align: left">感谢您为宠物的幸福贡献力量！如果您有任何疑问或需要帮助，请随时联系我们的客服团队。祝您的宠物找到一个幸福的新家！</p>
  </el-dialog>
  <div style="background-color: #EFEEF1; padding-bottom: 40px">
    <div class="progress-bar" style="padding-top: 60px;width: 100%;height:120px;background: #EFEEF1; position: fixed;z-index: 3;display: flex;flex-direction: row">
      <p style="margin-left:0%;margin-top: 10px;font-weight: bolder;font-size: 25px;color: #4c0586; width: 10%;text-align: right">您已完成：</p>
      <el-progress style="width:70%;height: 60px"
                   :percentage="completedPercentage"
                   :color="progressColor"
                   :stroke-width="15"
      ></el-progress>
    </div>

    <div style="height: 10px"></div>

  <div style="padding-top: 160px;margin: -20px">
    <h1 >宠物送养</h1>
  </div>

    <el-button class="instruction"  @click="this.dialogVisible = true;">不清楚送养流程？点击这里</el-button>

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
      <label>健康证明：<p style= "color: crimson">(最多四张，请上传疫苗接种手册、绝育证书、检疫证书等)</p></label>
      <el-upload
          class="uploadImage"
          action="http://localhost:8080/image"
          ref="upload"
          :limit="limitnum"
          list-type="picture-card"
          :auto-upload="true"
          :on-error="uploadCerFileError"
          :on-success="uploadCerFileSuccess"
          :on-exceed="exceedCerFile"
          :on-remove="removeCerFile"
          :on-preview="handleCerPreview">
        <img v-if="imageUrl" :src="imageUrl" alt="" class="avatar">
      </el-upload>
      <el-image-viewer
          v-if="showCerImgViewer"
          @close="closeCerImgViewer"
          :url-list="imageCerPreviewUrls"
          :z-index="3000"
          :initial-index="initialCerImgPreviewIndex"
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

  <el-dialog
      title="提示"
      v-model="confirmDialogVisible"
      width="30%"
      typeof="warning"
      @close="handleClose"
  >
    <span style="font-size: 15px">您确认要提交送养信息吗？提交后不可修改</span>
    <br>
    <span slot="footer" class="dialog-footer">
        <el-button style="margin-top: 40px;" @click="confirmDialogVisible = false">取 消</el-button>
        <el-button style="background-color: #3a0466;margin-top: 40px;color: white" @click="confirmSubmit">确 定</el-button>
      </span>
  </el-dialog>

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
  ElImageViewer, ElMessage, ElDialog,
    ElProgress
} from "element-plus";
import { regionData, codeToText} from 'element-china-area-data';
import FooterCard from "@/components/FooterCard.vue";
import global from "@/views/assets/js/global_variable";
import {request} from "@/utils/request";
import router from "@/router";
import {store} from "@/store/store";

export default {
  name: "rehomePage",
  components:{
    FooterCard,
    ElPagination, ElButton, ElIcon, ElSelect, ElOption, ElInput, ElCheckboxGroup, ElCheckbox, ElUpload, ElCascader, HeaderTag, ElImageViewer, ElDialog, ElProgress},

  data() {
    return {
      dialogVisible: false,
      progressColor: "#2e0152",
      confirmDialogVisible: false,
      imageUrl: "src/assets/icons/upload_icon.png",
      showImgViewer: false,
      imagePreviewUrls: [],
      imageUrls: [],
      initialImgPreviewIndex: 0,
      showCerImgViewer: false,
      imageCerPreviewUrls: [],
      imageCerUrls: [],
      initialCerImgPreviewIndex: 0,
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
        { pro: 'dog', label: '中华田园犬' },
        { pro: 'dog', label: '金毛' },
        { pro: 'dog', label: '拉布拉多' },
        { pro: 'dog', label: '泰迪' },
        { pro: 'dog', label: '比熊' },
        { pro: 'dog', label: '柯基' },
        { pro: 'dog', label: '雪纳瑞' },
        { pro: 'dog', label: '吉娃娃' },
        { pro: 'dog', label: '巨型贵宾犬' },
        { pro: 'dog', label: '秋田犬' },
        { pro: 'dog', label: '藏獒' },
        { pro: 'dog', label: '狼青' },
        { pro: 'dog', label: '博美' },
        { pro: 'dog', label: '萨摩耶' },
        { pro: 'dog', label: '边境牧羊犬' },
        { pro: 'dog', label: '德国牧羊犬' },
        { pro: 'dog', label: '柴犬' },
        { pro: 'dog', label: '贵宾犬' },
        { pro: 'dog', label: '比熊' },
        { pro: 'dog', label: '法国斗牛犬' },
        { pro: 'dog', label: '雪纳瑞' },
        { pro: 'dog', label: '松狮犬' },
        { pro: 'dog', label: '吉娃娃' },
        { pro: 'dog', label: '马尔济斯犬' },
        { pro: 'dog', label: '约克夏梗' },
        { pro: 'dog', label: '蝴蝶犬' },
        { pro: 'dog', label: '巴哥犬' },
        { pro: 'dog', label: '西部高地白梗' },
        { pro: 'dog', label: '苏格兰梗' },
        { pro: 'dog', label: '英国玩具梗' },
        { pro: 'dog', label: '哈士奇' },
        { pro: 'dog', label: '腊肠犬' },
        { pro: 'dog', label: '杜宾犬' },
        { pro: 'dog', label: '斗牛梗' },
        { pro: 'dog', label: '伯恩山犬' },
        { pro: 'dog', label: '藏獒' },
        { pro: 'dog', label: '史毕诺犬' },
        { pro: 'dog', label: '其他' },
        { pro: 'cat', label: '狸花猫' },
        { pro: 'cat', label: '橘猫' },
        { pro: 'cat', label: '奶牛猫' },
        { pro: 'cat', label: '三花猫' },
        { pro: 'cat', label: '加菲猫' },
        { pro: 'cat', label: '布偶猫' },
        { pro: 'cat', label: '暹罗猫' },
        { pro: 'cat', label: '波斯猫' },
        { pro: 'cat', label: '缅因猫' },
        { pro: 'cat', label: '蓝猫' },
        { pro: 'cat', label: '金渐层' },
        { pro: 'cat', label: '银渐层' },
        { pro: 'cat', label: '英国短毛猫' },
        { pro: 'cat', label: '美国短尾猫' },
        { pro: 'cat', label: '苏格兰折耳猫' },
        { pro: 'cat', label: '豹猫' },
        { pro: 'cat', label: '孟买猫' },
        { pro: 'cat', label: '伯曼猫' },
        { pro: 'cat', label: '无毛猫' },
        { pro: 'cat', label: '波米拉猫' },
        { pro: 'cat', label: '茶杯猫' },
        { pro: 'cat', label: '喜马拉雅猫' },
        { pro: 'cat', label: '金吉拉' },
        { pro: 'cat', label: '热带草原猫' },
        { pro: 'cat', label: '其他' },
        { pro: 'rabbit', label: '垂耳兔' },
        { pro: 'rabbit', label: '猫猫兔' },
        { pro: 'rabbit', label: '其他' },
        { pro: 'other', label: '不限' },
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
    },
    completedPercentage() {
      const totalFields = 15; // 总字段数量（根据实际情况修改）
      let filledFields = 0; // 已填写的字段数量

      // 判断每个字段是否已填写，进行累加
      if (this.petName !== '') filledFields++;
      if (this.petType !== '') filledFields++;
      if (this.petBreed !== '') filledFields++;
      if (this.petSize !== '') filledFields++;
      if (this.petGender !== '') filledFields++;
      if (this.petAge !== '') filledFields++;
      if (this.petSource !== '') filledFields++;
      if (this.selectedHealthConditions.length !== 0) filledFields++;
      if (this.selectedAdoptNeeds.length !== 0) filledFields++;
      if (this.adoptionType !== '') filledFields++;
      if (this.imageUrls.length !== 0) filledFields++;
      if (this.imageCerUrls.length !== 0) filledFields++;
      if (this.petAddress !== '') filledFields++;
      if (this.petExperience !== '') filledFields++;
      if (this.adoptAttention !== '') filledFields++;

      return (filledFields/totalFields*100).toFixed(2);
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

    submitForm(){
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
          !this.adoptAttention ||
          this.imageUrls.length===0||
          this.imageCerUrls.length===0
      ) {
        ElMessage({
          type: 'warning',
          message: '您的送养信息未填写完整'
        });

        return;
      }

      this.confirmDialogVisible=true
    },

    confirmSubmit() {
      this.confirmDialogVisible= false

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

        request({
          url: `http://localhost:8080/pets`,
          method: 'GET'
        }).then((res) => {
          console.log(res.data)
          this.pets=res.data
          store.unrehomes.push(this.pets[0])
        }).catch((error) => {
        })

        ElMessage({
          type: 'success',
          message: '您已成功提交送养信息'
        });

        setTimeout(() => {
          router.push({
            name: 'adoptionPage', query:{type: this.petType}
          })
        }, 1000);

        this.petName=''
        // this.petType=''
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
      }).catch(error=> {

      })
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

    uploadCerFileError(err, file, fileList){
      this.$message.error("上传失败！")
    },
    //上传成功
    uploadCerFileSuccess(res, file, fileList){
      this.imageCerPreviewUrls.push(file.url) // 预览图片的数组
      this.imageCerUrls.push(res)
    },
    // 文件超出个数限制时的钩子
    exceedCerFile(files, fileList){
      this.$message.error('只能上传'+this.limitnum+'个文件');
    },
    //删除文件
    removeCerFile(file,fileList) {
      let index = this.imageCerPreviewUrls.indexOf(file.url)
      if (index > -1) {
        this.imageCerPreviewUrls.splice(index, 1)
        this.imageCerUrls.splice(index, 1)
      }
    },
    handleCerPreview(file){
      let index = this.imageCerPreviewUrls.indexOf(file.url)
      if (index >= 0) {
        this.initialCerImgPreviewIndex = index
      }
      this.showCerImgViewer = true
    },
    closeCerImgViewer () {
      this.showCerImgViewer = false
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

.progress-bar :deep(.el-progress-bar__outer) {
  background-color: #DDB4FF;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  color: #6504b5;
}

.instruction {
  font-size: 15px;
  margin-top: 10px;
  background: transparent;
  color: #8a8a8a;
  border: transparent;
  text-decoration: underline;
}
.instruction:hover{
  color: cornflowerblue;
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
