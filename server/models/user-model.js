const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});


// secure the password with bcrypt
userSchema.pre("save", async function (next) {
    // console.log("pre method",this);\
    const user = this;

    if (!user.isModified("password")) {
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
});

// compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
    const secretKey = "WORDBESTMERNSERCIES"; // ya environment variable se
    try {
        return jwt.sign(
            {
                userID: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            secretKey,
            {
                expiresIn: "30d", 
            }
        );
    } catch (error) {
        console.log(error);
    }
};

const User = new mongoose.model("User", userSchema)

module.exports = User;

