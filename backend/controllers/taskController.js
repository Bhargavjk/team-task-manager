const Task = require("../models/Task");

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate("assignedTo", "name email")
            .populate("project", "name");

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTaskStatus = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        task.status = req.body.status || task.status;

        await task.save();

        res.json(task);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};