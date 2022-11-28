<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { useFadeIn, useFadeOut } from './assets/scripts/AN/route-ts.js'

  import './assets/scripts/FA/all.min.js'
</script>

<template>
  <header>
     <div class="wrapper">
        <nav>
           <RouterLink to="/">Home</RouterLink>
           <RouterLink to="/creation">Creation</RouterLink>
           <RouterLink to="/about">About Us</RouterLink>
        </nav>
     </div>
  </header>

  <router-view v-slot="{ Component }">
     <transition @enter="useFadeIn" @leave="useFadeOut" :css="false" mode="out-in">
        <component :is="Component" />
     </transition>
  </router-view>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 23px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: rgba(255, 255, 255, 0.5)
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: left;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>