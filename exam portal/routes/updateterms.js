var express = require('express');
var router = express.Router();
var db = require('../std');
var alert = require('alert');

router.get('/', (req, res) => {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query(`Select * from rules ORDER BY id ASC;`, (err, result) => {
            if (!err) {
                // res.send(result.rows);
                // console.log(result.rows);
                res.render('updateterms', { userdata: result.rows })
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
    db.query('SELECT terms from rules where terms =$1', [req.body.terms], (err, result) => {
        if (true) {
            if (result.rowCount > 0) {
                if (result.rows[0].terms == req.body.terms) {
                    fe = true;
                    // JSAlert.alert("Email Already Registered ");
                    alert("Terms Already Exits");
                    console.log('Quetions Already Exits');
                    return res.redirect('/updateterms');
                }
            }
        }
        // store all the user input data
        let user = req.body;
        let insertQuery = `insert into rules(terms) 
                         values('${user.terms}')`;

        db.query(insertQuery, (err, result) => {

            if (!err) {
                // res.render('form', { create: result.rows })
                // res.send('Insertion was successful');
                alert("Add  successful");
                console.log(' terms added sucessfully ');
            } else console.log(err.message);
        })
        res.redirect('/updateterms');
    });
});
module.exports = router;