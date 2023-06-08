<script setup>
import { defineProps } from "vue";

const props = defineProps(["name", "value"])
</script>

<template>
  <input type="radio" :name="props.name"/>
  <label :for="props.name" :data-label="props.value"></label>
</template>

<style scoped>
</style>