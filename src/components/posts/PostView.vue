<script setup>
const props = defineProps(["post"])
</script>

<template>
  <div class="card mb-3">
    <div class="card-header">
      <img class="card-img-left" :src="props.post.user.avatar">
      <h5 class="card-title">{{props.post.title}}</h5>
    </div>
    <div class="card-body">
      <p class="card-subtitle"><small class="text-muted">{{props.post.user.name}} {{props.post.user.lastname1}} {{props.post.user.lastname2}}</small></p>
      <p class="card-text"><small class="text-muted">{{props.post.date}}</small></p>
      <p class="card-text">{{props.post.description}}</p>
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