var express = require('express');
var router = express.Router();
var db = require('../std');

router.get('/', (req, res) => {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query('SELECT name,email,scojs,corjs,incojs,js_date,js_time FROM "result" where scojs IS NOT NULL ', (err, result) => {
            if (!err) {
                if (result.rows.length > 0) {
                    console.log(result.rows[0]);
                    console.log(result.rows[1]);
                    res.render('rjavascript', { jsresult: result.rows });
                } else {
                    res.render('rjavascript', { jsresult: "" });
                }
            }
        })
    } else {
        res.redirect('login')
    }
});
module.exports = router;