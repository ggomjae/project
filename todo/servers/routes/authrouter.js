const express = require('express');
const mdbConn = require('../mariaDBConn.js')
const router = express.Router();
const jwt = require('jsonwebtoken');

///////////////create user/////////////////////
router.post('/new', (req, res)=>{

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
router.post('/', (req, res)=> {

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