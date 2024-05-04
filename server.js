// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/connect'); 
const employeeRoutes = require('./routes/employeeRoutes'); 

const app = express();

app.use(bodyParser.json());

// db connection
connectDB()
  .then(() => {
    startServer();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/api', employeeRoutes);

function startServer() {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`started on port ${PORT}`);
  });
}
