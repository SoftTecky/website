<script setup>
import {ref} from "vue";

import { useQuery } from "@vue/apollo-composable";
import { useAuthStore } from "@/stores/auth";

import { GET_NOT_CONNECTED_USERS } from "@/graphql-operations";

import blankProfile from "@/assets/blank-profile.webp"

const auth = useAuthStore()
const users = ref([])

const notConnectedUsersQuery = useQuery(GET_NOT_CONNECTED_USERS, {
  user_id: auth.getId,
})
notConnectedUsersQuery.onResult((result) => {
  users.value = result.data?.users
})

</script>

<template>
  <div id="carrusel">
    <router-link v-for="user in users" :key="user.user_id" class="foto" :data-nombre="`${user.name}`" :to="`/profile/${user.user_id}`">
      <img :src="user.avatar ? user.avatar : blankProfile" :alt="user.name">
    </router-link>
  </div>
</template>

<style scoped>
#carrusel {
  width: calc(80vw - 20px);
  height: calc(90vh - 20px);
  float: left;
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 30px solid rgb(255, 255, 255);
  box-sizing: border-box;
}

.foto {
  width: calc(33.33% - 20px);
  height: calc(50% - 20px);
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  background-color: #000;
}

.foto::after {
  content: attr(data-nombre);
  font-size: 36px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 20px;
}

.foto:hover::after {
  opacity: 1;
}

#carrusel::-webkit-scrollbar {
  width: 0.5em;
  /* Ajusta el ancho del scroll */
  background-color: transparent;
  /* Color de fondo del scroll */
}

#carrusel::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  /* Color del scroll */
  border-radius: 10px;
  /* Radio de los bordes del scroll */
}

#carrusel::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.7);
  /* Color del scroll al pasar el cursor sobre él */
}
</style>