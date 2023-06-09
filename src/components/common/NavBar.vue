<script setup></script>

<template>
  <!-- simple sticky navigation bar with the logo on the left and a search bar on the right -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="toolbar">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
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
