var express = require('express');
const { redirect } = require('express/lib/response');
var router = express.Router();
var db = require('../std');
router.get('/', function (req, res) {
    // console.log('hu tq ni get machu');
    sess = req.session;
    if (sess.userId) {
        
        res.render('tq');
    } else {
        res.redirect('/login');
    }

});
router.post("/", (req, res,result) => {
    // console.log('Post tq ni ma chu');
    // let ans = req.body;
    // console.log(ans.que45);
    var marks = 0, incorrect = 0;
    // console.log(sess.subject)
    sess = req.session;
    // console.log(sess.userId);
    if (sess.subject == "html") {
        user_answer = Object.values(req.body);
        db.query('SELECT * FROM "qhtml" Limit 25', (err, result) => {
            // result.rows;
            for (let i = 0; i < result.rows.length; i++) {
                console.log(result.rows[i].ans);
                console.log(user_answer[i]);
                if (result.rows[i].ans == user_answer[i]) {
                    marks++;
                } else if (user_answer[i] === undefined) {

                } else {
                    incorrect++;
                }
            }
            db.query('SELECT ("scohtml") FROM "result" where s_id = $1', [sess.userId], (err, r) => {
                if (r.rows.length > 0) {
                    db.query('UPDATE "result" SET scohtml=$1, corhtml=$2, incohtml=$3, html_date=CURRENT_DATE, html_time=CURRENT_TIME WHERE s_id =$4', [marks, marks, incorrect, sess.userId], (err, rhtml) => {
                        if (!err) {
                            console.log("html score update");
                             res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                } else {
                    db.query('INSERT INTO "result" ("name","email","scohtml","corhtml","incohtml","s_id") values ($1,$2,$3,$4,$5,$6)', [sess.name, sess.email, marks, marks, incorrect, sess.userId], (err, rhtmlinsert) => {
                        if (!err) {
                            console.log("html score insert");
                            res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                }
            })
            if (sess.userid)
            db.query('')
            console.log(marks);
            console.log(incorrect);
        })
    }
    else if (sess.subject == "js") {
        console.log("nathijatu");
        user_answer = Object.values(req.body);
        console.log('js');
        db.query('SELECT * FROM "qjavascript" Limit 25', (err, result) => {
            // result.rows;
            for (let i = 0; i < result.rows.length; i++) {
                console.log(result.rows[i].ans);
                console.log(user_answer[i]);
                if (result.rows[i].ans == user_answer[i]) {
                    marks++;
                } else if (user_answer[i] === undefined) {

                } else {
                    incorrect++;
                }
            }
            db.query('SELECT ("scojs") FROM "result" where s_id = $1', [sess.userId], (err, r) => {
                if (r.rows.length > 0) {
                    db.query('UPDATE "result" SET scojs=$1, corjs=$2, incojs=$3, js_date=CURRENT_DATE, js_time=CURRENT_TIME WHERE s_id =$4', [marks, marks, incorrect, sess.userId], (err, rhtml) => {
                        if (!err) {
                            console.log("js score update");
                            res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                } else {
                    db.query('INSERT INTO "result" ("name","email","scojs","corjs","incojs","s_id") values ($1,$2,$3,$4,$5,$6)', [sess.name, sess.email, marks, marks, incorrect, sess.userId], (err, rhtmlinsert) => {
                        if (!err) {
                            console.log("js score insert");
                            res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                }
            })
            if (sess.userid)
                // db.query('')
            console.log(marks);
            console.log(incorrect);
        })
    }
    else if (sess.subject == "css") {
        user_answer = Object.values(req.body);
        db.query('SELECT * FROM "qcss" Limit 25', (err, result) => {
            // result.rows;
            for (let i = 0; i < result.rows.length; i++) {
                console.log(result.rows[i].ans);
                console.log(user_answer[i]);
                if (result.rows[i].ans == user_answer[i]) {
                    marks++;
                } else if (user_answer[i] === undefined) {

                } else {
                    incorrect++;
                }
            }
            db.query('SELECT ("scocss") FROM "result" where s_id = $1', [sess.userId], (err, r) => {
                if (r.rows.length > 0) {
                    db.query('UPDATE "result" SET scocss=$1, corcss=$2, incocss=$3, css_date=CURRENT_DATE, css_time=CURRENT_TIME WHERE s_id =$4', [marks, marks, incorrect, sess.userId], (err, rhtml) => {
                        if (!err) {
                            console.log("css score update");
                            res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                } else {
                    db.query('INSERT INTO "result" ("name","email","scocss","corcss","incocss","s_id") values ($1,$2,$3,$4,$5,$6)', [sess.name, sess.email, marks, marks, incorrect, sess.userId], (err, rhtmlinsert) => {
                        if (!err) {
                            console.log("css score insert");
                            res.render("tq" , { scohtml: marks , corhtml: marks , incohtml:incorrect})
                        } else {
                            console.log(err.stack);
                        }
                    });
                }
            })
            if (sess.userid)
                // db.query('')
            console.log(marks);
            console.log(incorrect);
        })
    }
    
   
    // res.render("tq", {data:result.rows });

});
module.exports = router;