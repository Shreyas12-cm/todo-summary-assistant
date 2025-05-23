const express = require('express');
const cors = require('cors');
require('dotenv').config();

const todoRoutes = require('./routes/todos')
const app = express();
app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
  res.send('Todo Summary Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

