<template>
  <el-container>
    <el-aside style="background-color: #dbd9d9">
      <div class="chat-list">
        <div v-for="contact in contacts" :key="contact.id" ref="contact" @click="selectContact(contact.id)" class="contact-item" :class="{ 'selected': selectedItemId === contact.id, 'changeColor': changeColorId === contact.id }"  @mouseover="mouseOver(contact.id)" @mouseleave="mouseLeave(contact.id)">
          <img src="../assets/imgs/avatar1.jpg" alt="avatar" class="contact-avatar" />
          <div style="margin-left: 10px;width: 214px;}">
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
    </el-aside>
    <el-main style="padding: 0">
      <div class="chat-container">
        <div class="chat-header">{{contacts[selectedItemId].name}}</div>
        <div class="chat-messages" ref="messageContainer">
          <div v-for="message in messages" :key="message.id" class="chat-message" :class="{ 'my-message': message.isMe, 'other-message': !message.isMe }">
            <div v-if="!message.isMe" style="display: flex">
              <img src='../assets/imgs/avatar1.jpg' alt="avatar" class="avatar other-avatar"/>
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
              <img src="../assets/imgs/avatar2.jpg" alt="avatar" class="avatar my-avatar" />
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input class="send-input" v-model="newMessage" @keyup.enter="sendMessage" placeholder="输入消息..." />
          <button class="send-button" @click="sendMessage">发送</button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import DetailCard from "@/components/DetailCard.vue";
import {ElAside, ElContainer, ElDivider, ElMain} from "element-plus";

export default {
  components: {DetailCard, ElContainer, ElAside, ElMain, ElDivider},
  data() {
    return {
      messages: [
        { id: 0, isMe: true, content: '在吗？', date: "2023-12-01", time:"09:40:03" },
        { id: 1, isMe: false, content: '您好！请问有什么问题可以帮您解答？', date: "2023-12-01", time:"09:50:03"  }
      ],
      newMessage: '',
      contacts: [
        { id: 0, name: '用户1', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "9:50" },
        { id: 1, name: '用户2', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "8:00" },
        { id: 2, name: '用户3', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "6:50" },
        { id: 3, name: '用户4', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "2023-11-29" },
        { id: 4, name: '用户5', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "2023-11-29" },
        { id: 5, name: '用户6', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "2023-11-28" },
        { id: 6, name: '用户7', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "2023-11-28" },
        { id: 7, name: '用户8', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "2023-11-27" },
        { id: 8, name: '用户9', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "2023-11-26" },
        { id: 9, name: '用户10', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "2023-11-25" },
        { id: 10, name: '用户11', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容1', lastTime: "2023-11-24" },
        { id: 11, name: '用户12', avatar: '../assets/imgs/avatar1.jpg', lastMessage: '最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2最近的消息内容2', lastTime: "2023-10-01" },
      ],
      selectedItemId: 0,
      hoverItemId: -1,
      changeColorId: -1
    };
  },
  methods: {
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
    }
  },
};
</script>

<style scoped>
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
  overflow-y: auto; /* 显示滚动条 */
  max-height: 70vh; /* 设置最大高度，超过部分出现滚动条 */
  padding: 10px;
  background-color: #f4f4f4;
}

.chat-messages::-webkit-scrollbar {
  width: 4px; /* 设置滚动条宽度 */
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: #6504B5; /* 设置滚动条滑块颜色 */
  border-radius: 8px;
}

.chat-messages::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* 设置滚动条轨道颜色 */
}

.chat-header {
  background-color: #6504B5;
  color: white;
  padding: 10px;
  text-align: center;
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
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: #6504B5;
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

aside{
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
  background-color: #6504B5; /* 设置滚动条滑块颜色 */
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

.selected {
  background-color: #C8BFE7; /* 选中时的背景颜色 */
}

.changeColor{
  background-color: #F9F3FE;
}

</style>
