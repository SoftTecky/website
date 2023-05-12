<template>
  <body class="gradient-custom">
    <!--------------------------------------------------------------->
    <section class="vh-100 py-5">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-5 text-center">
                <form class="form-signin">
                  <img
                    class="mb-4"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="100"
                    height="100"
                  />
                  <br /><br />
                  <!-- Email input -->
                  <label for="inputEmail" class="sr-only mt-3"> </label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Ingresa tu correo"
                    required=""
                    autofocus=""
                  />
                  <!-- Password input -->
                  <label for="inputPassword" class="sr-only mt-2"> </label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Ingresa tu contraseña"
                    required=""
                  />
                  <button class="btn btn-block btn-primary mt-5" type="submit">
                    ACCEDER
                  </button>
                  <p class="mt-3 mb-3 text-muted">
                    ¿No tienes cuenta?
                    <router-link to="/register"
                      ><a href="">Registrate</a></router-link
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--------------------------------------------------------------->
  </body>
</template>

<script>
export default {};
</script>

<style scope>
.text-muted {
  color: #6c757d !important;
}

.gradient-custom {
  background: #37759c;
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}

.form-label {
  color: #37759c;
}
</style>
