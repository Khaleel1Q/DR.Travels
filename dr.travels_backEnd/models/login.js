const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    _id: Number,
    userName: String,
    password: String
});

const Login = mongoose.model('login', loginSchema);

module.exports={Login}