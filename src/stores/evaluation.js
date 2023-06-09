import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEvaluationStore = defineStore('evaluation', () => {
    const skill1 = ref(0)
    const skill2 = ref(0)
    const skill3 = ref(0)

    const getSkill1 = computed(() => skill1.value)
    const getSkill2 = computed(() => skill2.value)
    const getSkill3 = computed(() => skill3.value)

    function setSkill1(newSkill1) {
        skill1.value = newSkill1
    }

    function setSkill2(newSkill2) {
        skill2.value = newSkill2
    }

    function setSkill3(newSkill3) {
        skill3.value = newSkill3
    }

    return {getSkill1, setSkill1, getSkill2, setSkill2, getSkill3, setSkill3}
})