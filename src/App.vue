<script setup>
import { RouterLink, RouterView } from 'vue-router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NavBar from "@/components/common/NavBar.vue";
import SideMenu from "@/components/common/SideMenu.vue";
import {useAuthStore} from "@/stores/auth";

const auth = useAuthStore();
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
