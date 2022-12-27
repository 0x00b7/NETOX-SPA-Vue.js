<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useFadeIn, useFadeOut } from '../assets/scripts/AN/anime-route.js'
</script>

<template>
   <div class="container">
      <div class="header">
         <h1>Law Center</h1>
      </div>
      <div class="section">
         <div class="select">
            <li>
               <span class="fa-li">
               <i class="fa-solid fa-book-section"></i>
               </span>
               <RouterLink :to="'/Law/imprint'">Imprint</RouterLink>
            </li>
            <li>
               <span class="fa-li">
               <i class="fa-solid fa-lock-keyhole"></i>
               </span>
               <RouterLink :to="'/Law/privacy'">Privacy</RouterLink>
            </li>
            <li>
               <span class="fa-li">
               <i class="fa-solid fa-handshake"></i>
               </span>
               <RouterLink :to="'/Law/eula'">User Agreement</RouterLink>
            </li>
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
.container {
   background-color: rgba(15, 15, 15, 1);
}

.header h1 {
   text-align: left;
}

.section {
   display: flex;
   padding: 2vh 5vh;
}

.select {
   width: 50%;
   background-color: rgb(10, 10, 10);
}

.render {
   width: 100%;
   background-color: rgb(5, 5, 5);
   padding: 1rem;
}

.select li {
   padding: 0.5rem 0.5rem;
   list-style-type: none;
}

@media (max-width: 64em) {
   .section {
      display: grid;
   }

   .header h1 {
      text-align: center;
   }

   .select {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
      justify-content: center;
   }

   .select li {
      padding: 0.5rem 0rem;
      margin-left: 5rem;
   }

   .select li:first-child {
      margin-left: 2rem;
   }
}

@media (max-width: 32em) {
   .select li {
      margin-left: 3rem;
      font-size: 12px;
   }
}
</style>