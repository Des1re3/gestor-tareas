<template>
    <div class="gestor-tareas text-center">
    <h2 class="text-purple-700 text-2xl font-myFont font-bold mb-4">Secciones de la Aplicación</h2> <ul>
        <li>
          <i class="bi bi-plus-circle"></i>
          <strong>Añadir Tarea</strong>: Permite ingresar nuevas tareas manualmente.
        </li>
        <li>
          <i class="bi bi-list-task"></i>
          <strong>Lista de Tareas</strong>: Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.
        </li>
        <li>
          <i class="bi bi-grid"></i>
          <strong>Vista Combinada</strong>: Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
        </li>
      </ul>
    </div>
  </template>

<style scoped>
.gestor-tareas ul {
    list-style: none;
    padding: 0;
  color: rgba(142, 141, 141, 0.925);
  font-weight: 600;
  font-size:larger
}
  

  .text-purple-700 {
  text-shadow: 1px 1px 2px rgba(215, 17, 169, 0.5);
}

.font-myFont {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
  </style>