<template>
  <div style="width: 210px; height: 300px">
    <div class="animal-box text-center mb-3">
      <a>
        <div class="pet-img">
          <img src="src/views/assets/img/cat1.jpg" alt="" style="width: 100%">
        </div>
        <p class="fs-3 pt-3 mb-0 ">猫猫</p>
        <p class="py-0 mb-0">六岁 南京</p>
      </a>
      <a href="#"><span class="bg-light"><i
          class="fa-regular fa-heart"></i></span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetDisplayCard"
}
</script>

<style scoped>


#find-animal .animal .animal-box {
  color: #6504b5;
  font-weight: 600;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  transition: all 1s;
  position: relative;
}

#find-animal .animal .animal-box p{
  background-color: white;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  bottom: 25px;
  transition: all 1s;
}

#find-animal .animal .animal-box img{
  transition: all 1s;
  object-fit: cover;
  max-height: 100%;
}

#find-animal .animal .animal-box span{
  width: 45px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  border-radius: 50px;
}

main #animal .animal-box:hover {
  background-color: #6504b5;
}

main #animal .animal-box:hover p {
  background-color: #6504b5;
  color: white;
}

main #animal .animal-box:hover img {
  opacity: 0.5;
}

#find-animal .animal .animal-box:hover {
  background-color: #6504b5;
}
#find-animal .animal .animal-box:hover p {
  background-color: #6504b5;
  color: white;
}
#find-animal .animal .animal-box:hover img {
  opacity: 0.5;
}

#related-animal .related-animal-inner .animal-box:hover {
  background-color: #6504b5;
}
#related-animal .related-animal-inner .animal-box:hover p {
  background-color: #6504b5;
  color: white;
}
#related-animal .related-animal-inner .animal-box:hover img {
  opacity: 0.5;
}

.text-center {
  text-align: center!important;
}

.mb-3 {
  margin-bottom: 1rem!important;
}

#find-animal .animal .animal-box .pet-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.fs-3 {
  font-size: calc(1.3rem + .6vw)!important;
}

.pt-3 {
  padding-top: 1rem!important;
}
.mb-0 {
  margin-bottom: 0!important;
}

.py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.bg-light {
  --bs-bg-opacity: 1;
  --bs-light-rgb: 248,249,250;
  background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important;
}

.fa-regular{
  font-family: "Font Awesome 6 Free";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display,inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}

@media (min-width: 768px)
.col-md-3 {
  flex: 0 0 auto;
  width: 25%;
}

</style>