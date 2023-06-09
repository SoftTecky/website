<script setup>
import { useAuthStore } from "@/stores/auth";
</script>

<template>
  <!-- simple sticky navigation bar with the logo on the left and a search bar on the right -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="toolbar">
        <form class="d-flex">
          <Button class="btn btn-primary" @click="useAuthStore().logout()">
            Salir
          </Button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: #145d8a;
}

nav .toolbar {
  padding: 2vh;
}

.logo {
  display: flex;
  align-items: start;
}

.logo img {
  height: 8vh;
  transform: translateY(-12%);
}
</style>
