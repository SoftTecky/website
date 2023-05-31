<template>
  <section class="bodymain">
    <!-- inicio nav -->
    <nav class="align-items-center">
      <div class="container-fluid">
        <div class="row justify-content-between">
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
                <input
                  type="text"
                  class="form-control rounded"
                  placeholder="Buscar..."
                />
                <div class="input-group-prepend">
                  <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- fin nav -->
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <!-- inicio sidemenu -->
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidemenubg">
          <div
            class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
          >
            <ul
              class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <a href="#" class="nav-link btn active">
                  <i class="fs-4 bi-house"></i>
                  <span class="ms-1">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link btn">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1">Evaluar</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link btn">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1">Notificaciones</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link btn">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1">Mi red</span>
                </a>
              </li>
              <li>
                <router-link to="/profile">
                  <a href="#" class="nav-link btn">
                  <span class="ms-1">Perfil</span>
                </a>
              </router-link>  
              </li>
            </ul>
            <hr />
            <div class="dropdown pb-4"></div>
          </div>
        </div>
        <!-- fin sidemenu -->
        <div class="col py-3">
          <sharebox></sharebox>
          <load></load>
        </div>
      </div>
    </div>

    
  </section>

 
</template>

<script>
// @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
import loadSkeleton from "@/components/ScreenSkeleton.vue";
import ModuloComentario from "@/components/ContentMain.vue";

export default {
  name: "VistaPrincipal",
  components: {
    load: loadSkeleton,
    sharebox: ModuloComentario,
  },
};
</script>

<style scope>
/* * { border: red solid 1px; } */

nav {
  background: #145d8a;
}

.logo {
  display: flex;
  align-items: left;
}
.logo img {
  height: 8vh;
  /* position: fixed; */
  transform: translateY(-12%);
}

.sidemenubg {
  background: #37759c;
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

.bodymain {
  background: #f0f4f6;
}
</style>
