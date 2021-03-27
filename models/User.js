const mongoose = require('mongoose');
const Schema = require('schema');

//create user schema aka what properites they will have.
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: password,
        required: true,
    },
    major:{
        type: String,
        required: true,
    }
});

module.exports = User = mongoose.model("users", userSchema);