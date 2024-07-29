const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(255),
  
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255),
  
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(20),
  
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024),
});


// login ZOD  SCHEMA

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255),
  
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024),
});

module.exports = { signupSchema, loginSchema };





// const { z } = require("zod");
// const signupSchema = z.object ({
//    username:z
//    .string({required_error:"name is required"})
//    .trim()
//    .min(3,{message:"name must be at lest of 3 chars"})
//    .max(255,{message:"name must not be more than 225 characters"}),
//    email:z
//    .string({required_error:"email is required"})
//    .trim()
//    .email({message:"Please enter a valid email address"})
//    .min(3,{message:"email must be at lest of 3 chars"})
//    .max(255,{message:"email must not be more than 225 characters"}),
//    phone:z
//    .string({required_error:"phone is required"})
//    .trim()
//    .min(10,{message:"phone must be at lest of 3 chars"})
//    .max(20,{message:"phone must not be more than 225 characters"}),
//    password:z
//    .string({required_error:"password is required"})
//    .min(7,{message:"password must be at lest of 6 chars"})
//    .max(1024,{message:"password  must not be more than 1024 characters"}),

// });
// module.exports = signupSchema;

