<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useFadeIn, useFadeOut } from '../assets/scripts/AN/anime-route.js'
</script>

<template>
   <div id="footer" class="container">
      <div class="header">
         <h1>Law Center</h1>
         <h2>Protecting the security and privacy of our users is our top priority.</h2>
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
               <RouterLink :to="'/Law/privacy'">Privacy Policy</RouterLink>
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
.section {
   display: flex;
}

.header {
   background: linear-gradient(135deg, rgba(0, 90, 255, 0.5) 0%, rgba(37, 9, 121, 1) 65%, rgba(2, 0, 36, 1) 100%);
   padding: 2rem
}

.header h1 {
   text-align: left;
}

.header h2 {
   font-weight: 400;
}

.select {
   width: 20%;
   padding: 0.5rem 3rem;
   background-color: rgba(0, 90, 255, 0.5);
}

.select li {
   padding: 0.5rem 0rem;
   list-style-type: none;
}

.select a {
   font-weight: 300;
}

.render {
   width: 100%;
   padding: 0 1rem 0 1rem;
   font-size: 16px;
}

@media (max-width: 64em) {
   .section {
      display: grid;
   }

   .header {
      padding: 1rem;
   }

   .select {
      width: 100%;
      display: grid;
      padding: 0.5rem 2.5rem;
   }

   .select li {
      padding: 0.5rem 0rem;
   }
}

@media (max-width: 32em) {}
</style>