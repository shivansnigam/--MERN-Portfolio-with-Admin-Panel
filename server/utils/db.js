const mongoose = require("mongoose")
const URI = "mongodb://127.0.0.1:27017/MERN_Admin"

// const URI = "mongodb+srv://shivanshnigam335:sknigam1@cluster0.jhypfp3.mongodb.net/MERN_Admin?retryWrites=true&w=majority&appName=Cluster0"
// const URI = process.env.MONGODB_URI
mongoose.connect(URI)
const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("connection is success")
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    }
}
module.exports = connectDB;