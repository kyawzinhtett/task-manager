const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      number: tasks.length,
      tasks,
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        message: `No task found with this id: ${taskID}`,
      });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const editTask = (req, res) => {
  res.send('Edit task');
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        message: `No task found with this id: ${taskID}`,
      });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
