var express = require('express');
var router = express.Router();
var db = require('../std');

router.post('/', function(req, res, next) {
    sess = req.session;
    // se = req.session;
    sess.subject = req.body.hamojha;
    console.log(req.body);
    console.log(req.body.hamojha);
    user_answer = Object.values(req.body);
    console.log(user_answer);
    // sess.qas = req.body.xyz;
    // console.log(req.body.xyz);
    if(sess.userId){
    db.query(`Select * from qhtml Limit 25`, (err, result) => {
        if (!err) {
            
            // console.log(result.rows);
            res.render('que1', { userData: result.rows })
        }
        else {
            console.log(err.stack);
        }
    });
    db.end;
    }else{
        res.redirect('/login');
    }
    
});
module.exports = router
