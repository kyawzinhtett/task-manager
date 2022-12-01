const express = require('express');
const {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
} = require('../controllers/tasksController');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(editTask).delete(deleteTask);

module.exports = router;
