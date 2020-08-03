TodoList [intern proejct] 
==================== 

## Full Architecture

```React + node(express) + docker(mariadb)```

<div><img src="https://user-images.githubusercontent.com/43604493/88942279-06a3a680-d2c5-11ea-8af1-226ccc445a87.JPG" align="left" width="100%"></div>

## FrontEnd Architecture

```각 View에 알맞은 Component를 import하여 조합. ```

<div><img src="https://user-images.githubusercontent.com/43604493/88937685-6eef8980-d2bf-11ea-9529-968ea44917e1.JPG" align="left" width="100%"></div>


## BackEnd Architecture

```Flow```

<div><img src="https://user-images.githubusercontent.com/43604493/88937688-7020b680-d2bf-11ea-8ade-f7b4b57f1688.JPG" align="left" width="100%"></div>


```REST API Sever 구현```

```kt
<<<<<<< HEAD

//project/todo/servers/server.js
app.use(bodyParser.json());
app.use('/api/posts', postrouter);   // post  
app.use('/api/auth', authrouter);    // auth

//project/todo/servers/routes/index.js - CRUD
router.post('/')   - post create
router.get('/')   - post list read
router.get('/:postid')   - post read 
router.delete('/:postid') - post delete
router.put('/:postid')  - post update
=======
//project/todo/servers/routes/index.js
router.get('/list')
router.get('/post/:postid')
router.post('/create')
router.delete('/remove/:postid')
router.put('/update/:postid')
>>>>>>> 1160503e41661631578014b2720141a44f361411

router.post('/new')  - user join   
router.post('/') + json web token  - user login

```

## Author

* **MIN KYUNGJAE**
    * **Github** - (https://github.com/ggomjae)
    * **Blog**    - (https://blog.naver.com/ggomjae)


## Issue

1. [HPM] Error occurred while trying to proxy request - body-parser로 인한 error 인듯

## Next

1. http-proxy-middleware가 아닌 다른 proxy로 해결할 것
