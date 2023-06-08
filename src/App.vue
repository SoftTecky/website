<script setup>
import { RouterLink, RouterView } from 'vue-router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NavBar from "@/components/NavBar.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <nav-bar v-if="!['/login', '/register'].includes($route.path)"/>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <side-menu v-if="!['/login', '/register'].includes($route.path)"/>
      <div class=" back col py-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
