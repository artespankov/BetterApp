const mongoose = require('mongoose');
const {mongoURI} = require("../config/keys");
const { Schema } = mongoose; // destructuring, means we initialize the constant with the same name variable inside of module 'mongoose'



const userSchema = new Schema({
    'googleID': String
})

mongoose.model('users', userSchema);