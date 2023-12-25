<template>
  <teleport to="body">
    <el-dialog
        :title="dialogTitle"
        v-if="dialogVisible"
        v-model="dialogVisible"
        width="40%"
        typeof="warning"
        style="padding: 18px"
    >
      <!-- 根据选中项显示不同的弹窗内容 -->
      <p v-if="selectedValue === '领养的具体流程'" style="font-size: 17px; text-align: left">
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
      </p>
      <p v-if="selectedValue === '送养的具体流程'" style="font-size: 17px; text-align: left">
        <p style="font-size: 17px;text-align: left">A：</p>
        <p style="font-size: 17px;text-align: left">感谢您选择使用PetPat，为宠物寻找一个温暖的新家。以下是送养的具体流程，希望这些步骤可以帮助您成功地将宠物送到有爱心的新家。</p>
        <p style="font-size: 17px;text-align: left">1. 登录并上传宠物信息： 首先，请登录您的账户，然后点击“我要送养”按钮。按照系统提示填写宠物的详细信息，包括种类、年龄、性别、健康状况等，并上传照片。</p>
        <p style="font-size: 17px;text-align: left">2. 审核发布： 提交宠物信息后，我们的团队将会审核您的发布内容，以确保信息的真实性和完整性。一旦审核通过，您的宠物信息将在网站上显示。</p>
        <p style="font-size: 17px;text-align: left">3. 等待领养申请： 一旦您的宠物信息上线，感兴趣的领养者将可以看到它。当有领养者提交领养申请时，系统将立即通知您。</p>
        <p style="font-size: 17px;text-align: left">4. 私聊领养者： 您可以通过站内信与领养者进行私聊，了解他们的居住环境、饲养经验以及对宠物的态度。确保双方在领养决策上有清晰的了解。</p>
        <p style="font-size: 17px;text-align: left">5. 确认领养者： 在与领养者充分沟通并确保他们能够提供良好的饲养环境后，您可以选择确认领养。这将通知领养者进行支付(如需）。</p>
        <p style="font-size: 17px;text-align: left">6. 完成送养： 领养者支付成功（如有）后，您和领养者可以协商具体的交接时间和地点。请确保在交接时提供一份宠物的健康证明和相关资料。</p>
        <p style="font-size: 17px;text-align: left">感谢您为宠物的幸福贡献力量！如果您有任何疑问或需要帮助，请随时联系我们的客服团队。祝您的宠物找到一个幸福的新家！</p>
      </p>
      <p v-if="selectedValue === '网站如何保障领养双方顺利交易'" style="font-size: 17px; text-align: left">
        <p style="font-size: 17px;text-align: left">A：</p>
        <p style="font-size: 17px;text-align: left">1. 身份验证与审核： 请确保您的个人信息得到验证，并上传宠物的真实信息和照片。 我们进行身份验证和信息审核，以提高领养双方的安全性。</p>
        <p style="font-size: 17px;text-align: left">2. 站内信沟通： 使用我们的站内信系统进行沟通，以确保交流记录被记录，作为潜在的证据。 </p>
        <p style="font-size: 17px;text-align: left">3. 安全交易推荐： 建议在公共场所进行交易，例如宠物商店、社区中心等，以增加交易的安全性。请警惕在陌生环境中的交易，确保双方都感到安全。</p>
        <p style="font-size: 17px;text-align: left">4. 第三方支付和担保交易： 考虑使用第三方支付或担保交易服务，确保支付的安全性。这有助于减少欺诈风险，为交易双方提供额外的信任保障。</p>
        <p style="font-size: 17px;text-align: left">5. 宠物信息透明度： 提供详细的宠物档案，包括健康状况、疫苗情况等。请确保宠物信息的透明度，让领养者能够充分了解宠物的背景。</p>
        <p style="font-size: 17px;text-align: left">6. 法律合规与服务条款： 了解并遵守我们的服务条款和法律法规。 我们致力于提供合法、透明和受保护的领养平台。</p>
        <p style="font-size: 17px;text-align: left">7. 教育用户与安全指南： 阅读我们的安全指南，了解如何在网站上进行安全的领养交易。 教育自己和其他用户，共同创建一个安全可靠的社区。</p>
        <p style="font-size: 17px;text-align: left">8. 高效的客服支持： 我们提供高效的客服支持，帮助您解决在交易过程中遇到的问题。 有问题时，请随时联系我们的客服团队。</p>
      </p>
      <p v-if="selectedValue === '领养到有问题的宠物怎么办'" style="font-size: 17px; text-align: left">
        <p style="font-size: 17px;text-align: left">A：</p>
        <p style="font-size: 17px;text-align: left">1. 立即联系卖家： 如果您在领养后发现宠物存在健康或行为问题，请立即联系卖家。通过站内客服系统详细描述问题，并要求提供任何可能有助于解决问题的信息。</p>
        <p style="font-size: 17px;text-align: left">2. 请求兽医证明： 如果问题涉及宠物的健康状况，请要求卖家提供兽医证明或之前的健康检查记录。这有助于您更全面地了解宠物的状况。</p>
        <p style="font-size: 17px;text-align: left">3. 拍照和记录问题： 拍摄照片或录制视频，记录宠物存在的问题。这将为您提供证据，并在需要时与卖家、兽医或网站客服共享。</p>
        <p style="font-size: 17px;text-align: left">4. 联系网站客服： 如果您无法解决问题，立即联系网站客服。提供详细的情况说明和相关证据，以便客服团队协助您处理纠纷并提供解决方案。</p>
        <p style="font-size: 17px;text-align: left">5. 考虑退还宠物： 如果问题无法解决且符合网站的退还政策，您可能需要考虑将宠物退还给卖家。在此之前，请确保您已经与卖家协商好具体的退还事宜。</p>
        <p style="font-size: 17px;text-align: left">6. 留下评价与反馈： 一旦问题解决，或者在网站客服的协助下得到解决，您可以考虑在网站上留下评价和反馈。这有助于其他用户了解卖家的信誉和宠物的实际状况。</p>
        <p style="font-size: 17px;text-align: left">7. 学习和预防： 总结经验，了解问题的根本原因，并在将来的领养中采取预防措施。这可能包括更仔细的调查、要求更多的信息或选择更有经验的卖家。</p>
      </p>
      <p v-if="selectedValue === '宠物没有被领养人善待怎么办'" style="font-size: 17px; text-align: left">
        <p style="font-size: 17px;text-align: left">A：</p>
        <p style="font-size: 17px;text-align: left">1. 立即联系领养人： 如果您担心领养到的宠物没有被善待，请立即通过站内信联系领养人。尽量以理性和冷静的态度表达您的关切，并要求解释相关情况。</p>
        <p style="font-size: 17px;text-align: left">2. 要求详细描述状况： 要求领养人详细描述宠物的日常生活条件、饮食习惯和任何可能的健康问题。这将帮助您了解状况的全貌。</p>
        <p style="font-size: 17px;text-align: left">3. 提供建议与指导： 如果可能，为领养人提供合适的建议和指导，帮助他们更好地照顾宠物。可能是关于饮食、环境、训练等方面的建议。</p>
        <p style="font-size: 17px;text-align: left">4. 寻求网站客服协助： 如果您无法通过站内信解决问题，立即联系网站客服。提供详细的信息和证据，让客服团队介入并尽快采取措施。</p>
        <p style="font-size: 17px;text-align: left">5. 报告虐待行为： 如果有证据表明宠物受到虐待，请立即报告给当地的动物保护组织、动物控制机构或警方。虐待行为是违法的，需要得到及时处理。</p>
        <p style="font-size: 17px;text-align: left">6. 兽医检查： 如果您担心宠物的健康状况，请考虑带宠物去兽医那里进行检查。兽医的专业意见可以作为处理纠纷的重要证据。</p>
        <p style="font-size: 17px;text-align: left">7. 寻求法律建议： 如果纠纷仍未解决，考虑咨询专业的法律顾问，了解您的权利和可行的法律途径。</p>
        <p style="font-size: 17px;text-align: left">请记住，宠物福利是第一位的，如果您有任何疑虑，请及时采取行动。网站客服团队将竭尽所能协助解决问题，同时也建议您与相关法律和动物保护组织合作，确保宠物得到妥善照顾。</p>
      </p>
      <p v-if="selectedValue === '如何挑选适合我的宠物'" style="font-size: 17px; text-align: left">
        <p style="font-size: 17px;text-align: left">A：</p>
        <p style="font-size: 17px;text-align: left">1. 了解自己的生活方式： 考虑自己的生活节奏、工作时间、家庭成员等因素。选择一只与您的生活方式相匹配的宠物，以确保它能够融入您的日常生活。</p>
        <p style="font-size: 17px;text-align: left">2. 考虑宠物的大小和活动水平： 不同品种的宠物有不同的大小和活动水平。确保您有足够的空间和时间来满足宠物的需求。一些品种可能需要更多的运动和活动。</p>
        <p style="font-size: 17px;text-align: left">3. 了解宠物的饲养需求： 每种宠物都有其特定的饲养需求，包括饮食、卫生、医疗等。确保您具备提供这些需求的能力和责任心。</p>
        <p style="font-size: 17px;text-align: left">4. 考虑宠物的寿命： 不同宠物的寿命差异较大。选择一只宠物时，请考虑您对长期责任的承诺，确保您有足够的时间和资源来照顾宠物的整个生命周期。</p>
        <p style="font-size: 17px;text-align: left">5. 了解宠物的性格特征： 不同的宠物品种有不同的性格特征。一些可能需要更多的关爱和陪伴，而另一些可能更独立。选择与您相符合的宠物性格。</p>
        <p style="font-size: 17px;text-align: left">6. 考虑过敏和健康问题： 考虑家庭成员是否对宠物过敏，以及是否有家庭成员有慢性疾病，这可能影响您选择宠物的决策。</p>
        <p style="font-size: 17px;text-align: left">7. 咨询专业人士： 在选择宠物前，咨询兽医、宠物顾问或其他专业人士。他们可以为您提供关于不同宠物品种的信息，帮助您做出明智的决策。</p>
        <p style="font-size: 17px;text-align: left">8. 领养代替购买： 考虑领养宠物，给流浪动物一个新的家。领养中心通常有各种品种和年龄的宠物，您可以找到一个适合您的新伙伴。</p>
        <p style="font-size: 17px;text-align: left">9. 慎重考虑： 选择宠物是一项长期承诺。慎重考虑您的决定，确保您对宠物的需求和责任心有充分的认识。</p>
      </p>
      <p v-if="selectedValue === '领养人需要具备什么条件'" style="font-size: 17px; text-align: left">
      <p style="font-size: 17px;text-align: left">A：</p>
      <p style="font-size: 17px;text-align: left">领养宠物是一项需要责任心和考虑周到的决定。领养人需要具备一系列条件，以确保他们能够提供宠物所需的照顾和爱护。以下是一些领养宠物时需要具备的条件：</p>
      <p style="font-size: 17px;text-align: left">1. 经济能力： 领养人需要有足够的经济能力来负担宠物的饲养费用，包括食物、医疗、保健品等。宠物的生活费用随其种类和健康状况而异。</p>
      <p style="font-size: 17px;text-align: left">2. 时间和精力： 宠物需要花费时间和精力进行陪伴、训练和游戏。领养人需要确保他们有足够的时间来满足宠物的社交和活动需求。</p>
      <p style="font-size: 17px;text-align: left">3. 空间和居住环境： 不同品种的宠物需要不同的居住环境和空间。领养人应确保自己的居住条件适合所选择的宠物，例如是否有足够的户外空间、宠物友好的住房等。</p>
      <p style="font-size: 17px;text-align: left">4. 责任心： 领养人需要有强烈的责任心，愿意承担照顾宠物的责任。这包括提供适当的饮食、定期的兽医检查、必要的训练等。</p>
      <p style="font-size: 17px;text-align: left">5. 家庭同意： 如果领养人共同居住，需要确保家庭中的每个成员都同意并能够投入到宠物的照顾中。这有助于建立宠物与家庭成员之间的良好关系。</p>
      <p style="font-size: 17px;text-align: left">6. 了解宠物需求： 领养人需要有足够的知识了解所选择宠物的特点、饲养需求、行为习惯等。这有助于提供更好的照顾和理解宠物。</p>
      <p style="font-size: 17px;text-align: left">7. 兽医保健： 领养人需要有意愿提供宠物定期的兽医保健，包括疫苗接种、体检、预防措施等，以确保宠物的健康状况。</p>
      <p style="font-size: 17px;text-align: left">8. 长期承诺： 领养是一项长期承诺，领养人需要有长远的计划和意愿，愿意陪伴宠物度过整个生命周期。</p>
      <p style="font-size: 17px;text-align: left">9. 法规遵守： 领养人需要遵守当地和国家的相关法规和规定，包括宠物登记、兽医保健等方面的法律要求。</p>
      <p style="font-size: 17px;text-align: left">10.情感支持： 宠物是需要关爱和陪伴的生命，领养人需要能够提供充足的爱与情感支持。</p>
      <p style="font-size: 17px;text-align: left">如果具备这些条件，领养人就可以更好地满足宠物的需求，确保它们在一个温馨、健康的家庭中得到适当的关心和照顾。</p>
      </p>
      <!-- 其他选项的欢迎消息... -->
    </el-dialog>
  </teleport>
  <div style="width: 100%; position: fixed; top: 0; background-color: white; z-index: 100">
    <header-tag></header-tag>
  </div>
  <div style="background-color: #EFEEF1; margin-top: -1px">
    <div class="background" style="margin-top:61px">
      <div class="quick-search">
        <div class="text">
          <span>快速搜索</span>
        </div>
        <div style="margin-left: 120px; width: 600px">
          <el-row class="autocomplete">
            <el-col :span="12">
              <el-autocomplete
                  class="inline-input"
                  v-model="searchContent"
                  :fetch-suggestions="querySearch"
                  @select="handleSelect"
              ></el-autocomplete>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: -50px; margin-left: 748px">
          <button class="quick-search-bt" @click="openDialog">
            <svg x="1700709169066" class="quick-search-img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="75" height="75"><path d="M447.325002 129.919978c-178.868807 0-323.872319 145.003512-323.872319 323.874365s145.003512 323.874365 323.872319 323.874365c178.870854 0 323.874365-145.003512 323.874365-323.874365S626.195855 129.919978 447.325002 129.919978zM447.325002 713.712071c-143.31915 0-259.915681-116.598578-259.915681-259.917728s116.596532-259.917728 259.915681-259.917728 259.917728 116.598578 259.917728 259.917728S590.643128 713.712071 447.325002 713.712071z" p-id="4101"></path><path d="M891.573945 840.061734 748.236376 696.699606c-13.43601 16.625656-28.371164 31.91385-44.338834 46.099944l142.458549 142.481062c6.246261 6.246261 14.427594 9.368368 22.60995 9.368368s16.363689-3.123131 22.60995-9.368368C904.065444 872.789113 904.065444 852.553233 891.573945 840.061734z" p-id="4102"></path></svg>
          </button>
        </div>
      </div>
      <div class="slogan">
        <h1 class="title">你可以在这里找到你最好的朋友</h1>
        <p class="subTitle">这里有来自150000位用户的待领养宠物</p>
      </div>
    </div>
    <div class="choose">
      <div class="wrap">
        <ul class="list">
          <li>
            <button class="card-button" @click="searchDog">
              <img src="../assets/icons/dog.png" alt="" class="card-bt-img">
              <span class="card-text">宠物狗</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchCat">
              <img src="../assets/icons/cat.png" alt="" class="card-bt-img">
              <span class="card-text">宠物猫</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchRabbit">
              <img src="../assets/icons/rabbit.png" alt="" class="card-bt-img">
              <span class="card-text">兔子</span>
            </button>
          </li>
          <li>
            <button class="card-button" @click="searchOther">
              <img src="../assets/icons/other.png" alt="" class="card-bt-img">
              <span class="card-text">其他宠物</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="search">
      <div class="type">
        <img src="../assets/icons/dog.png" alt="" v-show="showDog">
        <img src="../assets/icons/cat.png" alt="" v-show="showCat">
        <img src="../assets/icons/rabbit.png" alt="" style="height: 160px; margin-top: -40px" v-show="showRabbit">
        <img src="../assets/icons/other.png" alt="" v-show="showOther">
      </div>
      <div style="z-index:0" >
        <search-card @backToHome="backToHome" id="search" v-show="show" :type="type"></search-card>
      </div>
    </div>
    <div style="margin-top: 180px;width: 80%;height:150px; margin-left: 10% ">
      <AdvertisementCardsLong></AdvertisementCardsLong>
    </div>

    <div class="recommend">
      <div class="rec-sec">
<!--        <el-link :underline="false" class="rec-text" @click="choose">它正等着你带它回家-->
<!--          <el-icon>-->
<!--            <ArrowRight class="arrow-right"/>-->
<!--          </el-icon>-->
<!--        </el-link>-->
        <el-link :underline="false" class="rec-text" @click.native="choose">它正等着你带它回家
          <el-icon>
            <ArrowRight class="arrow-right"/>
          </el-icon>
        </el-link>
        <div class="rec-cards">
          <pet-display-card style="margin-right: 15px"  v-for="(pet, index) in pets.slice(pets.length-4, pets.length)" :key="index" :pet="pet" />
          <more-animal-card style="margin-left: 15px"></more-animal-card>
        </div>
      </div>
    </div>
<!--    <div class="choose-animal-card" v-show="showChooseCard">-->
<!--      <choose-animal-card @backToHome="backToHomeHandler"></choose-animal-card>-->
<!--    </div>-->
    <div class="articles">
      <div style="padding-top: 30px">
        <h2 class="art-question">你准备领养一只宠物吗？</h2>
      </div>
      <div class="cards">
      <article-card v-for="(article, index) in articles" :key="index" :article="article" :index="index"></article-card>
      </div>
    </div>

    <div style="padding-top: 30px;background: transparent;margin-top: 60px">
      <h2 class="art-question">我们已经与这些机构达成合作：</h2>
      <div class="imageList" style="display: flex;margin-top: 20px">
        <p style="margin-right: 20px"></p>
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-WWF.jpg">
        <img  style="height: 170px;width: 210px;margin: 10px" src="../assets/imgs/Org.-bill_gates.jpg">
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-PETA.jpg">
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-animal_protection.jpg">
        <img  style="height: 170px;width: 270px;margin: 10px" src="../assets/imgs/Org.-ASPCA.jpg">
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-CSAPA.jpg">
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-shanghai.jpg">
        <img  style="height: 150px;width: 280px;margin: 15px" src="../assets/imgs/Org.-wuhan.png">
        <img  style="height: 170px;width: 170px;margin: 10px" src="../assets/imgs/Org.-nanjing.jpg">
        <p style="margin-left: 20px"></p>
      </div>
      <br>
    </div>


<!--    <div class="operation">-->
<!--    <div class="cards">-->
<!--      <personal-certification-card></personal-certification-card>-->
<!--    </div>-->
<!--    </div>-->
    <div class="recent">
      <div class="rec-sec">
        <p class="recent-text">最近浏览过的宠物</p>
        <div class="rec-cards">
          <pet-display-card style="margin-left: 15px"  v-for="(pet, index) in pets.slice(0, 5)" :key="index" :pet="pet" />
        </div>
      </div>
    </div>

    <div style="width: 90%;height:250px; margin-left: 5%;">
      <AdvertisementCardsLong2></AdvertisementCardsLong2>
    </div>
    <div style="height: 100px"></div>
  </div>



  <footer-card></footer-card>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import SearchCard from "@/components/SearchCard.vue";
import {Burger, Search, ArrowRight} from "@element-plus/icons-vue";
import {ElAutocomplete, ElCol, ElDivider, ElIcon, ElLink, ElRow,ElDialog} from "element-plus";
import PetDisplayCard from "@/components/PetDisplayCard.vue";
import MoreAnimalCard from "@/components/MoreAnimalCard.vue";
import more from "@element-plus/icons/lib/More";
import ArticleCard from "@/components/ArticleCard.vue";
import FooterCard from "@/components/FooterCard.vue";
import ChooseAnimalCard from "@/components/ChooseAnimalCard.vue";
import router from "@/router";
import {request} from "@/utils/request";
import CertificationCard from "@/components/CertificationCard.vue";
import PersonalCertificationCard from "@/components/PersonalCertificationCard.vue";
import AdvertisementCardsLong from "@/components/AdvertisementCardsLong.vue";
import AdvertisementCardsLong2 from "@/components/AdvertisementCardsLong2.vue";
export default {
  name: "homePage",
  computed: {
    more() {
      return more
    },
    dialogTitle() {
      switch (this.selectedValue) {
        case '领养的具体流程':
          return 'Q：领养的具体流程？';
        case '送养的具体流程':
          return 'Q：送养的具体流程？';
        case '网站如何保障领养双方顺利交易':
          return 'Q：网站如何保障领养双方顺利交易？';
        case '领养到有问题的宠物怎么办':
          return 'Q：领养到有问题的宠物怎么办？';
        case '宠物没有被领养人善待怎么办':
          return 'Q：宠物没有被领养人善待怎么办？';
        case '如何挑选适合我的宠物':
          return 'Q：如何挑选适合我的宠物？';
        case '领养人需要具备什么条件':
          return 'Q：领养人需要具备什么条件？';
        default:
          return "请输入搜索内容"; // 默认情况下返回空字符串
      }
    },
  },
  components:{
    AdvertisementCardsLong,
    AdvertisementCardsLong2,
    CertificationCard,
    FooterCard,
    ArticleCard,
    MoreAnimalCard,
    ArrowRight,
    ChooseAnimalCard,
    PetDisplayCard, Search, Burger, HeaderTag, SearchCard, ElDivider, ElRow, ElCol, ElLink, ElIcon, ElAutocomplete, ElDialog,PersonalCertificationCard},
  data(){
    return{
      dialogVisible:false,
      selectedValue: '', // 存储选中的值
      type:'',
      showChooseCard: false,
      dogPath:"src/assets/icons/dog.png",
      catPath:"src/assets/icons/cat.png",
      otherPath:"src/assets/icons/other.png",
      show: false,
      showDog: false,
      showCat: false,
      showRabbit: false,
      showOther: false,
      searchContent: "",
      searchChoice: [],
      pets: [],
      recommend_pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', urls: 'src/views/assets/img/indir.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
      ],
      recent_pets: [
        { id: 1, name: '猫猫1', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        { id: 2, name: '猫猫2', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
        { id: 3, name: '猫猫3', age: "6岁", location: '南京', urls: 'src/views/assets/img/indir.jpg' },
        { id: 4, name: '猫猫4', age: "6岁", location: '南京', urls: 'src/views/assets/img/indir.jpg' },
        { id: 5, name: '猫猫5', age: "6岁", location: '南京', urls: 'src/views/assets/img/cat1.jpg' },
      ],
      articles: [
        { id: 1, title: '为什么选择领养而非买卖？', subTitle: "我们要使领养过程更加方便和顺利，让领养代替买卖。", src: 'src/assets/icons/adopt.png' },
        { id: 2, title: '宠物科普 | 为何人人都需要一只宠物', subTitle: "养一只宠物吧~", src: 'src/assets/icons/help.png' },
        { id: 3, title: '如果决定接纳一条生命，就请陪它一生！', subTitle: "请不要随意地领养或弃养", src: 'src/assets/icons/shelter.png' },
      ]
    }
  },
  mounted() {
    this.searchChoice = this.loadAll();
    request({
      url: `http://localhost:8080/pets`,
      method: 'GET'
    }).then((res) => {
      console.log(res.data)
      this.pets=res.data
    }).catch((error) => {
    })
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    searchDog(){
      this.type='dog'
      this.show=true
      this.showDog=true
      this.showCat=false
      this.showRabbit=false
      this.showOther=false
    },
    searchCat(){
      this.type='cat'
      this.show=true
      this.showCat=true
      this.showDog=false
      this.showRabbit=false
      this.showOther=false
    },
    searchRabbit(){
      this.type='rabbit'
      this.show=true
      this.showRabbit=true
      this.showDog=false
      this.showCat=false
      this.showOther=false
    },
    searchOther(){
      this.type='other'
      this.show=true
      this.showOther=true
      this.showDog=false
      this.showCat=false
      this.showRabbit=false
    },
    backToHome(val){
      console.log(val)
      this.show=false;
      this.showDog=false;
      this.showCat=false;
      this.showRabbit=false;
      this.showOther=false
    },
    querySearch(queryString, cb) {
      var searchChoice = this.searchChoice;
      var results = queryString ? searchChoice.filter(this.createFilter(queryString)) : searchChoice;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (searchChoice) => {
        return (searchChoice.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "领养的具体流程"},
        { "value": "送养的具体流程"},
        { "value": "网站如何保障领养双方顺利交易"},
        { "value": "领养到有问题的宠物怎么办"},
        { "value": "宠物没有被领养人善待怎么办"},
        { "value": "如何挑选适合我的宠物"},
        { "value": "领养人需要具备什么条件"}
      ];
    },
    handleSelect(item) {
      console.log(item);
      this.selectedValue = item.value; // 记录选中的值
    },
    choose(){
      router.push({
        name:"adoptionPage"
      })
    },
  }
}
</script>


<style>
.quick-search{
  width: 800px;
  height: 60px;
  background-color: white;
  text-align:left;
  border-radius: 5px;
  display: inline-block;
  margin-top: -10px;
  //text-align: center;
}

.text{
  margin-top: 17px;
  position: absolute;
  font-size: 18px;
  color: #6504B5;
  //padding-top: 100px;
  margin-left: 20px;
}

.slogan{
  margin-bottom: 80px;
}

.quick-search-bt{
  background-color: #fff;
  //margin-left: 748px;
  //margin-top: -200px;
  border: none;
  border-radius: 5px;
  height: 44px;
  padding: 2px;
  width: 44px;
}

.quick-search-bt:hover{
  background-color: #6504B5;
  fill: white;
}

.quick-search-img{
  //fill: black;
  width: 100%;
  height: 100%;
}

.inline-input .el-input {
  width: 620px;
  height: 60px;
  font-size: 18px;
}

.title{
  color: white;
  font-size: 30px;
  font-weight: 700;
  padding: 0 40px;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;
  //margin-top: 100px;
  margin: 0;

}

.subTitle{
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 10px #4d4751, 0 0 4px #4d4751;

}

.background{
  display: grid;
  place-items: center;
  width: 100%;
  height: 450px;
  background: #6504b5 url("https://box.nju.edu.cn/thumbnail/134b204a714445f48f20/1024/background.jpg") no-repeat top;
  background-size: 100% 442px;
  text-align: center;
  //display: flex;
  justify-content: center;
  align-items: center;
}

.choose{
  align-items: center;
  box-sizing: border-box;
//display: flex;
//flex-direction: column; max-width: 812px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  z-index: auto;
  margin: -75px auto 15px auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //margin-right: 50px;
}

.list{
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  margin: unset;
  max-width: none;
  width: 100%;
}

.card-button{
  align-items: center;
  background: #fff;
  border: 1px solid #d2d1d3;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0,0,0,.05);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  text-decoration: none;
  width: 181px;
  height: 154px;
}

.card-button:hover{
  background-color: white;
  box-shadow: 0 0 0 3px #6504b5;
}

.card-bt-img {
  //fill: #6504b5;
  height: 90px;
  //width: 80%;
}


.type{
  //width: 180px;
  display: grid;
  place-items: center;
  margin-bottom: -150px;
  //margin-left: 358px;
  z-index:1;
  position: relative
}

.search{
  margin-top: -160px;
  //margin-left: 272px;
  //width: 900px;
  display: grid;
  place-items: center;
  //height: 500px;
  //background-color: inherit;
}

.card-text{
  color: #4d4751;
  text-align: center;
}

.recommend{
  text-align: center;
  margin-top: 40px;
  //background-color: #d2d1d3;
  //margin-bottom: 24px;
  //margin: 0 auto;
  //max-width: 1220px;
}

.rec-text{
  line-height: 1.2;
  color: #6504b5;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

.rec-text:hover{
  color: #3c036a;
  fill: #3c036a;
}

.arrow-right::before{
  font-weight: bold;
}

.rec-cards{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}

.art-question{
  line-height: 1.2;
  text-align: center;
  display: block;
  font-family: Nexa Regular,arial,helvetica,sans-serif;
  font-size: 30px;
}

.articles{
  background-color: white;
  margin-top: 60px;
  height: 500px;
}

.cards{
  display: flex;
  justify-content: center;
}

.recent{
  text-align: center;
  margin-top: 60px;
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

.choose-animal-card {
  position: fixed;
  top: 0;
  z-index: 50;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
}


.imageList{
  overflow-x: auto;
  overflow-y: hidden;
  height:210px;
  margin: 50px;
  display: flex;
  white-space: nowrap;
  background: white;
}

</style>