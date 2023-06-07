<script>
import Auto_evaluacion from './EvaluationComponent.vue'
import Evaluar_a_otras_personas from './SelfEvaluationComponent.vue' //importamos los componentes que se crearon 


export default {
  /* eslint-disable */ 
  components: {
    Auto_evaluacion, // se guardan los componentes creados en una variable
    Evaluar_a_otras_personas
    
  },
  data() {
    return {
      currentTab: 'Auto_evaluacion',
      tabs: ['Auto_evaluacion', 'Evaluar_a_otras_personas'] // crear un arreglo con los componentes
     
    }
  }
}

 
</script>

<template>
  <div class="demo"> <!--  ciclo for para mostrar los componentes en ambas pestañas-->
    <button
       v-for="tab in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
     
      {{ tab.split('_').join(' ') }} 
    </button>
    
	  <component :is="currentTab" class="tab"></component>
  </div>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0px;
  margin-top: 0em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
  
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
  
}
.tab-button:hover {
  background: #e0e0e0;
 
}
.tab-button.active {
  background: #e0e0e0;
}
/*.tab {
  border: 1px solid #ccc;
  padding: 10px;
}*/


</style>