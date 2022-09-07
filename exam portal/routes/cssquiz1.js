var express = require('express');
var router = express.Router();
var db = require('../std');

router.post('/', function(req, res, next) {
     sess = req.session;
     sess.subject = req.body.hamojha;
     console.log(sess.subject);
    if(sess.userId){
    db.query(`Select * from qcss Limit 25`, (err, result) => {
        if (!err) {
            // res.send(result.rows);
            // console.log(result.rows);
            res.render('cssquiz1', { userData: result.rows })
        } else {
            console.log(err.stack);
        }
    });
    db.end;
    }else{
        res.redirect('/login');
    }
});
module.exports = router;