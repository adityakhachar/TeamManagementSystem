const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Company = require('../models/Company');

// Route to handle company registration
router.post('/register', async (req, res) => {
    try {
        const {
            companyName,
            password,
            companyEmail,
            directorName,
            description,
            technologies,
            numberOfProjects,
            numberOfEmployees,
            city,
            location
        } = req.body;

        // Ensure password is provided
        if (!password) {
            return res.status(400).json({ message: 'Password is required.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password with salt rounds

        const newCompany = new Company({
            companyName,
            password: hashedPassword, // Store hashed password
            companyEmail,
            directorName,
            description,
            technologies,
            numberOfProjects,
            numberOfEmployees,
            city,
            location
        });

        await newCompany.save();
        res.status(201).json({ message: 'Company registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});


// Route to handle company login
router.post('/cmplogin', async (req, res) => {
    try {
        const { companyEmail, password } = req.body;

        // Basic validation
        if (!companyEmail || !password) {
            return res.status(400).json({ message: 'Please provide both companyEmail and password.' });
        }

        // Find company by companyEmail
        const company = await Company.findOne({ companyEmail });

        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, company.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Return the company object if login is successful
        res.status(200).json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

module.exports = router;
