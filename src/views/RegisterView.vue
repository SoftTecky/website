<script setup>
import {ref} from "vue";

import { INSERT_USER } from "@/graphql-operations";
import {useMutation} from "@vue/apollo-composable";
import router from "@/router";

const name = ref('');
const lastname1 = ref('');
const lastname2 = ref('');
const email = ref('');
const password = ref('');
const confirm_password = ref('');

const insertUserMutation = useMutation(INSERT_USER);
insertUserMutation.onDone((result) => {
  alert("Usuario registrado correctamente");
  router.push({name: 'Login'});
});
insertUserMutation.onError((error) => {
  alert(error);
});

const onSubmit = () => {
  if(password.value !== confirm_password.value) {
    alert('Las contraseñas no coinciden');
    return;
  }

  insertUserMutation.mutate({
    name: name.value,
    lastname1: lastname1.value,
    lastname2: lastname2.value,
    email: email.value,
    password: password.value,
    description: '',
  })
}
</script>

<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-color text-white" style="border-radius: 1rem">
            <div class="card-body p-4 text-center">
              <form @submit.prevent="onSubmit">
                <img class="mb-4" src="@/assets/logo.png" alt="" />
                <br /><br />
                <!-- Name's Input -->
                <div class="form-outline mb-4">
                  <input v-model="name" type="text" id="nombre" placeholder="Ingresa tu nombre(s)"
                         class="form-control form-control-lg" />
                </div>

                <div class="form-row form-outline mb-4">
                  <div class="row">
                    <div class="col-sm-6">
                      <input v-model="lastname1" type="text" id="apellido1" placeholder="Apellido paterno"
                             class="form-control form-control-lg" />
                    </div>
                    <!-- form-group end -->
                    <div class="col-sm-6">
                      <input v-model="lastname2" type="text" id="apellido2" placeholder="Apellido materno"
                             class="form-control form-control-lg" />
                    </div>
                    <!-- form-group end -->
                  </div>
                  <!-- form-row end -->
                </div>

                <!-- Email Input -->
                <div class="form-outline mb-4">
                  <input v-model="email" type="email" id="email" placeholder="Ingresa tu correo"
                         class="form-control form-control-lg" />
                </div>
                <!-- Password Input -->
                <div class="form-outline mb-4">
                  <input v-model="password" type="password" id="password" placeholder="Ingresa tu contraseña"
                         class="form-control form-control-lg" />
                </div>
                <!-- Confirm Password Input -->
                <div class="form-outline mb-4">
                  <input v-model="confirm_password" type="password" id="confirm_password" placeholder="Confirma tu contraseña"
                         class="form-control form-control-lg" />
                </div>
                <!-- Button Register -->
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-block btn-primary px-5 py-2">
                    REGISTRARME
                  </button>
                </div>
                <!-- Button Cancel -->
                <div class="d-flex justify-content-center mt-2">
                  <router-link to="/login" type="button" class="btn btn-block btn-primary btn-sm px-3 py-1">
                    CANCELAR
                  </router-link>
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
img {
  width: 85%;
  margin-bottom: 15px;
}
.bg-color {
  background-color: #145d8a;
}
</style>