<script setup>
import { ref } from "vue";
import ContactItem from "@/components/contacts/ContactItem.vue";

import { useAuthStore } from "@/stores/auth";

import { GET_USER_FRIENDS_BY_ID } from "@/graphql-operations";
import { useQuery } from "@vue/apollo-composable";

const auth = useAuthStore();

const userFriendsQuery = useQuery(GET_USER_FRIENDS_BY_ID, {
  user_id: auth.getId,
});

const contacts = ref([]);

userFriendsQuery.onResult((result) => {
  console.log(result.data?.connections);
  contacts.value = result.data?.connections;
});
</script>

<template>
  <!-- A view with a list of <contact-item> where the user can see all their contacts -->
  <div class="p-1 py-3 col-12 col-md-8 col-lg-6 col-xl-5">
    <contact-item
      v-for="contact in contacts"
      :key="contact.user.user_id"
      :contact="contact.user"
    />
  </div>
</template>

<style scoped></style>
