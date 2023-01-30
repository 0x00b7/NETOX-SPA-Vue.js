<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useFadeIn, useFadeOut } from "../assets/scripts/AN/anime-route.js";
</script>

<template>
  <div class="container">
      <div class="header">
          <h1>Law Center</h1>
          <h2>
              Protecting the security and privacy of our users is our top priority.
          </h2>
      </div>
      <div class="section">
          <div class="select">
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-solid fa-trademark"></i>
                  </span>
                  <RouterLink :to="'/Legal-Center/Trademark'">Trademark</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-signature-lock"></i>
                  </span>
                  <RouterLink :to="'/Legal-Center/Privacy'">Privacy</RouterLink>
              </li>
              <li>
                  <span class="fa-li">
                      <i class="fa-solid fa-handshake"></i>
                  </span>
                  <RouterLink :to="'/Legal-Center/Eula'">Eula</RouterLink>
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
}

.header {
  background: -o-linear-gradient(
    315deg,
    rgba(0, 90, 255, 0.5) 0%,
    rgba(37, 9, 121, 1) 65%,
    rgba(2, 0, 36, 1) 100%
  );
  background: -webkit-linear-gradient(
    315deg,
    rgba(0, 90, 255, 0.5) 0%,
    rgba(37, 9, 121, 1) 65%,
    rgba(2, 0, 36, 1) 100%
  );
  background: -moz-linear-gradient(
    315deg,
    rgba(0, 90, 255, 0.5) 0%,
    rgba(37, 9, 121, 1) 65%,
    rgba(2, 0, 36, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(0, 90, 255, 0.5) 0%,
    rgba(37, 9, 121, 1) 65%,
    rgba(2, 0, 36, 1) 100%
  );
  padding: 2rem;
  text-align: left;
}

.header h2 {
  font-weight: 400;
}

.select {
  width: 20%;
  padding: 0.5rem 3rem;
  background: rgba(0, 90, 255, 0.5);
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
  .header {
    padding: 1rem;
  }

  .section {
    display: -ms-grid;
    display: grid;
  }

  .select {
    width: 100%;
    display: -ms-grid;
    display: grid;
    padding: 0.5rem 2.5rem;
  }

  .select li {
    padding: 0.5rem 0rem;
  }
}

@media (max-width: 32em) {
}
</style>
