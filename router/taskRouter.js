const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// Create a new task
router.post('/', taskController.createTask);

// Mark a task as completed
router.put('/:taskId/complete', taskController.completeTask);

// Retrieve a list of all tasks
router.get('/', taskController.getAllTasks);

// Delete a task
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
