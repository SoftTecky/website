<script setup>
const props = defineProps(["contact"])
</script>

<template>
<!-- A component for a contact view, it has the name, lastname1, lastname2, email and phone of the contact -->
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{props.contact.name}} {{props.contact.lastname1}} {{props.contact.lastname2}}</h5>
      <p class="card-text">{{props.contact.email}}</p>
      <p class="card-text">{{props.contact.phone}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>