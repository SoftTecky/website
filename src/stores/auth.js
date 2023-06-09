import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const id = ref(0);
  const name = ref("John");
  const lastname1 = ref("Doe");
  const lastname2 = ref("");
  const email = ref("");
  const avatar = ref("");

  const getId = computed(() => id.value);
  const getName = computed(() => name.value);
  const getLastname1 = computed(() => lastname1.value);
  const getLastname2 = computed(() => lastname2.value);
  const getEmail = computed(() => email.value);
  const getAvatar = computed(() => avatar.value);

  const canAccess = computed(() => id.value > 0);

  function setId(newId) {
    id.value = newId;
  }

  function setName(newName) {
    name.value = newName;
  }

  function setLastname1(newLastname1) {
    lastname1.value = newLastname1;
  }

  function setLastname2(newLastname2) {
    lastname2.value = newLastname2;
  }

  function setEmail(newEmail) {
    email.value = newEmail;
  }

  function setAvatar(newAvatar) {
    avatar.value = newAvatar;
  }

  return {
    getId,
    setId,
    getName,
    setName,
    getLastname1,
    setLastname1,
    getLastname2,
    setLastname2,
    getEmail,
    setEmail,
    getAvatar,
    setAvatar,
    canAccess,
  };
});
