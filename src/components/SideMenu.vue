<script setup>

</script>

<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidemenubg">
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <ul class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li class="nav-item">
          <router-link to="/" style="text-decoration: none;">
            <a class="nav-link btn">
              <i class="fs-4 bi-house"></i>
              <span class="ms-1">Inicio</span>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/evaluations" style="text-decoration: none;">
            <a class="nav-link btn">
              <i class="fs-4 bi-people"></i>
              <span class="ms-1">Evaluar</span>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/notifications" style="text-decoration: none;">
            <a class="nav-link btn">
              <i class="fs-4 bi-people"></i>
              <span class="ms-1">Notificaciones</span>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" style="text-decoration: none;">
            <a class="nav-link btn">
              <i class="fs-4 bi-people"></i>
              <span class="ms-1">Contactos</span>
            </a>
          </router-link>
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
              <i class="fs-4 bi-person"></i>
              <span class="ms-1">Perfil</span>
            </a>
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="dropdown pb-4"></div>
    </div>
  </div>
</template>

<style scoped>
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
  height: 3em;
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