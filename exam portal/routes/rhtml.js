var express = require('express');
var router = express.Router();
var db = require('../std');
router.get('/', (req, res) => {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query('SELECT name,email,scohtml,corhtml,incohtml,html_date,html_time FROM "result" where scohtml IS NOT NULL ', (err, result) => {
            if (!err) {
                if (result.rows.length > 0) {
                    console.log(result.rows[0]);
                    console.log(result.rows[1]);
                    res.render('rhtml', { htmlresult: result.rows });
                } else {
                    res.render('rhtml', { htmlresult: "" });
                }
            }
        })
    } else {
        res.redirect('login')
    }
});

module.exports = router;