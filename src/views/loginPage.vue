<script setup>

import FooterCard from "@/components/FooterCard.vue";
</script>


<template>

  <section id="login" class="py-5">
      <div class="container">
        <div class="row justify-content-center pt-5 mt-5">
          <div class="col-12 col-lg-6 text-center ">
            <div class="log-inner py-5">
              <h1 class="py-2"> 登录</h1>
              <input type="email" name="" id="" placeholder="Email" required>
              <input type="password" name="" id="" placeholder="password" required>
              <a href="#" ><button class="py-2 px-5 fs-5 my-2">LOG IN</button></a>
              <p >尚未注册账号？<a href="./signin.html">去注册</a></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  <footer-card></footer-card>
 </template>

<style>
@import url('./assets/css/main.css');
</style>