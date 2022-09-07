
var express = require('express');
var router = express.Router();
var db = require('../std');
var alert = require('alert');


router.get('/', function (req, res, next) {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query(`Select * from qhtml ORDER BY id ASC;`, (err, result) => {
            if (!err) {
                // res.send(result.rows);
                console.log(result.rows);
                res.render('qhtml', { userData: result.rows })
            }
            else {
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
    db.query('SELECT q from qhtml where q =$1', [req.body.q], (err, result) => {
        if (true) {
            console.log("hello check");
            if (result.rowCount > 0) {
                if (result.rows[0].q == req.body.q) {
                    fe = true;
                    // JSAlert.alert("Email Already Registered ");
                    // alert("Term Already Registered ");
                    alert("Quetions Already Exits");
                    console.log('Quetions Already Exits');
                    return res.redirect('/qhtml');
                }
            }

        }
        console.log("Post Router");
        // store all the user input data
        let user = req.body;
        let insertQuery = `insert into qhtml(q, a, b, c, d,ans) 
                     values('${user.q}', '${user.a}', '${user.b}', '${user.c}', '${user.d}', '${user.ans}')`;

        db.query(insertQuery, (err, result) => {

            console.log("Query Runnnn");
            if (!err) {
                // res.render('form', { create: result.rows })
                // res.send('Insertion was successful');
                alert("Add Succesfully");
                console.log('Question Added');
            }
            else console.log(err.message);
        })
        res.redirect('/qhtml');
        // redirect to user form page after inserting the data


    });
});
module.exports = router;