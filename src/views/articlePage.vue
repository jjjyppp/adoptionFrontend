<template>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <body style="background: #f0f0f0; min-height: 1150px;align-items: center;justify-content: center;">
  <div class="contentcontainer">
    <div class="contentdiv">
      <div style="margin-bottom: 20px">
        <el-card class="article-card">
          <template #header>
            <span class="article-title">{{articles[index].header}}</span>
          </template>
          <img :src="articles[index].src" class="article-img" alt="">
          <p class="article-content">{{articles[index].content}}</p>
        </el-card>
      </div>
    </div>
  </div>
  <div class="recent">
    <div class="rec-sec">
      <p class="recent-text">最近浏览过的宠物</p>
      <div class="rec-cards">
        <pet-display-card style="margin-left: 15px"  v-for="(pet, index) in recent_pets" :key="index" :pet="pet" />
      </div>
    </div>
  </div>
  </body>
  <FooterCard></FooterCard>
</template>

<script>
import { ElBreadcrumb, ElBreadcrumbItem, ElCard } from 'element-plus';
import HeaderTag from "@/components/HeaderTag.vue";
import FooterCard from "@/components/FooterCard.vue";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import router from "@/router";

export default {
  components: {PetDisplayCard, ElBreadcrumb, ElBreadcrumbItem, HeaderTag, FooterCard, ElCard },
  data() {
    return {
      articles:[
        {
          src: 'src/assets/imgs/article1.jpg',
          header: '宠物科普 | 为何人人都需要一只宠物',
          content: '相信有许多人仍无法理解领养的意义和缘由，有些人更是质疑领养需要的符合条件。\n' +
              '\n' +
              '甚至会认为如此高的门槛，还不如直接购买干脆。\n' +
              '\n' +
              '首先要先了解为什么会提倡"领养代替购买"，领养有什么好处？\n' +
              '1、至少限度能减少了一只可怜的流浪猫狗，让它能重回家庭，帮助它重获新生。\n' +
              '"如果能有家，谁会愿意颠沛流离？"，哪怕是无法言喻表达的动物们，家—是它们一生的渴望！\n' +
              '2、没有买卖就伤害\n' +
              '被贩卖的猫狗，无非是繁殖用于卖钱的商品，它们的背后是长期被关、反复交配和生产，本体营养和寿命变成商人手中的钱，直到它们失去利用价值，再为了减少喂养成本被遗弃或杀死。而领养除了可以节省购买费用，还能避免买到有问题的商业繁殖猫狗，减少对活体猫狗繁殖买卖经济的鼓励，减少了无良繁殖场的收益，让更少的动物被关起来繁殖卖崽。\n' +
              '3、健康\n' +
              '大多数被救助的流浪动物都经过救助人的照料和治疗，待身体恢复健康后，才接受领养。\n' +
              '4、足够时间考虑\n' +
              '在领养审核过程中，有足够的时候让领养人认真考量清楚自己是否适合养宠，避免了因一时冲动后发生因各种原因而导致退却、弃养，遗弃等问题。\n' +
              '\n' +
              '为什么领养的门槛这么高呢?\n' +
              '现社会那么多的流浪猫狗基本都是人为随意遗弃抛弃等所造成的恶果，救助流浪猫狗并非易事。\n' +
              '有些流浪猫狗在被救助时，多数都是生病了受伤了，有些甚至只剩下一口气。\n' +
              '而救助人花费不小心力和金钱才把它们从生死边缘救回来。\n' +
              '而高的门槛，可以筛选出更适合的领养人，避免了一时冲动或是别有用心的领养人。\n' +
              '\n' +
              '不管是购买的还是领养的，一旦养了，请好好照顾它吧！\n' +
              '\n'
        },
        {
          src: 'src/assets/imgs/article2.png',
          header: '宠物科普 | 为何人人都需要一只宠物',
          content: '2021年，随着冬季疫情出现局部扩散，防控措施再度强化，其中，"隔离允许带宠物"的人性化政策获点赞，反映了宠物对于家庭的意义。越是在特殊时期，主人与宠物相互扶持的情谊越显重要。人宠之间的情感牵绊，支撑着彼此的生活。为何宠物对我们如此重要？不考虑源于本能的喜爱因素，宠物给我们的生活带来了哪些益处？\n' +
              '\n' +
              '从幼儿到老人，宠物无差别守护家人健康\n' +
              '养宠物如同家里多了位家人，但与此同时，宠主也要照顾其他家庭成员的需求，上到银发苍苍的老人，下到蹒跚学步的婴儿，是否会因养宠造成困扰？比如不少家庭在女主人怀孕后会送走宠物。这种做法其实源于错误的认知。大部分人选择养宠时，可能并未意识到宠物对家人健康的积极影响。大量的科学研究已证实，宠物在改善人类体质、降低患病风险、促进长寿等方面发挥了巨大能量。\n' +
              '\n' +
              '加拿大艾伯塔大学一项最新研究显示，一些养狗家庭的婴儿患过敏性疾病和肥胖症的几率更低。研究人员采样发现，从母亲怀孕到婴儿3个月期间，家中有宠物的婴儿，肠道内瘤胃球菌和颤螺菌数量会增加，这两种有益菌来自宠物身上，可分别降低儿童过敏性疾病和肥胖症的风险。\n' +
              '\n' +
              '瑞典一项始于2001年的长期跟踪研究发现，养狗的主人患心血管病几率较低。家中至少有一只狗的主人罹患心脏病死亡的概率比独居者少33%，患心血管疾病风险降低了36%。美国明尼苏达大学一项研究结果显示，养猫的人遭遇致命心脏病发作的几率比不养猫的人低40％。美国加州大学、斯坦福大学研究人员发现，经常和狗在一起，能增强免疫力，患非霍奇金淋巴瘤的风险降低30%。\n' +
              '\n' +
              '养宠改变了宠主的生活与社交方式，尤其是活泼好动的狗，帮助主人告别宅居习惯，增加户外活动、健走等频次，同时纾解了压力，进而降低主人罹患疾病的风险，养宠者因此更长寿，生活品质更高。从幼儿到老人，都能获得宠物的守护。\n' +
              '\n' +
              '高压时代，找到治愈心灵的情绪良药\n' +
              '当下，每个人都处在巨大的压力旋涡中，竞争氛围不仅存在于成年人之间，也蔓延至年纪更小的青少年群体，每个家庭背负着焦虑拼命催娃奋进。由此造成系列社会问题，儿童心理问题频发。成人和孩子，都需要治愈。宠物，是最易觅得的一剂情绪良药。\n' +
              '\n' +
              '《儿科研究》（Pediatric Research）上的一项研究显示，养狗家庭的幼童社交与情绪健康状况优于未养狗家庭中的幼童。相较之下，前者比后者在情绪和社交互动上遇到困难的几率低23%，出现反社会行为的几率低30%，与其他孩子互动出现问题的几率低40%，而表现出友好社交行为的几率高34%。\n' +
              '\n' +
              '众多研究表明，宠物可以帮助儿童培养责任感、同理心和独立性格，发展语言技能、社交技能等，还会塑造其自尊、自信、善良、信任等品质。\n' +
              '对于处于压力风暴中的成年人而言，宠物是黯淡的重压生活中一抹亮色，可以帮助自己排遣孤独感，消解压力与负面情绪，改善睡眠质量，甚至改变情绪障碍、抑郁、自卑等，找到生活的平衡感与幸福感。\n' +
              '\n' +
              '宠物是人类身心健康的忠实卫士，我们需要它们的陪伴。它们，让生活更美好，值得被更好地对待。\n' +
              '\n'
        },
        {
          src: 'src/assets/imgs/article3.jpg',
          header: '如果决定接纳一条生命，就请陪它一生',
          content: '随着中国经济的增长，宠物行业得到了迅猛的发展，人们饲养宠物已经由单纯的玩赏而转变成人们精神的一种寄托，宠物的角色也悄然发生着变化，已经日益成为人们生活的伴侣，在促进和谐社会发挥着不可替代的调节作用，越来越多的人开始养宠物，其中以猫狗为主。2019年，全国犬猫养宠人数达6120万人。\n' +
              '\n' +
              '看着身边的朋友同事都拥有属于自己的宠物，你是不是在心里蠢蠢欲动。\n' +
              '\n' +
              '可是，你在带它回家前，所有的问题，都周密地考虑清楚了么？\n' +
              '\n' +
              '领养前的准备:\n' +
              '1.明确内心想要领养的真正原因\n' +
              '●你是觉得网上的宠物很好玩还是真的想养一只宠物作为陪伴，一定要想清楚。领养最怕三分钟热度和反悔。\n' +
              '●你是觉得别人都有宠物自己也应该有一只，还是看到别人发的宠物十分有趣，很好玩呢？还是真的需要和它成为家人与它为伴？\n' +
              '（领养最忌讳的是不负责任的一时兴起）\n' +
              '\n' +
              '2.如果你已知确认想给小流浪一个永远的家，你需要知道\n' +
              '●你有固定的居所以及稳定经济来源，承担起你们彼此的日常开销。\n' +
              '●你愿意和它成为家人，从今天开始相互拥有，相互陪伴，无论是好是坏、富裕或贫穷、疾病还是健康都彼此珍惜，你要对它不离不弃，善始善终。\n' +
              '●你的家庭成员支持与你一同照顾它，不会因为它的到来产生家庭纠纷与矛盾。\n' +
              '●家里拥有足够合适空间给予它活动。\n' +
              '●你的工作不会影响对它正常的照顾。\n' +
              '●你确定不因出差，旅游，工作调动，结婚，生子，过年回家，家庭住址变迁等因素将它弃养。\n' +
              '●你知道它性格或不良习惯可能会造成你生活的麻烦，你有耐心对它进行指导纠正它的行为习惯。\n' +
              '●你了解它会生病，并确定有能力并愿意支付可能的医疗费用。\n' +
              '●它和你一样害怕孤单，在你丰富的生活中，你确定不会因为社交而将它冷落。\n' +
              '\n' +
              '3.你对猫猫狗狗都有哪些基本了解呢？\n' +
              '▲家养的狗狗平均寿命是10-15年，猫咪平均寿命13-17年。\n' +
              '▲小型犬相较于大型犬性格更活泼好动，比较爱叫。\n' +
              '▲1岁以前它们对所有事物充满好奇，是个拆家小能手。还没养成固定习惯前，他们可能会在家里随处大小便。\n' +
              '▲住在楼层高的养猫家长需要时刻注意窗户是否关严，安全措施是否做好。许多猫咪由于高空坠楼导致死亡的案件屡屡发生。\n' +
              '▲即使再乖的狗狗出门一定系好牵引绳，百分之90遭到车祸的狗狗，家长都以为它们非常听话并且不会乱跑。其中占比最大的品种是泰迪犬。\n' +
              '▲它们不能吃过咸的食物，否则会增加肾脏负担，影响身体健康。\n' +
              '▲它们需要定期驱虫及免疫，否则容易因抵抗力不够而生病。\n' +
              '▲猫咪相较狗狗更敏感，易发生应激。寄养，洗澡，搬家，家里有到访者，有其他宠物进入家庭，很容易对猫产生影响。\n' +
              '▲它们成年后如果没有繁殖计划尽早做绝育。避免患上生理方面疾病。\n' +
              '▲狗狗不能吃不经处理的禽类骨头，尖而硬的骨头非常容易将肠道划伤。\n' +
              '▲养猫家庭需要给猫咪配备猫抓板，它们可以通过磨爪行为缓解压力。\n' +
              '▲相对于吃什么价位的粮食存在争议，它们的食盆卫生更应该引起注意，需要每日清洗，避免因残留粮食放置时间长产生黄曲霉素危害宠物健康。\n' +
              '▲猫咪怕冷，家长一定注意天气变化给它们做好保暖工作。\n' +
              '▲许多城市推行养狗家庭办理养犬证政策，家长不要忽视，请配合办理。\n' +
              '▲它们的正常体温基本在38-39摄氏度之间，它们一旦出现精神不振，食欲不佳，嗜睡等情况，请及时为它们测量体温，并联系兽医进行看诊。\n' +
              '\n' +
              '杜绝因"时尚"，"所见所闻"而领养。这些领养的原因很大可能会在热度后将其抛弃。\n' +
              '\n' +
              '一时的兴起只因为你处于看到"美好一面"的时刻，但它们终有"不足"。\n' +
              '\n' +
              '这些"不足"能被你包容和接纳，才是领养必备心理要素。\n' +
              '\n' +
              '它们可能没有其他孩子幸运\n' +
              '\n' +
              '一出生就锦衣玉食\n' +
              '\n' +
              '还好和你相遇\n' +
              '\n' +
              '让它们获得新生\n' +
              '\n' +
              '谢谢你为它们给予的爱和帮助。'
        }

      ],
      recent_pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/indir.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/indir.jpg' },
        { id: 5, name: '猫猫5', age: "6岁", location: '南京', imageUrl: 'src/views/assets/img/cat1.jpg' },
      ],
      index:0
    };
  },
  mounted() {
    this.index = router.currentRoute.value.query.index;
    console.log(this.index)
  }
}

</script>

<style scoped>
.recent{
  text-align: center;
  margin-top: 20px;
  padding-bottom: 100px;
}

.recent-text{
  line-height: 1.2;
  color: #6504b5;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

.rec-cards{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.article-card{
  height: 70%;
  text-align: center;
  border-radius: 10px;
}
.contentcontainer {
  width: 100%;
  padding: 120px;
}
.contentdiv {
  margin: 0 auto;
  width: 85%;
  text-align: left;
}
.article-title{
  font-weight: 600;
  color: #4d4751;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
  line-height: 1.2;
}
.article-img{
  width: 600px;
}
.article-content{
  margin-top: 20px;
  text-align: left;
  line-height: 35px;
  white-space: pre-line;
  font-size: 20px;
}
</style>