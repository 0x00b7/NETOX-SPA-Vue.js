<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { useFadeIn, useFadeOut } from './assets/scripts/AN/route-ts.js'

  import './assets/scripts/FA/all.min.js'
</script>

<template>
  
  <header>
     <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        />
     <div class="wrapper">
        <nav>
           <RouterLink to="/">Home</RouterLink>
           <RouterLink to="/about">About</RouterLink>
           <RouterLink to="/env">Devel</RouterLink>
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

.logo {
  top: 15px;
  display: block;
  margin: 0 auto;
  width: auto;
  height: 9rem;
}

nav {
  width: 100%;
  font-size: 23px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

  .logo {
    top: 0;
    width: auto;
    height: 5.9rem;
    margin: 0 2rem 0 0;
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