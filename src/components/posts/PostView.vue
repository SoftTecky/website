<script setup>
const props = defineProps(["post"])
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{props.post.title}}</h5>
      <p class="card-subtitle">{{props.post.user.name}} {{props.post.user.lastname1}} {{props.post.user.lastname2}}</p>
      <p class="card-text">{{props.post.description}}</p>
      <p class="card-text"><small class="text-muted">{{props.post.date}}</small></p>
    </div>
  </div>
</template>

<style scoped>
</style>