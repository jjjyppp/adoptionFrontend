<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/views/assets/css/main.css">
  </head>


  <section id="animal-detail">
    <div class="shelter-box py-5 px-4 ">
      <div class="img d-inline p-3" style=" border-radius: 50%; overflow: hidden; width: 104px; height: 104px">
        <img src="src/assets/imgs/avatar4.jpg" alt="" style="width: 120px; margin-left: -20px; margin-top: -20px; object-fit: cover;">
      </div>
      <h1 class="mt-3" style="font-size: 30px">Molly</h1>
      <h5 class="mt-3">福建 厦门</h5>

      <p><span class="pe-5"></span></p>
      <p class="mt-3" align="left"><span class="pe-4">
        <svg t="1703465400820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4217" width="30" height="30"><path d="M895.616384 347.812188q0 10.22977-0.511489 19.436563t-1.534466 19.436563q-9.206793 84.907093-37.338661 163.164835t-71.096903 150.377622-99.228771 138.613387-121.734266 127.872128q-9.206793 11.252747-23.528472 11.252747-15.344655 0-24.551449-11.252747-65.470529-61.378621-122.245754-128.895105t-100.251748-141.170829-71.608392-152.935065-36.315684-165.210789q0-8.183816-0.511489-15.344655t-0.511489-15.344655q0-71.608392 28.131868-135.032967t76.211788-110.481518 113.038961-74.677323 138.613387-27.62038 138.101898 27.62038 112.527473 74.677323 76.211788 110.481518 28.131868 135.032967zM540.643357 507.396603q33.758242 0 63.424575-12.787213t51.66034-34.26973 34.781219-50.637363 12.787213-61.89011-12.787213-61.89011-34.781219-50.637363-51.66034-34.26973-63.424575-12.787213-63.424575 12.787213-52.171828 34.26973-35.292707 50.637363-12.787213 61.89011 12.787213 61.89011 35.292707 50.637363 52.171828 34.26973 63.424575 12.787213z" p-id="4218" fill="#6504b5"></path></svg>
      </span>福建省厦门市集美区
      </p>
      <hr>
      <p align="left"><span class="pe-4">
        <svg t="1703466413167" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7255" width="30" height="30"><path d="M576.853333 474.453333l351.573334-331.093333c-17.066667-17.066667-40.96-27.306667-64.853334-27.306667h-699.733333c-27.306667 0-47.786667 10.24-64.853333 27.306667l351.573333 331.093333c34.133333 34.133333 88.746667 34.133333 126.293333 0z" p-id="7256" fill="#6504b5"></path><path d="M576.853333 580.266667c-34.133333 34.133333-92.16 34.133333-126.293333 0L68.266667 225.28v590.506667c0 51.2 40.96 92.16 92.16 92.16h699.733333c51.2 0 92.16-40.96 92.16-92.16V225.28l-375.466667 354.986667z" p-id="7257" fill="#6504b5"></path></svg>
      </span>1042822303@qq.com
      </p>
      <hr>
      <button   @click = "toOwnerPage" style="-webkit-appearance: none;
                                color: #6504B5;
                                width: 600px;
                                height: 40px;
                                background: transparent;
                                border: 2px solid #6504b5;
                                border-radius: 23px;
                                box-sizing: border-box;
                                cursor: pointer;
                                display: inline-block;
                                font-family: Nexa Heavy,arial,helvetica,sans-serif;
                                font-size: 20px;
                                font-weight: 600;
                                line-height: 1.4;
                                max-width: 100%;
                                overflow: hidden;
                                margin-top: 20px;

                                text-align: center;
                                text-decoration: inherit;
                                text-overflow: ellipsis;
                                text-transform: uppercase;
                                transition: background-color .1s,border-color .1s,box-shadow .1s,color .1s;
                                white-space: nowrap;"
              onmouseover="this.style.backgroundColor='#6504B5'; this.style.color='white'"
              onmouseout="this.style.backgroundColor='white'; this.style.color='#6504B5'"
      >了解更多</button>
    </div>
  </section>
  <!--Main End-->
  <div is="vue:script" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
       integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
       crossorigin="anonymous"></div>
  <div is="vue:script" src="src/views/assets/js/main.js"></div>
</template>
<script>
import router from "@/router";

export default {
  name: "CertificationCard",
  methods: {
    toOwnerPage(){
      router.push({
        name:"ownerInfoPage"
      })
    }
  }
}
</script>
