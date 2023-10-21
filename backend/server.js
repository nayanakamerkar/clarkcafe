const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(express.json());

connectDB();
app.use(cors());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
