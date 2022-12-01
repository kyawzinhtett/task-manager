const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const createTask = (req, res) => {
  res.send('Create task');
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
