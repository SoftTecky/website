<script setup>
import {useAuthStore} from "@/stores/auth";

const cloudName = "dfofqtsfr";
const uploadPreset = "softtracker";

const widget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        useAuthStore().setAvatar(result.info.secure_url)
      }
    }
);

const onUpload = () => {
  widget.open();
};
</script>

<template>
  <div class="uw">
    <p>Foto de perfil</p>
    <button v-on:click="onUpload" id="upload_widget" class="cloudinary-button">
      Subir archivos
    </button>
  </div>
</template>

<style scoped>

</style>