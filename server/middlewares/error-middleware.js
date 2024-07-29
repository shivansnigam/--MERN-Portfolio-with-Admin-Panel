// const errorMiddleware = (err, req, res, next) => {
//     // Log the error for debugging purposes
//     console.error("Error occurred:", err);

//     const statusCode = err.status || 500;  // More descriptive variable name
//     const errorMessage = err.message || "Internal Server Error";  // More generic fallback message
//     const errorDetails = err.extraDetails || "An unexpected error occurred";  // More user-friendly description
    
//     // Return the error response with status, message, and details
//     return res.status(statusCode).json({
//         success: false,
//         message: errorMessage,
//         details: errorDetails,
//     });
// };

// module.exports = errorMiddleware;



const errorMiddleware = (err,req,res,next) =>{
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "ERROR FROM Backend"
    return res.status(status).json({message,extraDetails});
}
module.exports = errorMiddleware;

