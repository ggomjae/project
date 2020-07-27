const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();

router.get('/', (req, res)=>

    mdbConn.getUserList()
        .then((rows) => {
            res.json(rows)
            console.log(rows);
    }).catch((errMsg) => {
        console.log(errMsg);
    }) 
);

router.get('/group', (req, res)=>res.json({username:'dev group. bryan'}));


module.exports = router;