<template>
  <!-- inicio nav SamuelEstuvoAqui -->
  <nav class="align-items-center" v-if="!isLoggedIn">
    <div class="container-fluid">
      <div class="toolbar row justify-content-between">
        <!-- Logotipo -->
        <div class="col-sm-2 text-left">
          <div class="logo">
            <img src="@/assets/logo.png" alt="Logo de mi sitio web" />
          </div>
        </div>
        <!-- Buscador -->
        <div class="col-sm-6">
          <div class="search-box rounded">
            <div class="input-group">
              <input type="text" class="form-control rounded" placeholder="Buscar..." />
              <div class="input-group-prepend">
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row flex-nowrap">
      <!-- inicio sidemenu -->
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidemenubg" v-if="!isLoggedIn">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
              <router-link to="/home" style="text-decoration: none;">
                <a class="nav-link btn">
                  <span class="ms-1">Inicio</span>
                </a>
              </router-link>
            </li>
            <li>
              <a class="nav-link btn">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1">Evaluar</span>
              </a>
            </li>
            <li>
              <a class="nav-link btn">
                <i class="fs-4 bi-people"></i>
                <span class="ms-1">Notificaciones</span>
              </a>
            </li>
            <li>
              <router-link to="/network" style="text-decoration: none;">
                <a class="nav-link btn">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1">Mi red</span>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/profile" style="text-decoration: none;">
                <a class="nav-link btn">
                  <span class="ms-1">Perfil</span>
                </a>
              </router-link>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4"></div>
        </div>
      </div>

      <div class=" back col py-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import sidmenu from "@/components/SidMenu.vue"; // sidebar
// import navbar from "@/components/NavBar.vue"; // toolbar

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false, // Variable de estado para controlar el estado de inicio de sesión

    };
  },
};
</script>

<style scoped>
/* Estilos específicos para el componente NavBar */
nav {
  background: #145d8a;
}

.back {
  background: #F0F4F6;
}

nav .toolbar {
  padding: 2vh;
}

.logo {
  display: flex;
  align-items: left;
}

.logo img {
  height: 8vh;
  transform: translateY(-12%);
}

/* Estilos específicos para el componente SideMenu */
.sidemenubg {
  background: #37759c;
  height: max-content;
}

.nav-link {
  text-align: left;
  color: white;
  border: #548aac solid 2px;
  border-radius: 15px;
  width: 12em;
  transform: translateX(-5%);
  /* top vh, right vw, bottom vh, left vw  */
  padding: 0vh 4vw 1vh 1vw;
  margin: 0 0 1vh 0;
}

.nav-link:hover {
  background: #548aac;
  color: white;
}

a.btn.active {
  background-color: #548aac;
  border: #548aac solid 1px;
  color: white;
}
</style>
