const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();
//const jwt = require('jsonwebtoken');

///////////////create post/////////////////////
router.post('/', (req, res)=>{

    const data = {
        "title" : req.body.title,
        "content" : req.body.content,
        "writer" : req.body.writer
    }

    mdbConn.createPost(data)
        .then((rows) => {
            res.json(rows)
            console.log(rows);  
        }).catch((err) => {
            console.log(err);
        }) 
    }
);

///////////////get postlist/////////////////////
router.get('/', (req, res)=>

    mdbConn.getUserList()
        .then((rows) => {
            res.json(rows)
    }).catch((err) => {
        console.log(err);
    }) 
);

///////////////get post/////////////////////
router.get('/:postid', (req, res)=> {
    
    const data = {
        "postid" : req.params.postid
    }

    mdbConn.getPost(data)
        .then((row) => {
            res.json(row) 
        }).catch((err) => {
            console.log(err);
        }) 
})

///////////////update post/////////////////////
router.put('/:postid', (req, res)=> {
    
    const data = {
        "postid" : req.params.postid,
        "content" : req.body.content
    }

    mdbConn.updatePost(data)
        .then((row) => {
            res.json(row)
        }).catch((err) => {
            console.log(err);
        }) 
})

///////////////remove post/////////////////////
router.delete('/:postid', (req, res)=> {

    const data = {
      "bno" : req.params.postid
    }   

    mdbConn.removePost(data)
        .then((rows) => {
            res.json(rows)
            console.log(rows);  
        }).catch((err) => {
            console.log(err);
        }) 
})

///////////////module////////////////////
module.exports = router;