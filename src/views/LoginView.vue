<script setup>
import {provideApolloClient, useLazyQuery } from '@vue/apollo-composable'
import { LOGIN } from '@/graphql-operations'
import {ref} from "vue";
import apolloClient from "@/apollo";
import {useAuthStore} from "@/stores/auth";
import router from "@/router";

const email = ref('')
const password = ref('')

provideApolloClient(apolloClient)

const loginQuery = useLazyQuery(LOGIN)

loginQuery.onResult((result) => {
  if (result.data?.users.length > 0) {
    const auth = useAuthStore();
    auth.setId(result.data?.users[0].user_id)
    auth.setName(result.data?.users[0].name)
    auth.setLastname1(result.data?.users[0].lastname1)
    auth.setLastname2(result.data?.users[0].lastname2)
    auth.setEmail(result.data?.users[0].email)
    auth.setAvatar(result.data?.users[0].avatar)
    router.push({name: 'Home'})
  }
})

const onLogin = async () => {
  loginQuery.load(null, {
    email: email.value,
    password: password.value
  })
}

</script>

<template>
  <section class="vh-100 py-5">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-color text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <form @submit.prevent="onLogin" class="form-signin">
                <img class="mb-4" src="@/assets/logo.png" alt="" />
                <br /><br />
                <!-- Email input -->
                <label for="inputEmail" class="sr-only mt-3"> </label>
                <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Ingresa tu correo" required=""
                       autofocus="" />
                <!-- Password input -->
                <label for="inputPassword" class="sr-only mt-2"></label>
                <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Ingresa tu contraseña"
                       required="" />
                <button class="btn btn-block btn-primary mt-5" type="submit">
                  ACCEDER
                </button>

                <p class="mt-3 mb-3 text-muted">
                  ¿No tienes cuenta?
                  <router-link to="/register"><a>Registrate</a>
                  </router-link>
                </p>
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