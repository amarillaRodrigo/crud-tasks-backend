import express from "express";
import { controller } from "../controllers/task_controllers.js";
import { body } from "express-validator";
import {
  tasksValidations,
  tasksValidationsUpdate,
} from "../validations/task_validations.js";
import { applyvalidations } from "../applyValidations/applyValidations.js";

export const taskRoutes = express.Router();

// Obtener tareas
taskRoutes.get("/", body(), controller.getAllTasks);

//Obtener tarea por ID
taskRoutes.get("/:id", body(), controller.getTaskById);

//Crear tarea
taskRoutes.post("/", tasksValidations, applyvalidations, controller.createTask);

//Actualizar tarea
taskRoutes.put(
  "/:id",
  body(),
  tasksValidationsUpdate,
  applyvalidations,
  controller.updateTask
);

//Eliminar tarea
taskRoutes.delete("/:id", body(), controller.deleteTask);

export default taskRoutes;
