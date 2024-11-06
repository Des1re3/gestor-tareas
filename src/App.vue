<template>
  <!-- Barra de navegación con enlaces a diferentes rutas -->
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page"><img src="./assets/lateral.png" alt="lateral" width="30" height="30" class="me-3">Gestor de tareas</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/AddTask" class="nav-link"><i class="bi bi-plus-circle mx-1"></i>Añadir tarea</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/TaskList" class="nav-link"><i class="bi bi-layout-text-window-reverse mx-1"></i>Lista de Tareas</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="CombinedView" class="nav-link"><i class="bi bi-grid mx-1"></i>Vista Combinada</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container-fluid mt-3">
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/> 
  </div>
</div>
</template>

