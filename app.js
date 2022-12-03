const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');

// Database connect
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
