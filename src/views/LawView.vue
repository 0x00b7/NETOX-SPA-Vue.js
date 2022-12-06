<script setup>
   import { useFadeIn, useFadeOut } from '../assets/scripts/AN/route-ts.js'
</script>
<template>
   <div class="container">
      <div class="head">
         Legal Center
      </div>
      <div class="section">
         <div class="select">
            <ul class="fa-ul">
               <li>
                  <span class="fa-li">
                  <i class="fa-solid fa-book-section"></i>
                  </span>
                  <RouterLink :to="'/legal/imprint'">Imprint [TML]</RouterLink>
               </li>
               <li>
                  <span class="fa-li">
                  <i class="fa-solid fa-lock-keyhole"></i>
                  </span>
                  <RouterLink :to="'/legal/privacy'">Privacy [GPR]</RouterLink>
               </li>
               <li>
                  <span class="fa-li">
                  <i class="fa-solid fa-handshake"></i>
                  </span>
                  <RouterLink :to="'/legal/eula'">User Agreement [EULA]</RouterLink>
               </li>
            </ul>
         </div>
         <div class="render">
            <router-view v-slot="{ Component }">
               <transition @enter="useFadeIn" @leave="useFadeOut" :css="false" mode="out-in">
                  <component :is="Component" />
               </transition>
            </router-view>
         </div>
      </div>
   </div>
</template>


  <style scoped>
  /* HEAD-STUB */
  .container {
      border: 1px solid rgb(10, 10, 10);
      background-color: rgba(15, 15, 15, 1);
  }

  .head {
      margin: 1rem 0rem 0rem 2rem;
      font-size: 32px;
  }

  /* SKELETON */
  .section {
      display: flex;
      padding: 2vh 5vh;
  }

  /* LEGAL-CENTER */
  .select {
      width: 30%;
  }
  .render {
      width: 70%;
  }

  ul {
      margin: 0px 0px 0px 28px;
  }

  li {
      padding: 5px 0px;
  }

  /* W1024x ~ iPad */
  @media (max-width: 64em) {
      .section {
          display: grid;
      }
  }

  /* W512x ~ iPhone */
  @media (max-width: 32em) {}
  </style>