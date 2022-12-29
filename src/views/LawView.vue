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
.header {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.header h1 {
   text-align: left;
   margin-left: 1rem;
}

.section {
   display: flex;
}

.select {
   width: 20%;
   padding: 0.5rem 3rem;
   background-color: rgba(0, 90, 255, 0.5);
}

.select li {
   padding: 0.5rem 0.5rem;
   list-style-type: none;
}

.render {
   width: 100%;
   background-color: rgb(5, 5, 5);
   padding: 0 1rem 0 1rem;
   font-size: 16px;
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
      display: grid;
      padding: 0.5rem 3.5rem;
   }

   .select li {
      padding: 0.5rem 0rem;
   }
}

@media (max-width: 32em) {

}
</style>