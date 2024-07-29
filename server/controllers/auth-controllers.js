const User = require("../models/user-model")
const bcrypt = require("bcryptjs");
// *------------------------
// HOME LOGIC
// *------------------------
const home = async (req, res) => {
    try {
        res
            .status(200).send("welcome to server")
    } catch (error) {
        res.status(400).send("page not found")
    };

}

// *------------------------
// Registration Logic
// *------------------------

const register = async (req, res) => {
    console.log("")
    
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "email already exists" });
        }
        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound)
        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
        });

        const token = await userCreated.generateToken(); // generateToken se token lein

        res.status(201).json({
            msg: "registration successful",
            token, // include token in response
            userID: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};
// *------------------------
// user login
// *------------------------

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist) {
            return res.status(400).json({message:"invalid creadentials"});
        }
        // const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.comparePassword(password);
        if(user) {
            res.status(201).json({
                msg: "login successfull",
                token: await userExist.generateToken(),
                userID: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"invalid email or password"});
        }
    } catch (error) {
        // res.status(500).json("internal server error")
        next(error);
    }
}

// to  send user data user logic
const user = async(req,res) => {
    try{
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({userData})
    }catch(error){
        console.log(`error from the user route ${error}` )
    }
}


module.exports = { home, register,login,user };