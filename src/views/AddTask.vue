<template>
    <div class="add-task-container">
        <h1 class="text-purple-700 text-2xl font-myFont font-bold mb-4">Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
                    <button class="btn btn-sm btn-success" @click="toggleTaskCompletion(task)">
                        {{ task.completed ? '' : '' }}
                        <i class="bi bi-file-check-fill" v-if="!task.completed"></i>
                        <i class="bi bi-file-check" v-if="task.completed"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" @click="deleteTask(task)"><i class="bi bi-trash-fill"></i></button>
                    <span :class="{ completa: task.completed, pendiente: !task.completed }">{{ task.completed ? 'Completa' : 'Pendiente' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
            tasks: [],   // Lista de tareas locales
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(), 
            };

            // Añadir la nueva tarea al inicio de la lista
            this.tasks.unshift(newTask);
            this.newTask = ""; // Limpiar el campo de entrada después de agregar
        },

        // Elimina una tarea específica de la lista
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

        // Cambia el estado de la tarea entre completada y no completada
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
    },
};
</script>

<style scoped>
.completa {
  color: rgb(5, 151, 88);
  font-weight: bold;
}

.pendiente {
  color: rgb(164, 164, 2);
  font-weight: bold;
}
.text-purple-700 {
  text-shadow: 1px 1px 2px rgba(215, 17, 169, 0.5);
}

.font-myFont {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.btn-success,
.btn-danger {
  margin-right: 10px; 
}

</style>
