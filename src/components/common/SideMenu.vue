<script setup>
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
</script>

<template>
  <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-color">
    <div
      class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
    >
      <div
        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-5 d-none d-sm-inline">Hola, {{ auth.getName }}</span>
      </div>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li class="nav-item">
          <router-link to="/" class="nav-link align-middle px-0">
            <i class="fs-4 bi-house">
              <svg
                class="white-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </i>
            <span class="ms-1 d-none d-sm-inline">Inicio</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="`/profile/${auth.getId}`"
            class="nav-link align-middle px-0"
          >
            <i class="fs-4 bi-house">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
            </i>
            <span class="ms-1 d-none d-sm-inline">Perfil</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notifications" class="nav-link align-middle px-0">
            <i class="fs-4 bi-house">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                />
              </svg>
            </i>
            <span class="ms-1 d-none d-sm-inline">Notificaciones</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-table">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
                />
              </svg>
            </i>
            <span class="ms-1 d-none d-sm-inline">Contactos</span></router-link
          >
        </li>
        <li>
          <router-link to="/network" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-grid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                />
              </svg>
            </i>
            <span class="ms-1 d-none d-sm-inline">Explorar</span></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#menu {
  list-style: none;
  padding: 0;
  width: 100%;
}

.bg-color {
  background-color: #37759c;
}

#menu li a {
  text-decoration: none;
  padding: 10px;
  color: #c9eeff;
  display: block;
  transition: 0.3s background-color;
}

#menu li a:hover {
  background-color: #37759c;
  color: #fff;
}

#menu li a i {
  margin-right: 10px;
  fill: #c9eeff;
}

#menu li a:hover i {
  color: #fff;
  fill: #fff;
}

#menu .active a {
  background-color: #007bff;
  color: #fff;
}

#menu .active a:hover {
  background-color: #007bff;
}

@media (min-width: 768px) {
  #sidebar {
    top: 5rem;
    left: -14rem;
    width: 14rem;
    height: calc(100vh - 5rem);
    z-index: 1;
    position: sticky;
    display: block;
    transition: left 0.3s ease-in-out;
  }

  #sidebar.active {
    left: 0;
  }

  a[data-bs-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  #sidebar .nav-link {
    text-align: left;
    padding-left: 2rem;
  }

  #sidebar .nav-link i {
    margin-right: 1rem;
  }

  #sidebar .nav-link:hover {
    color: #fff;
  }

  #sidebar .collapse.show {
    position: relative;
    z-index: 1;
    background-color: #37759c;
  }

  #sidebar .collapse.show a {
    color: #fff;
  }

  #sidebar .collapse.show a:hover {
    color: #fff;
  }

  #sidebar .collapse .collapse {
    position: relative;
    z-index: 1;
  }

  #sidebar .collapse .collapse a {
    color: #c9eeff;
  }

  #sidebar .collapse .collapse a:hover {
    color: #fff;
  }
}
</style>
