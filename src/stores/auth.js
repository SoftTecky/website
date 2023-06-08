import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const id = ref(1)

    const getId = computed(() => id.value)

    function setId(newId) {
        id.value = newId
    }

    return {getId, setId}
})
