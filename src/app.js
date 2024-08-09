import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks_routes.js";

const app = express();

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/tasks", tasksRoutes);

//Configuracion del puerto
const PORT = 3030;

//Configuracion del server.
app.listen(PORT, console.log("Servidor funcionando en el puerto:", PORT));
