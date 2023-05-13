<template>
  <section class="bodymain">
    <!-- inicio nav -->
    <nav class="align-items-center">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <!-- Logotipo -->
          <div class="col-sm-2 text-left">
            <div class="logo">
              <img src="ruta-logo.png" alt="Logo de mi sitio web" />
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
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <a href="#" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>
                  <span class="ms-1 d-none d-sm-inline">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1 d-none d-sm-inline">Evaluar</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1 d-none d-sm-inline">Notificaciones</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1 d-none d-sm-inline">Mi red</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-people"></i>
                  <span class="ms-1 d-none d-sm-inline">Perfil</span>
                </a>
              </li>
            </ul>
            <hr />
            <div class="dropdown pb-4"></div>
          </div>
        </div>
        <!-- fin sidemenu -->
        <div class="col py-3">
          <div class="rounded">
            <div class="profile-coment bg-white h-50">
              <!--  -->
              <div class="profile-header">
                <div class="d-flex align-items-center">
                  <div class="profile-avatar">
                  </div>
                  <div class="flex-column">
                    <div class="col">
                      <div class="item-name rounded">
                        <span>Usuario 1</span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="item-coment rounded h-50 w-100">
                        <span>¿En que estas pensando?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--  -->
            </div>
          </div>
          <load></load>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
import loadSkeleton from "@/components/ScreenSkeleton.vue";

export default {
  name: "VistaEsqueleto",
  components: {
    load: loadSkeleton,
  },
};
</script>

<style scope>
/* * { border: red solid 0.5px; } */

nav {
  background: #145d8a;
}

.sidemenubg,
.nav-link {
  background: #37759c;
  color: white;
}
.bodymain {
  background: #f0f4f6;
}

.profile-coment {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 39vw;
  padding: 3vh;
  margin: 2vh 0 0 2vh;
  border-radius: 15px;
}

.profile-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d1d1d1;
  margin: 0 1vw 0 0vw;
}

.item-name {
  /* top vh, right vw, bottom vh, left vw  */
  padding: 0 25vw 0 0;
  margin: 0 0 1vh 0;
}

.item-coment {
  color: #bbb4b4;
  padding: 1vh 16vw 5vh 1vw;
  border: #d1d1d1 solid 1px;
}
</style>
