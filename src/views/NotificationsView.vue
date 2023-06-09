<script setup>
import NotificationItem from "@/components/notifications/NotificationItem.vue";

import { onUpdated, ref } from "vue";

import { useQuery, useMutation } from "@vue/apollo-composable";
import { useAuthStore } from "@/stores/auth";

import { GET_USER_CONNECTION_REQUESTS } from "@/graphql-operations";

const auth = useAuthStore();

const notifications = ref([]);

const notificationsQuery = useQuery(GET_USER_CONNECTION_REQUESTS, {
  user_id: auth.getId,
});
notificationsQuery.onResult((result) => {
  if (result.data?.connection_requests.length > 0) {
    notifications.value = result.data?.connection_requests;
  }
});

const onConnect = () => {
  notificationsQuery.refetch();
};

onUpdated(() => {
  notificationsQuery.refetch();
});
</script>

<template>
  <div class="container">
    <div class="notification--container">
      <NotificationItem
        v-for="n in notifications.filter((n) => n.accepted === false)"
        :key="n.connectionRequest_id"
        :connection="n"
        :on-connect="onConnect"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem 0;
}

.notification--container {
  background-color: #a8d6ec;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 60%;
  height: 100%;
}
</style>
