const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Company = require('../models/Company');
const generateToken = require('../generateToken');
const verifyToken = require('../verifyToken'); // Import middleware

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

        if (!password) {
            return res.status(400).json({ message: 'Password is required.' });
        }

        const existingCompany = await Company.findOne({ companyEmail });
        if (existingCompany) {
            return res.status(400).json({ message: 'Email is already registered.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCompany = new Company({
            companyName,
            password: hashedPassword,
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

        if (!companyEmail || !password) {
            return res.status(400).json({ message: 'Please provide both companyEmail and password.' });
        }

        const company = await Company.findOne({ companyEmail });

        if (!company) {
            return res.status(404).json({ message: 'Company not found.' });
        }

        const isMatch = await bcrypt.compare(password, company.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const user = {
            id: company.id,
            companyName: company.companyName // Include companyName
        };

        const authToken = generateToken(user);
        res.status(200).json({ company, authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Route to get all companies
router.get('/getComp', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

// Route to get company details by ID
router.get('/:id', async (req, res) => {
    const companyId = req.params.id;
    try {
        const companyDetails = await Company.findById(companyId);
        if (!companyDetails) {
            return res.status(404).json({ message: 'Company not found.' });
        }
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error('Error fetching company details:', error);
        res.status(500).json({ message: 'An error occurred while fetching company details.' });
    }
});

// Protected route example
router.get('/auth/protected-route', verifyToken, async (req, res) => {
    // Only executed if the token is valid
    // Access authenticated company information via req.user
    res.json({ message: 'Protected company route accessed successfully.', user: req.user });
});

module.exports = router;
