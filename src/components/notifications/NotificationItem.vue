<script setup>
import blankProfile from "@/assets/blank-profile.webp";

import {
  INSERT_ONE_CONNECTION,
  UPDATE_CONNECTION_REQUEST_STATUS,
} from "@/graphql-operations";
import { useMutation } from "@vue/apollo-composable";
import { useAuthStore } from "@/stores/auth";

const props = defineProps({
  connection: {
    type: Object,
    required: true,
  },
  onConnect: {
    type: Function,
    required: true,
  },
});

const insertConnectionMutation = useMutation(INSERT_ONE_CONNECTION);
insertConnectionMutation.onDone((result) => {
  updateConnectionRequestStatus.mutate({
    connectionRequest_id: props.connection.connectionRequest_id,
  });
});

const updateConnectionRequestStatus = useMutation(
  UPDATE_CONNECTION_REQUEST_STATUS
);
updateConnectionRequestStatus.onDone((result) => {
  props.onConnect();
});

const handleConnectionAccepted = () => {
  insertConnectionMutation.mutate({
    user_id: useAuthStore().getId,
    friend_id: props.connection.userByUserId.user_id,
  });
};
</script>

<template>
  <div class="notification--item">
    <img
      :src="props.connection.userByUserId.avatar || blankProfile"
      alt="profile pic"
    />
    <div>
      <p>
        <strong>
          {{ props.connection.userByUserId.name }}
          {{ props.connection.userByUserId.lastname1 }}
          {{ props.connection.userByUserId.lastname2 }}
        </strong>
        te ha enviado una solicitud de conexion
      </p>
      <div class="flex-row mt-2">
        <button
          @click="handleConnectionAccepted"
          class="btn btn-primary btn-circle me-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
        </button>
        <button class="btn btn-danger btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.btn-circle {
  width: 40px;
  height: 40px;
  font-size: 18px;
  line-height: 1;
  padding: 0;
}
</style>
