var express = require('express');
var router = express.Router();
var db = require('../std');
var alert = require('alert');
router.get('/', (req, res) => {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query(`Select * from users ORDER BY s_id ASC;`, (err, result) => {
            if (!err) {
                res.render('addnew', { userdata: result.rows })
            } else {
                console.log(err.stack);
            }
        });
        db.end;
    } else {
        res.redirect('login')
    }
});

module.exports = router;

router.post('/create', function (req, res, next) {

    db.query('SELECT email from users where email =$1', [req.body.email], (err, result) => {
        if (true) {
            if (result.rowCount > 0) {
                if (result.rows[0].email == req.body.email) {
                    fe = true;
                    alert("Email Already Registered");
                    console.log('Email Already Registered');
                    return res.redirect('/addnew');
                }
            }
        }
        // store all the user input data
        let user = req.body;
        let insertQuery = `insert into users(name, email, username, password, qualification) 
                         values('${user.name}', '${user.email}', '${user.username}', '${user.password}', '${user.qualification}')`;

        db.query(insertQuery, (err, result) => {

            if (!err) {
                alert("Registration Successful...Login from admin");
                // console.log('Registration Successful...Login from admin');
            } else console.log(err.message);
        })
        res.redirect('/addnew');
    })
});
module.exports = router;