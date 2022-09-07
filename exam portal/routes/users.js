var express = require('express');
// var popup = import {confirm} from 'node-popup';
// import alert from 'alert'
// var JSAlert = require("js-alert");
var alert = require('alert');

var router = express.Router();
var db = require('../std');

router.get('/', function (req, res, next) {
  res.render('users');
});
router.post('/create', function (req, res, next) {
  db.query('SELECT email from users where email =$1', [req.body.email], (err, result) => {
    if (true) {
      if (result.rowCount > 0) {
        if (result.rows[0].email == req.body.email) {
          fe = true;
          // JSAlert.alert("Email Already Registered ");
          alert("Email Already Registered ");
          console.log('Email Already Registered');
          return res.redirect('/users');
        }
      }
    }
    // store all the user input data
    let user = req.body;
    let insertQuery = `insert into users(name, email, username, password, qualification) 
                     values('${user.name}', '${user.email}', '${user.username}', '${user.password}', '${user.qualification}')`;

    db.query(insertQuery, (err, result) => {

      if (!err) {
        // res.render('form', { create: result.rows })
        // res.send('Insertion was successful');
        console.log('Registration Successful...Login For More');
        alert("Registration Successful...Login For More ");
      }
      else console.log(err.message);
    })
    res.redirect('/login');
    // redirect to user form page after inserting the data
  })
});
module.exports = router;