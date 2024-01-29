const Task = require('../models/task');
const taskController = {
    createTask: async (req, res) => {
        try {
            const { title, description } = req.body;
            const newTask = new Task({ title, description });
            const task = await newTask.save();
            res.status(201).json({
                message: 'Task created successfully',
                task: task,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error',
            });
        }
    },

    // Function to mark a task as completed
    completeTask: async (req, res) => {
        try {
            const { taskId } = req.params;
            const updatedTask = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
            res.json({
                message: 'Task marked as completed',
                task: updatedTask,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error',
            });
        }
    },

    // Function to get all tasks
    getAllTasks: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.json({
                message: 'Tasks fetched successfully',
                tasks: tasks,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error',
            });
        }
    },

    // Function to delete a task
    deleteTask: async (req, res) => {
        try {
            const { taskId } = req.params;
            await Task.findByIdAndDelete(taskId);
            res.json({
                message: 'Task deleted successfully',
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Internal Server Error',
            });
        }
    },
};

module.exports = taskController;