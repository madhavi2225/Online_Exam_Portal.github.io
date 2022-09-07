var express = require('express');
var router = express.Router();
var db = require('../std');

router.get('/', (req, res) => {
    sess = req.session;
    if (sess.userId && sess.admin) {
        db.query('SELECT name,email,scocss,corcss,incocss,css_date,css_time FROM "result" where scocss IS NOT NULL ', (err, result) => {
            if (!err) {
                if (result.rows.length > 0) {
                    console.log(result.rows[0]);
                    console.log(result.rows[1]);
                    res.render('rcss', { cssresult: result.rows });
                } else {
                    res.render('rcss', { cssresult: "" });
                }
            }
        })
    } else {
        res.redirect('login')
    }

});
module.exports = router;