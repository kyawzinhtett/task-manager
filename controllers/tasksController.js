const Task = require('../models/Task');
const asyncHandler = require('../middlewares/async');

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({
    number: tasks.length,
    tasks,
  });
});

const createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res.status(404).json({
      message: `No task found with this id: ${taskID}`,
    });
  }

  res.status(200).json({ task });
});

const editTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({
      message: `No task found with this id: ${taskID}`,
    });
  }

  res.status(200).json({ task });
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({
      message: `No task found with this id: ${taskID}`,
    });
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
