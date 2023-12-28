<template>
  <div class="chat-back">
    <div style="text-align: end; padding-right: 20px; padding-top: 20px" >
      <svg @click="cancel" x="1701596306400" class="cancel-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5136" width="24" height="24"><path d="M975.069283 746.176494a162.756163 162.756163 0 0 1-230.134685 230.134686L511.97742 743.399162 279.065402 976.31118A162.756163 162.756163 0 0 1 48.930717 746.176494L281.842734 513.241896 48.930717 280.329879a162.688423 162.688423 0 0 1 0-230.112106 162.711003 162.711003 0 0 1 230.134685 0l232.912018 232.889438L744.912018 50.217773a162.711003 162.711003 0 1 1 230.134685 230.112106L742.134686 513.241896l232.934597 232.934598z" fill="#6504b5" p-id="5137"></path></svg>
    </div>
<!--  <el-container>-->
    <div style="display: flex; justify-content: center;">
      <el-dialog
          title="提示"
          v-model="confirmAdoptDialog"
          width="50%"
          z-index=50
          @close="handleClose">
        <span>这是一段信息</span>
      </el-dialog>
      <div class="aside">
        <div class="chat-list">
          <div v-for="contact in contacts" :key="contact.id" ref="contact" @click="selectContact(contact.id)" class="contact-item" :class="{ 'selected': selectedItemId === contact.id, 'changeColor': changeColorId === contact.id }"  @mouseover="mouseOver(contact.id)" @mouseleave="mouseLeave(contact.id)">
<!--            <img src="../assets/imgs/avatar1.jpg" alt="avatar" class="contact-avatar" />-->
            <img :src="contact.avatar" alt="avatar" class="contact-avatar">
            <div style="margin-left: 10px;width: 214px">
              <div class="info">
                <div class="contact-name">{{ contact.name }}</div>
                <div class="last-time">{{ contact.lastTime }}</div>
              </div>
              <div class="message">
                <div class="last-message" >{{ contact.lastMessage }}</div>
                <svg x="1701499921864" @click.stop="deleteContact(contact.id)" class="delete-icon" :class="{'visible': hoverItemId === contact.id}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4267" width="16" height="16"><path d="M512 32C251.4285715625 32 32 251.4285715625 32 512s219.4285715625 480 480 480 480-219.4285715625 480-480-219.4285715625-480-480-480z m205.7142853125 617.142856875c20.5714284375 20.5714284375 20.5714284375 48 0 61.714286249999994-20.5714284375 20.5714284375-48 20.5714284375-61.714285312499996 0l-137.142856875-137.1428578125L374.857143125 717.7142853125c-20.5714284375 20.5714284375-48 20.5714284375-68.5714284375 0s-20.5714284375-54.857143125 0-68.5714284375l144-144-137.1428578125-137.142856875c-20.5714284375-13.714285312500001-20.5714284375-41.142856875 0-61.714285312499996 20.5714284375-20.5714284375 48-20.5714284375 61.714286249999994 0l137.142856875 137.142856875 144-144c20.5714284375-20.5714284375 48-20.5714284375 68.5714284375 0 20.5714284375 20.5714284375 20.5714284375 48 0 68.5714284375L580.5714284375 512l137.142856875 137.142856875z" fill="#999999" p-id="4268"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--    <div style="padding: 0">-->
      <div class="chat-container">

        <div class="chat-header">{{contacts[selectedItemId].name}}</div>
        <div class="confirm" style="display: flex;">
          <img src="src/assets/imgs/qibao.jpeg" style="width: 70px;height: 70px;margin-left: 5%;border-radius: 5px">
            <p style="margin-top: 15px; margin-left: 20px; font-size: 27px">七宝</p>
          <div style="margin-left: 20px;">
            <p style="margin-top: 10px; text-align: left;color: #8a8a8a">江苏省·南京市·栖霞区</p>

            <div style="display: flex;margin-top: -10px">
              <p style="font-size: 16px;color: #8a8a8a">免费领养</p>
            </div>
          </div>

          <div style="margin-left: 220px; text-align: end">
            <div>
              <el-tag size="default" effect="plain" style="color: #6504B5; border:1px solid #6504B5">已免疫</el-tag>
              <el-tag size="default" effect="plain" style="margin-left: 3px;color: #6504B5; border:1px solid #6504B5">已驱虫</el-tag>
              <el-tag size="default" effect="plain" style="margin-left: 3px;color: #6504B5; border:1px solid #6504B5">已绝育</el-tag>
            </div>
            <div style="margin-top: 4px">
              <el-tag size="default" effect="plain" style="color: #6504B5;border:1px solid #6504B5">仅限同城</el-tag>
              <el-tag size="default" effect="plain" style="margin-left: 3px;color: #6504B5;border:1px solid #6504B5">定期线下回访</el-tag>
              <el-tag size="default" effect="plain" style="margin-left: 3px;color: #6504B5;border:1px solid #6504B5">签订领养合同</el-tag>
            </div>
          </div>

<!--          <el-button class="button" @click="showDialog" round>确认收养</el-button>-->
<!--          <el-button class="button" @click="toAgreement" round>确认收养</el-button>-->

        </div>
        <div class="chat-messages" ref="messageContainer">
          <div v-for="message in messages" :key="message.id" class="chat-message" :class="{ 'my-message': message.isMe, 'other-message': !message.isMe }">
            <div v-if="!message.isMe" style="display: flex">
              <img :src='contacts[selectedItemId].avatar' alt="avatar" class="avatar other-avatar"/>
              <div style="text-align: left">
                <div class="time">{{message.date}} {{message.time}}</div>
                <div class="message-content" style="background-color: white">{{ message.content }}</div>
              </div>
            </div>
            <div v-if="message.isMe" style="display: flex">
              <div style="text-align: right">
                <div class="time">{{message.date}} {{message.time}}</div>
                <div class="message-content" style="background-color: #CFE2F7; text-align: left">{{ message.content }}</div>
              </div>
              <img src="../assets/imgs/avatar-me.jpeg" alt="avatar" class="avatar my-avatar" />
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input class="send-input" v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
          <button class="send-button" @click="sendMessage">发送</button>
        </div>


      </div>
    </div>
<!--  </el-container>-->
  </div>
</template>

<script>
import DetailCard from "@/components/DetailCard.vue";
import {ElDivider,ElTag,ElButton,ElDialog} from "element-plus";

export default {
  components: {DetailCard, ElDivider,ElTag,ElButton,ElDialog},
  data() {
    return {
      confirmAdoptDialog : false,
      messages: [
        { id: 0, isMe: true, content: '请问这只小猫还在吗？', date: "2023-12-01", time:"09:40:03" },
        { id: 1, isMe: false, content: '您好，在的！', date: "2023-12-01", time:"09:50:03"  }
      ],
      newMessage: '',
      contacts: [
        { id: 0, name: 'Molly', avatar: 'src/assets/imgs/avatar4.jpg', lastMessage: '您好，在的！', lastTime: "9:50" },
        { id: 1, name: '莫里', avatar: 'src/assets/imgs/avatar2.png', lastMessage: '我希望能找一个离我近一点的，方便我回访', lastTime: "8:00" },
        { id: 2, name: 'piiii🦕', avatar: 'src/assets/imgs/avatar3.jpeg', lastMessage: '不在同城可能不太合适', lastTime: "6:50" },
        { id: 3, name: '无恙', avatar: 'src/assets/imgs/avatar9.png', lastMessage: '你工作会很忙吗？我的小猫比较粘人', lastTime: "2023-12-12" },
        { id: 4, name: 'Aziop', avatar: 'src/assets/imgs/avatar4.jpeg', lastMessage: '好的谢谢', lastTime: "2023-11-29" },
        { id: 5, name: 'HYC', avatar: 'src/assets/imgs/avatar5.jpeg', lastMessage: '不好意思，我再看看吧', lastTime: "2023-11-29" },
        { id: 6, name: '书洲', avatar: 'src/assets/imgs/avatar6.jpeg', lastMessage: '嗯嗯', lastTime: "2023-11-28" },
        { id: 7, name: '我是火柴人', avatar: 'src/assets/imgs/avatar7.jpeg', lastMessage: '小猫很可爱', lastTime: "2023-11-28" },
        { id: 8, name: 'zrs', avatar: 'src/assets/imgs/avatar8.jpeg', lastMessage: '好耶', lastTime: "2023-11-27" },
        { id: 9, name: 'wjj', avatar: 'src/assets/imgs/avatar1.jpg', lastMessage: '好的我再看看', lastTime: "2023-11-26" },
        { id: 10, name: '壬.', avatar: 'src/assets/imgs/avatar10.png', lastMessage: '好滴好滴', lastTime: "2023-11-24" },
        { id: 11, name: 'Carnival', avatar: 'src/assets/imgs/avatar2.jpg', lastMessage: '那我再考虑考虑吧，可能需要问问我的家人', lastTime: "2023-10-01" },
      ],
      selectedItemId: 0,
      hoverItemId: -1,
      changeColorId: -1,
    };
  },
  methods: {
    toAgreement(){

    },
    showDialog(){
      console.log('showDialog method called');
      this.confirmAdoptDialog=true;
    },
    getDate(){
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      return year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0')
    },
    getTime(){
      let currentDate = new Date();
      let hours = currentDate.getHours()
      let minutes = currentDate.getMinutes();
      let seconds = currentDate.getSeconds();
      return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        let messages=this.messages
        let i=messages.length-1
        for(; i>=0; i--){
          if(messages[i].date!==""&&this.getDate()===messages[i].date){
            messages.push({ id: messages.length, isMe: true, content: this.newMessage, date: "", time: this.getTime() });
            break;
          }
        }
        if(i===-1) messages.push({ id: messages.length, isMe: true, content: this.newMessage, date: this.getDate(), time: this.getTime() });
        this.contacts[this.selectedItemId].lastMessage=this.newMessage
        this.newMessage = '';
      }
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      const container = this.$refs.messageContainer;
      container.scrollTop = container.scrollHeight;
    },
    selectContact(itemId) {
      this.selectedItemId = itemId;
      if(this.changeColorId===itemId){
        this.changeColorId=-1
      }
    },
    mouseOver(itemId){
      this.hoverItemId=itemId
      if(this.selectedItemId!==itemId){
        this.changeColorId=itemId
      }
    },
    mouseLeave(itemId){
      this.hoverItemId=-1
      this.changeColorId=-1
    },
    deleteContact(itemId){
      if(itemId<this.selectedItemId){
        this.selectedItemId--
      }
      for(let i=itemId; i<this.contacts.length-1; i++){
        this.contacts[i]=this.contacts[i+1]
        this.contacts[i].id--
      }
      this.contacts=this.contacts.slice(0, length-1)
      console.log(this.contacts.length)
    },
    cancel(){
      this.$emit("cancelChat", true)
    },
    handleClose() {
      this.$emit('close'); // 发出 close 事件
    },
  },
};
</script>

<style scoped>
.chat-back{
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px); /* 这里的值可以根据你的需求调整模糊程度 */
  background: rgba(0, 0, 0, 0.5);
  //display: flex;
  //justify-content: center
}

.chat-container {
  border: 1px solid #ddd;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 60vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  overflow: auto; /* 显示滚动条 */
  max-height: 70vh; /* 设置最大高度，超过部分出现滚动条 */
  padding: 10px;
  background-color: #f4f4f4;
}

.chat-messages::-webkit-scrollbar {
  width: 4px; /* 设置滚动条宽度 */
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: #D2D2D2; /* 设置滚动条滑块颜色 */
  border-radius: 8px;
}

.chat-messages::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* 设置滚动条轨道颜色 */
}

.chat-header {
  background-color: #f4f4f4;
  font-weight: bolder;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid rgba(77, 71, 81, 0.2);
}
.confirm {
  display: flex;
  align-items: center;
  height: 80px;
  //background: #f4f4f4;
  background: white;
  border-bottom: 1px solid rgba(77, 71, 81, 0.2);
}
.button {
  margin-top: 4px;
  margin-right: 10%;
  font-size: 18px;
  width: 15%;
  height: 40px;
  background: #6504B5;
  /*background-color: #6504B5;*/
  color: #fff;
  border: none;
}
.button:hover {
  background-color: #2e0152;
  color: white;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-message {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  //box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.my-message {
  border: none;
  align-self: flex-end;
  justify-content: end;
  //background-color: #4CAF50;
  //color: white;
}

.other-message {
  align-self: flex-start;
  //background-color: #ddd;
}

.other-avatar {
  margin-right: 10px;
}

.my-avatar {
  margin-left: 10px;
}

.message-content {
  word-wrap: break-word;
  padding:10px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 5px;
  max-width: 500px;
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #f4f4f4;
  border-top: 1px solid #ddd;
  margin-top: auto; /* 使输入框固定在底部 */
  z-index: 100 ;
}

.send-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.send-button {
  width: 15%;
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  background-color: purple;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #3c036a;
}

.time{
  color: darkgrey;
}

.contact-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.aside{
  background-color: white;
  height: 80vh;
  border: 1px solid #ddd;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.info{
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-bottom: 12px;
}

.contact-item{
  border-radius: 5px;
  padding: 10px;
  //margin-bottom: 10px;
  display: flex;
  //align-items: center;
}


.delete-icon{
  visibility: hidden;
}

.visible{
  visibility: visible;
}

.delete-icon :hover{
  fill: crimson;
}

.chat-list{
  flex: 1;
  overflow: hidden; /* 显示滚动条 */
  max-height: 80vh; /* 设置最大高度，超过部分出现滚动条 */
}

.chat-list:hover {
  overflow-y: auto;
}

.chat-list::-webkit-scrollbar {
  width: 4px; /* 设置滚动条宽度 */
}

.chat-list::-webkit-scrollbar-thumb {
  background-color: #D2D2D2; /* 设置滚动条滑块颜色 */
  border-radius: 4px;
}

.chat-list::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* 设置滚动条轨道颜色 */
}

.contact-name{
  text-align: left;
  color: #333;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 110px;
}

.last-message{
  text-align: left;
  color: #8a8a8a;
  -webkit-flex: 150px;
  -ms-flex: 150px;
  flex: 150px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.last-time{
  color: #8a8a8a;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  letter-spacing: 0;
  text-align: right;
}

.message{
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.cancel-icon :hover{
  fill: #3c036a;
}

.selected {
  background-color: #C4C4C4; /* 选中时的背景颜色 */
}

.changeColor{
  background-color: #EBE8E7;
}

</style>
