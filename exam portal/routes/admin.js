var express = require('express');
var router = express.Router();
var db = require('../std');

router.get('/', function (req, res) {
    sess = req.session;
    if (sess.userId == 19 || sess.userId == 20) {
        console.log('Admin ni moj');
        res.sendFile(path.join(__filename, '/admin'));
    }
    else {
        res.redirect('/login');
    }
});
router.post('/create', function (req, res, next) {
    res.redirect('/'); 
});
module.exports = router;