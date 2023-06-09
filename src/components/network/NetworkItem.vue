<script setup>
const props = defineProps(["user"]);
</script>

<template>
  <!-- A component for a user view in form of squared cards that had the name, lastname1, lastname2 and the profile picture of the user and also a link to redirect to the profile -->
  <div class="card" style="width: 18rem">
    <img
      class="card-img-top"
      src="https://this-person-does-not-exist.com/img/avatar-gen29316a9cb9e0c716cbe841f496d91950.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ props.user.name }} {{ props.user.lastname1 }}
        {{ props.user.lastname2 }}
      </h5>
      <p class="card-text">{{ props.user.description }}</p>
      <router-link to="/profile/${{props.user.id}}" class="btn btn-primary"
        >View profile</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
