const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();

router.get('/list', (req, res)=>

    mdbConn.getUserList()
        .then((rows) => {
            res.json(rows)
            console.log(rows);
    }).catch((errMsg) => {
        console.log(errMsg);
    }) 
);

router.post('/create', (req, res)=>{
    const data = {
        "title" : req.body.title,
        "content" : req.body.content,
        "writer" : req.body.writer
    }

    mdbConn.createPost(data)
        .then((rows) => {
            res.json(rows)
            console.log(rows);  
        }).catch((errMsg) => {
            console.log(errMsg);
        }) 
    }
);

router.get('/group', (req, res)=>res.json({username:'dev group. bryan'}));


module.exports = router;