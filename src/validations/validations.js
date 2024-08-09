import { body } from "express-validator";

export const tasksValidations = [
    body("title")
        .isString().withMessage("El título debe ser un string")
        .notEmpty().withMessage("El título no puede ser una cadena vacía")
        .isLength({min: 5, max: 255}).withMessage("El titulo no puede tener menos de 5 caracteres ni más de 255"),
    body("description")
        .isString().withMessage("La descripción debe ser un string")
        .notEmpty().withMessage("La descripción no puede ser una cadena vacía"),
    body("isComplete")
        .isBoolean().withMessage("El estado de la tarea debe ser un valor booleano"),
]