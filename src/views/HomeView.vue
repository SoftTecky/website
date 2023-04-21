<template>
  <section>
    <nav>
      <div>
        <!-- navbar -->
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row flex-nowrap">
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
            <div class="dropdown pb-4">
              
            </div>
          </div>
        </div>
        <div class="col py-3">Content area...</div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'

export default {};
</script>

<style>
nav {
  background: #145D8A;
}

.sidemenubg, .nav-link{
  background: #37759C;
  color: white;
}
section {
  background: #F0F4F6;
}

</style>
