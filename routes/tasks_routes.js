
import express from 'express';
import { controller } from '../controllers/task_controllers.js';

export const taskRoutes = express.Router();

// Obtener tareas
taskRoutes.get('/tasks', controller.getAllTasks);

//Obtener tarea por ID
taskRoutes.get('/task/:id', controller.getTaskById);

//Crear tarea
taskRoutes.post('/tasks', controller.createTask);

//Actualizar tarea
taskRoutes.put('/task/:id', controller.updateTask);

//Eliminar tarea
taskRoutes.delete('/task/:id', controller.deleteTask);

export default taskRoutes;