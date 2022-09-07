var express = require('express');
var router = express.Router();
var db = require('../std');
var alert = require('alert');
const session = require('express-session');
var app = express();
// session
app.use(session({
    secret: 'SecretStringForSession',
    cookie: { maxAge: 60000 * 60 },
    resave: true,
    saveUninitialized: true
}));
router.get('/', function (req, res, next) {
    res.render('login');
});
router.post('/create', function (req, res, next) {
    //userauthentication
    db.query('SELECT email,name,password,s_id from "users" where  email =$1', [req.body.email], (err, result) => {
        if (!err) {
            if (result.rowCount > 0) {
                if ((result.rows[0].email == req.body.email) && (result.rows[0].password == req.body.password)) {
                    let r = result.rows[0];
                    // var xyz = session
                    let sess = req.session;
                    sess.userId = r.s_id;
                    sess.name=r.name;
                    sess.email=r.email;
                    console.log(sess.userId);
                    if (result.rows[0].email == 'admin@gmail.com' || result.rows[0].email == 'admin1@gmail.com') {
                        sess.admin = result.rows[0].email;
                        console.log(sess.admin);
                        // if((sess.userId == 19) || (sess.userId == 20)){
                         console.log("you are admin logged in");
                        // console.log(sess.userId);
                        alert("you are admin logged in");
                        res.redirect('/admin');
                        // }
                        // else{
                        //     res.redirect('/login');
                        // } 
                    } else {
                        console.log("you are user logged in");
                        // console.log(sess.userId);
                        alert("you are user logged in");
                        res.redirect('/terms');
                        isLogin = true;
                    }
                    // isLogin = true;
                    // console.log('login done');
                    // res.redirect('/terms');
                }
                else {
                    console.log('invalid email and password');
                    alert('invalid email and password');
                    res.redirect('/login');
                }
            }
            else {
                console.log('user not register');
                alert('user not register');
                res.redirect('/users');
            }
        }
        else {
            console.log('err.stack');
        }
        console.log(req.body);
    })
});
module.exports = router;