const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const port = 5000;
const connectDB = require('./db');
const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee'); // Import employee routes

connectDB(); // Connect to MongoDB

app.use(cors()); // Use cors middleware to handle CORS headers

app.use(express.json()); // Middleware to parse incoming JSON requests

app.use('/api/company', companyRoutes); // Mount company routes

app.use('/api/employee', employeeRoutes); // Mount employee routes correctly

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
