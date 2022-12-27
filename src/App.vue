<script setup>
import { RouterView } from "vue-router";
import { useFadeIn, useFadeOut } from './assets/scripts/AN/anime-route.js'
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import './assets/scripts/FA/all.min.js'
</script>

<template>
    <NavBar/>
        <router-view v-slot="{ Component }">
            <transition @enter="useFadeIn" @leave="useFadeOut" :css="false" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <Footer/>
</template>