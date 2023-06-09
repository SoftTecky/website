<script setup>
const props = defineProps(["contact"])
</script>

<template>
  <!-- A component for a contact view, it has the name, lastname1, lastname2, email and phone of the contact -->
  <div class="card mb-3">
    <div class="card-header">
      <img class="card-img-left"
           :src="contact.avatar ? contact.avatar : blankProfile">
      <div>
        <h5 class="card-title">{{props.contact.name}} {{props.contact.lastname1}} {{props.contact.lastname2}} </h5>
        <p class="card-subtitle"><small class="text-muted"> {{props.contact.email}} </small></p>
      </div>
    </div>
    <div class="card-body">
      <router-link :to="`/evaluations/${props.contact.user_id}`" class="btn btn-primary me-3">Evaluar</router-link>
      <router-link :to="`/profile/${props.contact.user_id}`" class="btn btn-primary">Ver perfil</router-link>
    </div>
  </div>
</template>

<style scoped>
.card-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}
.card-header {
  display: flex;
  align-items: center;
}
</style>