const {Schema,model} = require("mongoose");
const { string } = require("zod");

const contactSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
});

const Contact = new model("Contact",contactSchema);
module.exports = Contact;


