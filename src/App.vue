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
            <RouterLink to="/about">About</RouterLink>
         </nav>
      </div>
   </header>
   <router-view v-slot="{ Component }">
      <transition @enter="useFadeIn" @leave="useFadeOut" :css="false" mode="out-in">
         <component :is="Component" />
      </transition>
   </router-view>
   <footer>
      <div>
         <h3>About Us</h3>
         <ul class="fa-ul">
            <li>
              <span class="fa-li">
               <i class="fa-solid fa-scale-balanced"></i>
              </span>
              <RouterLink to="/legal">Legal & Privacy</RouterLink>
            </li>
         </ul>
      </div>
      <div>
         <h3>Social Media</h3>
         <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fa-brands fa-tiktok"></i>
              </span>
               <a href="https://www.tiktok.com/@netox.ws" target="_blank" rel="noopener noreferrer">TikTok</a>
            </li>
            <li>
              <span class="fa-li">
                <i class="fa-brands fa-instagram"></i>
              </span>
               <a href="https://www.instagram.com/netox.ws/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
         </ul>
      </div>
      <div>
         <h3>Contact</h3>
         <ul class="fa-ul">
          <li>
              <span class="fa-li">
               <i class="fa-solid fa-at"></i>
              </span>
               <a href="mailto:admin@netox.ws" target="_blank" rel="noopener noreferrer">E-Mail</a>
            </li>
            <li>
              <span class="fa-li">
               <i class="fa-brands fa-whatsapp"></i>
              </span>
               <a href="https://wa.me/message/I2C4ETTGL33HB1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
         </ul>
      </div>
   </footer>
</template>

<style scoped>
header {
    display: grid;
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}

a.router-link-exact-active:hover {
    background-color: transparent;
}

nav {
    width: 100%;
    font-size: 24px;
    text-align: left;
    margin: 15px 0px 15px 0px;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

footer {
    position: relative;
    display: flex;
    width: 100%;
    min-height: 30vh;
    background-color: rgb(10, 10, 10);
    padding: 1.5rem 0rem 0rem 2rem;
}

footer div {
    display: block;
    width: 100%;
}

ul {
    margin: 0px 0px 0px 28px;
}

li {
    padding: 5px 0px;
}

/* W1024x ~ iPad */
@media (max-width: 64em) {
    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    nav {
        text-align: center;
    }

    footer {
        height: 300px;
        display: grid;
    }

    footer div {
        margin-bottom: 25px;
    }
}
</style>