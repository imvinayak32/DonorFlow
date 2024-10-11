const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// DB
const DB = process.env.DB;

// Function to connect to the database
const dbConnection = async() => {
    try{
        await mongoose.connect(DB).then(() => {
            console.log("Database connected successfully!!");
        })
    } catch(error){
        console.error("Error connecting to database:", error.message);
        setTimeout(dbConnection, 5000);
    }
}

module.exports=dbConnection;