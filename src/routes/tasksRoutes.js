import express  from "express";
import TaskController from "../controllers/tasksController.js";
import DoneTaskController from "../controllers/doneTaskController.js";

// Creates a new router object in an Express application
const router = express.Router();

// Routes to GET, POST, PUT, and DELETE
router
    .get('/tasks', TaskController.listAllTasks)
    .post('/tasks', TaskController.createTask)
    .put('/tasks/:id', TaskController.updateTask)
    .delete('/tasks/:id', TaskController.deleteTask)
    
    // Done Task Controller
    .get('/done-tasks', DoneTaskController.listAllDoneTasks)
    .post('/done-tasks', DoneTaskController.createDoneTask)
    .delete('/done-tasks/:id', DoneTaskController.deleteDoneTask)

export default router;