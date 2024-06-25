const mongoose = require('mongoose');

// Define the schema for company details
const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    companyEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    directorName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    technologies: {
        type: [String],
        enum: ['PHP', 'React JS', 'Node JS', 'Express JS', 'Flutter'],
        required: true
    },
    numberOfProjects: {
        type: String,
        enum: ['0-100', '100-200', '200-300', '300-400', '500+'],
        required: true
    },
    numberOfEmployees: {
        type: String,
        enum: ['0-100', '100-200', '200-300', '300-400', '500+'],
        required: true
    },
    city: {
        type: String,
        enum: ['Ahmedabad', 'Gandhinagar', 'Delhi', 'Pune'],
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

// Create the model from the schema and export it
const Company = mongoose.model('Company', companySchema);
module.exports = Company;
