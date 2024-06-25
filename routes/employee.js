const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const verifyToken = require('../../Backend/verifyToken'); // Import middleware

const jwtSecret = "MyNameIsAdityaKhachar";

// Route to handle employee registration
router.post('/register', async (req, res) => {
    try {
        const {
            name,
            password,
            contact,
            email,
            linkedin,
            technologies,
            skills,
            educationDetails,
            experienceDetails
        } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash with salt rounds = 10

        const newEmployee = new Employee({
            name,
            password: hashedPassword, // Store hashed password
            contact,
            email,
            linkedin,
            technologies,
            skills,
            educationDetails: educationDetails ? educationDetails : [],
            experienceDetails: experienceDetails ? experienceDetails : []
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Route to handle employee login
router.post('/emplogin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide both email and password.' });
        }

        // Find employee by email
        const employee = await Employee.findOne({ email });

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, employee.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const data = {
            user: {
                id: employee.id,
                name: employee.name
            }
        };
        const authToken = jwt.sign(data, jwtSecret);

        // Return the employee object and authToken if login is successful
        res.status(200).json({ employee, authToken });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Route to get all employees
router.get('/getEmp', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Route to get employee details by ID
router.get('/:id', async (req, res) => {
    const employeeId = req.params.id;
    try {
        const employeeDetails = await Employee.findById(employeeId);
        if (!employeeDetails) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        res.status(200).json(employeeDetails);
    } catch (error) {
        console.error('Error fetching employee details:', error);
        res.status(500).json({ message: 'An error occurred while fetching employee details.' });
    }
});

// Protected route example for employees
router.get('/auth/protected-employee-route', verifyToken, async (req, res) => {
    // Only executed if the token is valid
    // Access authenticated employee information via req.user
    res.json({ message: 'Protected employee route accessed successfully.', user: req.user });
});

module.exports = router;
