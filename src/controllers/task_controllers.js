import { connection } from "../database/db.js";
export const controller = {
  // Obtener tareas
  getAllTasks: async (req, res) => {
    try {
      const conexion = await connection;
      console.log("Conexion a base de datos establecida");
      const [result] = await conexion.query("SELECT * FROM tasks");
      if (result.length === 0) {
        res
          .status(404)
          .json({ msg: "La tarea no está registrada en la base de datos" });
      } else {
        return res.json(result);
      }
    } catch (error) {
      res.status(500).json({ msg: "ERROR INTERNO EN EL SERVIDOR" });
    }
  },

  // Obtener tarea por su id

  getTaskById: async (req, res) => {
    const { id } = req.params;
    try {
      const conexion = await connection;
      const [result] = await conexion.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
      );
      if (result.length === 0) {
        res
          .status(404)
          .json({ msg: "La tarea no está registrada en la base de datos" });
      } else {
        return res.json(result);
      }
    } catch (error) {
      res.status(500).json({ msg: "ERROR INTERNO EN EL SERVIDOR" });
    }
  },

  // Crear tarea
  createTask: async (req, res) => {
    try {
      const conexion = await connection;
      await conexion.query(
        "INSERT INTO tasks (title, description, isComplete) VALUES (?, ?,?)",
        [title, description, isComplete]
      );
      res.status(200).json({ msg: "Tarea creada correctamente" });
    } catch (error) {
      res.status(500).json({ msg: "ERROR INTERNO EN EL SERVIDOR" });
    }
  },

  // Actualizar tarea
  updateTask: async (req, res) => {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    try {
      const conexion = await connection;
      const [taskFound] = await conexion.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
      );
      if (taskFound.length === 0) {
        res.status(404).json({ msg: "Tarea no encontrada" });
      } else {
        const [result] = await conexion.query(
          "UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?",
          [title, description, isComplete, id]
        );
        if (!result.ok) {
          return res.status(200).json({ msg: "Tarea editada correctamente" });
        } else {
          return res.status(400).json({ msg: "No se pudo editar la tarea" });
        }
      }
    } catch (error) {
      res.status(500).json({ msg: "ERROR INTERNO EN EL SERVIDOR" });
    }
  },

  // Eliminar tarea
  deleteTask: async (req, res) => {
    const { id } = req.params;
    try {
      const conexion = await connection;
      const [taskFound] = await conexion.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
      );
      if (taskFound.length === 0) {
        res.status(404).json({ msg: "Tarea no encontrada" });
      } else {
        await conexion.query("DELETE FROM tasks WHERE id = ?", [id]);
        res.status(200).json({ msg: "Tarea eliminada correctamente" });
      }
    } catch (error) {
      res.status(500).json({ msg: "ERROR INTERNO EN EL SERVIDOR" });
    }
  },
};

export default controller;
