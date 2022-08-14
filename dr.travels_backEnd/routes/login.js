var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
url='mongodb://localhost:27017/drtravels';
const { Login } = require('../models/login.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.connect(url, function(err, db) {
        if (err) {
            console.log(err);
        }
        else{
            const user = Login.find({userName: "Khaleel"}, function(err, user) {
                if (err){
                    console.log(err);
                }
                else{
                    console.log('USER DETAILS: ' + user)
                }
            });
            console.log(user);
        }
    });
    res.send("SUCCESS Fully Loaded");
  });


/* POST users listing. */
router.post('/', function(req, res, next) {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, function(err, db) {
        if (err) {
            console.log(err);
        }
        else{
            const loginData = [{
                userName: req.username,
                password: req.password
            }]
            Login.insertMany(loginData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
console.log('success')
        }
        });
  mongoose.disconnect();
});

module.exports = router;
