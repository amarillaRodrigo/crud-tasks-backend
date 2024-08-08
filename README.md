# CRUD

Este proyecto es un backend simple para gestionar tareas utilizando Node.js, Express y MySQL.

## Descripción

CRUD proporciona una API RESTful para crear, leer, actualizar y eliminar tareas. 
Utiliza Express para el servidor, MySQL para la base de datos e incluye middleware para CORS y registro de solicitudes.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <url-del-repositorio>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd crud-tasks-backend
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
    

## Configura la base de datos

1. Crea una base de datos llamada `tasks_db`.
2. En phpMyAdmin, crea una tabla llamada `tasks` con las siguientes columnas:
    - `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
    - `title` (VARCHAR, 255)
    - `description` (TEXT)
    - `isComplete` (BOOLEAN)
    
## Uso

1. Inicia la aplicación en modo desarrollo:
    ```sh
    npm run dev
    ```
2. El servidor estará ejecutándose en `http://localhost:3030`.

3. Utiliza Thunder Client para interactuar con la API mediante los siguientes endpoints.



## Endpoints

- `GET /tasks`: Recuperar todas las tareas.
- `GET /tasks/:id`: Recuperar una tarea por ID. Debe sustituir `:id` por un número de ID específico.
- `POST /tasks`: Crear una nueva tarea. Debe proporcionar a través del body los siguientes campos:
  - `title` (string)
  - `description` (string)
  - `isComplete` (boolean, debe ser un valor `true` o `false`)
- `PUT /tasks/:id`: Actualizar una tarea por ID. Debe sustituir `:id` por el ID de la tarea que desea modificar y proporcionar a través del body los siguientes campos:
  - `title` (string)
  - `description` (string)
  - `isComplete` (boolean, debe ser un valor `true` o `false`)
- `DELETE /tasks/:id`: Eliminar una tarea por ID. Debe sustituir `:id` por el ID que corresponde a la tarea que desea eliminar.
