<script setup>

</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-4 text-center">
              <form>
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                     width="100" height="100" />
                <br /><br />
                <!-- Name's Input -->
                <div class="form-outline mb-4">
                  <input type="text" id="nombre" placeholder="Ingresa tu nombre(s)"
                         class="form-control form-control-lg" />
                </div>

                <div class="form-row form-outline mb-4">
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="text" id="apellido1" placeholder="Apellido paterno"
                             class="form-control form-control-lg" />
                    </div>
                    <!-- form-group end -->
                    <div class="col-sm-6">
                      <input type="text" id="apellido2" placeholder="Apellido materno"
                             class="form-control form-control-lg" />
                    </div>
                    <!-- form-group end -->
                  </div>
                  <!-- form-row end -->
                </div>

                <!-- Email Input -->
                <div class="form-outline mb-4">
                  <input type="email" id="email" placeholder="Ingresa tu correo"
                         class="form-control form-control-lg" />
                </div>
                <!-- Password Input -->
                <div class="form-outline mb-4">
                  <input type="password" id="password" placeholder="Ingresa tu contraseña"
                         class="form-control form-control-lg" />
                </div>
                <!-- Confirm Password Input -->
                <div class="form-outline mb-4">
                  <input type="password" id="confirm_password" placeholder="Confirma tu contraseña"
                         class="form-control form-control-lg" />
                </div>
                <!-- Button Register -->
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-block btn-primary px-5 py-2">
                    REGISTRARME
                  </button>
                </div>
                <!-- Button Cancel -->
                <div class="d-flex justify-content-center mt-2">
                  <button type="button" class="btn btn-block btn-primary btn-sm px-3 py-1">
                    CANCELAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>