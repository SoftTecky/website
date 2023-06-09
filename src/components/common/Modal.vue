<script setup>
import UploadWidget from "@/components/common/UploadWidget.vue";

import { UPDATE_PROFILE_DESCRIPTION, UPDATE_PROFILE_AVATAR } from "@/graphql-operations";
import {useMutation} from "@vue/apollo-composable";
import {useAuthStore} from "@/stores/auth";
import {ref} from "vue";

const props = defineProps({
  show: Boolean,
  description: String
})

const description = ref(props.description)

const updateProfileDescription = useMutation(UPDATE_PROFILE_DESCRIPTION)
updateProfileDescription.onDone((result) => {
  console.log(result)
})

const updateProfileAvatar = useMutation(UPDATE_PROFILE_AVATAR)
updateProfileAvatar.onDone((result) => {
})

const onSave = () => {
  updateProfileDescription.mutate({
    user_id: useAuthStore().getId,
    description: description.value
  })
  updateProfileAvatar.mutate({
    user_id: useAuthStore().getId,
    avatar: useAuthStore().getAvatar
  })
}
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h3>Editar perfil</h3>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSave">
            <div class="mb-3">
              <upload-widget></upload-widget>
            </div>
            <div class="mb-3">
              <label for="post-description" class="form-label">Descripcion</label>
              <textarea class="form-control"
                        id="post-description"
                        rows="3"
                        placeholder="Cuentanos sobre ti"
                        v-model="description"
              >
              </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Guardar cambios</button>
          </form>
        </div>

        <div class="modal-footer">
          <button
              class="modal-default-button"
              @click="$emit('close')"
          >OK</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--color-text);
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>