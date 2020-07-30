const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();
const jwt = require('jsonwebtoken');

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

//////////////User/////////////////////
router.post('/createuser', (req, res)=>{
    const data = {
        "id" : req.body.id,
        "password" : req.body.password,
        "email" : req.body.email
    }

    mdbConn.findUser(data)
        .then((row) => {
            console.log(row)
        }).catch((errMsg) => {
            console.log("xxxxxxxxxxxx")
        }) 
});
////////////////////Mcok Login /////////////////////////
router.post('/loginuser', (req, res)=> {
    const data = {
        "id" : req.body.id,
        "password" : req.body.password
    }

    mdbConn.loginUser(data)
        .then((row) => {
            console.log("loginUser",row)
            if(row){
                const getToken = () => {
                return new Promise((resolve, reject) => {
                        jwt.sign(
                        {
                            "id": req.body.id,
                            "password": req.body.password,
                            "email" : req.body.email     // 유저 정보
                        },
                        'SeCrEtKeYfOrHaShInG',   // secrec Key  
                        {
                            expiresIn: '7d',
                            issuer: 'inyongTest',   // options
                            subject: 'userInfo'
                        }, 
                        function(err,token){
                            if(err) reject(err)      // callback
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
        }).catch((errMsg) => {
            console.log(errMsg)
        }) 
})


///////////////////////// mock login ///////////////////
router.post('/mocklogin', (req, res)=>{
    // const getToken = () => {
    //   return new Promise((resolve, reject) => {
    //         jwt.sign(
    //         {
    //             "id": req.body.id,
    //             "password": req.body.password,
    //             "email" : req.body.email     // 유저 정보
    //         },
    //         'SeCrEtKeYfOrHaShInG',   // secrec Key  
    //         {
    //             expiresIn: '7d',
    //             issuer: 'inyongTest',   // options
    //             subject: 'userInfo'
    //         }, 
    //         function(err,token){
    //             if(err) reject(err)      // callback
    //             else resolve(token)
    //             }
    //         )
    //     });
    // } 
    // getToken().then(token =>{
    //   res.send(token); 
    // })
});
/////////////////////////////////////////////////////////

module.exports = router;