const mongoose = require ('mongoose');

const  userSchema = new mongoose.Schema({
    fName:String,
    lName:String,
    role:String,
    UID:String,
    phone:String,
    email:String,
    password:String
})

module.exports = mongoose.model("users",userSchema)