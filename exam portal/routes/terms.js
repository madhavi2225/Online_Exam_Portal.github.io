var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
var db = require('../std');
router.get('/', (req, res) => {
    sess = req.session;
    if(sess.userId){
        db.query(`Select * from rules` , (err, result) => {
            if (!err) {
                db.query(`Select * from result where s_id=${sess.userId}` , (err, results) => {
                    if (!err){
                    res.render('terms', { terms: result.rows ,id:sess.userId, examresult:results.rows[0] });
                    }else{console.log(err.stack);}

                });
                
            } else {
                console.log(err.stack);
            }
        });
        db.end;
        
    }
    else{
        res.redirect('/login')
    }
   
})

router.post('/create', function(req, res, next) {

    // store all the user input data
    // let user = req.body;
    // let insertQuery = `insert into rules(sunnam) 
    //                  values('${user.subnam}')`;

    db.query( (err, result) => {
        if (!err) {
            // res.render('form', { create: result.rows })
            // res.send('Insertion was successful');
            
            console.log('terms was successful');
        } else { console.log(err.message); }
    })
    //  res.redirect('/que1'); // redirect to user form page after inserting the data
    res.redirect('/');
});
module.exports = router;