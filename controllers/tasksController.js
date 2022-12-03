const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
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
