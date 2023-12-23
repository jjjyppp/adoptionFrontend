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
          <div class="img d-inline p-3"> <img src="src/assets/imgs/pet-house.png" alt=""></div>
          <h1 class="mt-3">江苏省动物学会</h1>
          <h5 class="mt-3">江苏 南京</h5>

          <p><span class="pe-5"></span></p>
          <p class="mt-3" align="left"><span class="pe-5"><i class="fa-solid fa-location" ></i></span>江苏省南京市栖霞区文苑路一号</p>
          <hr>
          <p align="left"><span class="pe-5"><i class="fa-solid fa-envelope"></i></span>jssdwxh@163.com</p>
          <hr>
          <button style="-webkit-appearance: none;
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
                  onmouseover="this.style.backgroundColor='#6504B5'; this.style.color='white'; this.style.marginBottom='20px'"
                  onmouseout="this.style.backgroundColor='white'; this.style.color='#6504B5'; this.style.marginBottom='20px'"
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
export default {
  name: "CertificationCard"
}
</script>
<style>
</style>