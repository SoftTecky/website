<script setup>
import { useAuthStore } from "@/stores/auth";
import { INSERT_ONE_POST } from "@/graphql-operations";
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";

const props = defineProps(["onpost"]);

const auth = useAuthStore();

const title = ref("");
const description = ref("");
const date = ref(new Date().toISOString());

const insertOnePost = useMutation(INSERT_ONE_POST);
insertOnePost.onDone(() => {
  title.value = "";
  description.value = "";
  date.value = new Date().toISOString();

  props.onpost();
  alert("Post creado");
});

const onPost = () => {
  date.value = new Date().toISOString();

  insertOnePost.mutate({
    title: title.value,
    description: description.value,
    date: date.value,
    user_id: auth.getId,
  });
};
</script>

<template>
  <!-- View for writting a new post -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Escribe una publicacion nueva</h5>
      <form @submit.prevent="onPost">
        <div class="mb-3">
          <label for="post-title" class="form-label">Titulo</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="post-title"
            placeholder="Titulo de la publicacion"
          />
        </div>
        <div class="mb-3">
          <label for="post-description" class="form-label">Descripcion</label>
          <textarea
            v-model="description"
            class="form-control"
            id="post-description"
            rows="3"
            placeholder="Descripcion de la publicacion"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Publicar</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
