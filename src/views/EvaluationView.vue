<template>
    <div class="tabs">
        <EvaluationComp></EvaluationComp> <!-- agregamos el componente tabs a la seccion evaluacion -->

    </div>
  
     
    
  
   
  </template>
  
  <script>
  // @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
  import EvaluationComp from "@/components/TabsView.vue";//importamos nuestro  componente tabs
  
  
  export default {
    name: "EvaluarTabs",
    components: {
      EvaluationComp //creamos una variable para el componente tabs
    },
  };
  </script>
  
  <style scope>
  
  
  .tabs {
    background: transparent;
    padding: 0em;
    
    

    
  }
  </style>
  