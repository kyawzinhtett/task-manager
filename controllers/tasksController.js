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

const getTask = (req, res) => {
  res.send('Get single task');
};

const editTask = (req, res) => {
  res.send('Edit task');
};

const deleteTask = (req, res) => {
  res.send('Delete task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
