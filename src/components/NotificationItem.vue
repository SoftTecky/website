<script setup>
import { defineProps } from "vue";

defineProps(["description", "datetime", "user"]);
</script>

<template>
  <div class="notification--item">
    <img
      src="https://this-person-does-not-exist.com/img/avatar-gen29316a9cb9e0c716cbe841f496d91950.jpg"
    />
    <div>
      <p>
        <strong>{{ user }}: </strong> {{ description }}
      </p>
      <p>{{ datetime }}</p>
    </div>
  </div>
</template>

<style scoped>
/* create a style for the class notification--item with an image to the left and a description to the right with the date below */

.notification--item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

.notification--item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.notification--item div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.notification--item div p {
  margin: 0;
}
</style>
