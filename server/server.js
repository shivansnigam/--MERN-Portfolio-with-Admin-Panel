
// require("dotenv").config(); 
const express = require("express");
const app = express();
const cors = require('cors');
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// --------------
// handling CORS POLICES USING CORS
// --------------

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174']; // Add more as needed

// Dynamic CORS Middleware
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true, // Note that this should be 'credentials' and not 'Credential'
};

// ---------
// yeh opitional h code cors ke liye agr upr wala nahi chala toh yeh chalo kar dena

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     Credential: true,
    
// };
// --------

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRoute);

// let define admin user
app.use("/api/admin",adminRoute);


app.use(errorMiddleware);


// server setup stytem section
const port = 5000;
const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict your future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict your future is to create it.",
    "Success is not a destination, it's a journey.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Every accomplishment starts with the decision to try.",
    "Your attitude determines your direction.",
    "The only limit to our realization of tomorrow is our doubts of today."

];
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
const startupTime = new Date().toLocaleString();

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is listing: ${port}`);
        console.log(`💡 Motivation for the day: "${getRandomQuote()}"`);
        console.log(`🕒 Server started at: ${startupTime}`);

    });
})


