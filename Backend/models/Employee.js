const mongoose = require('mongoose');

// Define schema for each education entry
const educationSchema = new mongoose.Schema({
    collegeName: { type: String, required: true },
    collegeCity: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    leavingDate: { type: Date },
    courseType: { type: String, enum: ['BCA', 'BTech', 'MCA', 'Mtech'], required: true },
    percentage: { type: Number, required: true },
    description: { type: String }
});

// Define schema for each experience entry
const experienceSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    companyCity: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    resigningDate: { type: Date },
    position: { type: String, required: true },
    description: { type: String }
});

// Define main employee schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: { type: String, required: true },
    technologies: [{ type: String, enum: ['PHP', 'Java', 'C'] }],
    skills: [{ type: String, enum: ['HTML', 'CSS', 'BOOTSTRAP5'] }],
    educationDetails: [educationSchema], // Array of education details
    experienceDetails: [experienceSchema] // Array of experience details
}, { collection: 'employees' });

// Create Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
