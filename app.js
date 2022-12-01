const express = require('express');

const app = express();
const PORT = 3000;

app.use('/api/v1/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
