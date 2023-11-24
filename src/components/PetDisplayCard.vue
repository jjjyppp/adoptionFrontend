<template>
  <div style="width: 210px; height: 300px">
    <div class="animal-box text-center" style="height: 278px">
      <router-link :to="{ name: 'petDetailPage', params: { id: pet.id } }">
        <a>
          <div class="pet-img">
            <img src="src/views/assets/img/cat1.jpg" alt="" style="width: 100%">
          </div>
          <p class="type">{{pet.name}}</p>
          <p class="info">{{pet.age}} {{pet.location}}</p>
        </a>
        <a href="#">
          <span class="bg-light">
            <div style="margin-top: 1px">
              <img src="../assets/icons/heart.png" alt="" width="26">
            </div>
          </span>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetDisplayCard",
  props: ['pet'],
}
</script>

<style scoped>
a{
  text-decoration: none;
}

.animal-box {
  color: #6504b5;
  font-weight: 600;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  transition: all 1s;
  position: relative;
  margin-bottom: 1rem!important;
}

.animal-box p{
  background-color: white;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: relative;
  bottom: 25px;
  transition: all 1s;
}

.animal-box img{
  transition: all 1s;
  object-fit: cover;
  max-height: 100%;
}

.animal-box span{
  width: 45px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  border-radius: 50px;
}

.animal-box:hover {
  background-color: #6504b5;
}

.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}

.animal-box:hover img {
  opacity: 0.5;
}

.animal-box:hover {
  background-color: #6504b5;
}
.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}
.animal-box:hover img {
  opacity: 0.5;
}

.animal-box:hover p {
  background-color: #6504b5;
  color: white;
}

.animal-box:hover img {
  opacity: 0.5;
}

.text-center {
  text-align: center!important;
}

.animal-box .pet-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.type{
  font-size: calc(1.3rem + .6vw)!important;
  padding-top: 1rem!important;
  margin-bottom: 0!important;
  color: #6504B5;
}

.info{
  margin-bottom: 0!important;
  padding-top: 0!important;
  padding-bottom: 0!important;
  color: #6504B5;
}

.bg-light {
  --bs-bg-opacity: 1;
  --bs-light-rgb: 248,249,250;
  background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important;
}

</style>