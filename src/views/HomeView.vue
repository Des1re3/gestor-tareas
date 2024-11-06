<template>
  <div class="home">
    <div class="text-center">
      <h1 class="text-purple-700 text-2xl font-myFont font-bold mb-4">Bienvenido a la Aplicación de</h1>
      <h1 class="text-purple-700 text-2xl font-myFont font-bold mb-4">Tareas con Lateral</h1>
      <p>Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas</p><p>manualmente o extraerlas desde una API.</p>
      <img src="../assets/lateral.png" alt="Logo Lateral Studio" class="img-fluid rounded-circle mb-4">
    </div>
    <GestorTareas msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>
// @ is an alias to /src
import GestorTareas from '@/components/GestorTareas.vue';


export default {
  name: 'HomeView',
  components: {
    GestorTareas
  }
}
</script>

<style scoped>
  .text-purple-700 {
  text-shadow: 1px 1px 2px rgba(215, 17, 169, 0.5);
}

.font-myFont {
  font-family:unset;
  font-weight: bolder;
  line-height: 1;
}
p {
  color: rgba(142, 141, 141, 0.925);
  font-weight: 600;
  font-size:larger
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  </style>
