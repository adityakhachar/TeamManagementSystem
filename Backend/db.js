const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://aditya:<password>@teamcluster.9tdjzfn.mongodb.net/?retryWrites=true&w=majority&appName=teamcluster";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true  // Corrected option name
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
