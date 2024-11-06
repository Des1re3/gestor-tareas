<template>
  <div class="container d-flex justify-content-center">
    <div>
      <h1 class="text-purple-700 text-2xl font-myFont font-bold mb-4">Lista de Tareas</h1>
      <button class="btn btn-primary" @click="fetchTasks"><i class="bi bi-arrow-clockwise mx-1 fa-fw"></i> Cargar Tareas
      </button>
      <div v-if="tasks.length > 0">
        <div v-for="task in tasks" :key="task.id" class="task">
          <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
          <div class="task-actions">
            <button class="btn btn-sm btn-success" @click="toggleTaskCompletion(task)">
              <i class="bi bi-file-check-fill" v-if="!task.completed"></i>
              <i class="bi bi-file-check" v-if="task.completed"></i>
            </button>
            <button class="btn btn-sm btn-danger" @click="deleteTask(task)"><i class="bi bi-trash-fill"></i></button>
          </div>
          <div class="task-actions-bottom">
            <span :class="{ completa: task.completed, pendiente: !task.completed }">{{ task.completed ? 'Completa' : 'Pendiente' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "TaskList",
  data() {
      return {
          tasks: [], // Almacenamiento local de las tareas traídas de la API
      };
  },
  methods: {
      // Llamada para obtener las tareas desde la API externa
      async fetchTasks() {
          try {
    const response = await axios.get('https://dummyjson.com/todos');
    this.tasks = response.data.todos; // Ajusta esto según la estructura de tu API
  } catch (error) {
    console.error('Error fetching tasks:', error);
          // Aquí deberían realizar la solicitud a la API usando axios o fetch.
          // La URL que usaremos es: https://dummyjson.com/todos

          // Sugerencia: Intentar implementarlo con axios o fetch
  }
      },

      // Cambiar el estado de una tarea (completada/no completada)
      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },

      // Eliminar la tarea seleccionada
      deleteTask(task) {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
  },
};
</script>

 <style scoped>
.completa {
  color: rgb(5, 151, 88);
  font-weight: bold;
}

.btn-primary {  
  background-color: #007bff; 
  color: white;
  display: flex; 
  justify-content: center; 
}

.text-purple-700 {
text-shadow: 1px 1px 2px rgba(215, 17, 169, 0.5);
}

.font-myFont {
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
text-align: center;
}
.task {
border: 1px solid #ddd;
min-height:fit-content;
padding: 10px;
margin-bottom: 10px;
background-color: #f9f9f9;
margin: 0 auto; 
display: flex; 
flex-direction: column; 
align-items: center; 
}

.task-action-button {
padding: 5px 8px;
font-size: 14px;
border-radius:0%; 
display: flex;
justify-content: flex-end;
}

.pendiente {
color: rgba(218, 214, 21, 0.876);
font-weight: bold;
}


button {
margin-left: 5px;
padding: 5px 10px;
border: none;
background-color: none; /* Verde para completar */
color: white;
border-radius: 3px;
cursor: pointer;
}

.delete-button {
background-color: #f44336; /* Rojo para eliminar */
}

.btn-success,
.btn-danger {
  margin-right: 10px; 
}
</style>


