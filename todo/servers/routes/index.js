const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();
const jwt = require('jsonwebtoken');

///////////////get postlist/////////////////////
router.get('/list', (req, res)=>

    mdbConn.getUserList()
        .then((rows) => {
            res.json(rows)
    }).catch((err) => {
        console.log(err);
    }) 
);

///////////////create post/////////////////////
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
        }).catch((err) => {
            console.log(err);
        }) 
    }
);

///////////////remove post/////////////////////
router.delete('/remove/:postid', (req, res)=> {

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

///////////////get post/////////////////////
router.get('/post/:postid', (req, res)=> {
    
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
router.put('/update/:postid', (req, res)=> {
    
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

///////////////create user/////////////////////
router.post('/createuser', (req, res)=>{

    const data = {
        "id" : req.body.id,
        "password" : req.body.password,
        "email" : req.body.email
    }

    mdbConn.findUser(data)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        }) 
});

///////////////login user////////////////////
router.post('/loginuser', (req, res)=> {

    const data = {
        "id" : req.body.id,
        "password" : req.body.password
    }

    mdbConn.loginUser(data)
        .then((row) => {
            
            if(row){
                const getToken = () => {
                return new Promise((resolve, reject) => {
                        jwt.sign(
                        {
                            "id": req.body.id,
                            "password": req.body.password,
                            "email" : req.body.email     
                        },
                        'SeCrEtKeYfOrHaShInG',   
                        {
                            expiresIn: '7d',
                            issuer: 'inyongTest',   
                            subject: 'userInfo'
                        }, 
                        function(err,token){
                            if(err) reject(err)      
                            else resolve(token)
                            }
                        )
                    });
                } 
                getToken().then(token =>{
                    res.send(token); 
                })
            }else{
                res.send(null);
            }
        }).catch((err) => {
            console.log(err)
        }) 
})

///////////////module////////////////////
module.exports = router;