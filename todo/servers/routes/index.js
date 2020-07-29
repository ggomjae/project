const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();

router.get('/list', (req, res)=>

    mdbConn.getUserList()
        .then((rows) => {
            res.json(rows)
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

router.post('/remove', (req, res)=> {
    const data = {
        "bno" : req.body.bno
    }   

    mdbConn.removePost(data)
        .then((rows) => {
            res.json(rows)
            console.log(rows);  
        }).catch((errMsg) => {
            console.log(errMsg);
        }) 
})

router.get('/post/:postid', (req, res)=> {
    
    const data = {
        "postid" : req.params.postid
    }

    mdbConn.getPost(data)
        .then((row) => {
            res.json(row)
            console.log(row);  
        }).catch((errMsg) => {
            console.log(errMsg);
        }) 
})

router.post('/update', (req, res)=> {
    
    const data = {
        "postid" : req.body.postid,
        "content" : req.body.content
    }

    mdbConn.updatePost(data)
        .then((row) => {
            res.json(row)
            console.log(row);  
        }).catch((errMsg) => {
            console.log(errMsg);
        }) 
})

module.exports = router;