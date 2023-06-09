<script setup>
import NotificationItem from "@/components/notifications/NotificationItem.vue";
import { ref } from "vue";

const notifications = ref([
  {
    id: 1,
    text: "Notification text",
    datetime: "2021-01-01 00:00:00",
    user: "User name",
  },
  {
    id: 2,
    text: "Notification text",
    datetime: "2021-01-01 00:00:00",
    user: "User name",
  },
  {
    id: 3,
    text: "Notification text",
    datetime: "2021-01-01 00:00:00",
    user: "User name",
  },
]);
</script>

<template>
  <div class="container">
    <div class="notification--container">
      <NotificationItem
        v-for="n in notifications"
        :key="n.id"
        :description="n.text"
        :user="n.user"
        :datetime="n.datetime"
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
