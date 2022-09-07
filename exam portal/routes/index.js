var express = require('express');
var router = express.Router();
var db = require('../std');

router.get('/', function(req, res) {
    res.sendFile(path.join(__filename, '/'));

});
router.post('/create', function (req, res, next) {
    res.redirect('/'); // redirect to user form page after inserting the data
    //res.redirect('/');
});
module.exports = router;