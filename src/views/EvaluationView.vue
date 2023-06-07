<template>
    <div class="tabs">
        <EvaluationComp></EvaluationComp>

    </div>
  
     
    
  
   
  </template>
  
  <script>
  // @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
  import EvaluationComp from "@/components/TabsView.vue";
  
  
  export default {
    name: "EvaluarTabs",
    components: {
      EvaluationComp
    },
  };
  </script>
  
  <style scope>
  
  
  .tabs {
    background: transparent;
    padding: 0em;
    
    

    
  }
  </style>
  