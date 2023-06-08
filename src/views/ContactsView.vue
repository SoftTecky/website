<script setup>
import {ref} from "vue";
import ContactItem from "@/components/contacts/ContactItem.vue";

const contacts = ref([
  {
    id: 1,
    name: "Jhon",
    lastname1: "Doe",
    lastname2: "Doe",
    phone: "123456789",
    email: "email@email.com"
  },
  {
    id: 2,
    name: "Jhon",
    lastname1: "Doe",
    lastname2: "Doe",
    phone: "123456789",
    email: "email@email.com"
  },
  {
    id: 3,
    name: "Jhon",
    lastname1: "Doe",
    lastname2: "Doe",
    phone: "123456789",
    email: "email@email.com"
  },
])
</script>

<template>
  <!-- A view with a list of <contact-item> where the user can see all their contacts -->
  <div class="p-1 py-3 col-12 col-md-8 col-lg-6 col-xl-5">
    <contact-item v-for="contact in contacts" :key="contact.id" :contact="contact"/>
  </div>
</template>

<style scoped>

</style>