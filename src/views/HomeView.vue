<template>
  <section class="bodymain">
    <sharebox></sharebox>
    <load></load>
    <load></load>
  </section>

 
</template>

<script>
// @ is an alias to /src import HelloWorld from '@/components/HelloWorld.vue'
import loadSkeleton from "@/components/ScreenSkeleton.vue";
import ModuloComentario from "@/components/ContentMain.vue";

export default {
  name: "VistaPrincipal",
  components: {
    load: loadSkeleton,
    sharebox: ModuloComentario,
  },
};
</script>

<style scope>
/* * { border: red solid 1px; } */
.bodymain {
  background: #f0f4f6;
}
</style>
