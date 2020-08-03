TodoList [intern proejct] 
==================== 

## Full Architecture

```React + node(express) + docker(mariadb)```

<div><img src="https://user-images.githubusercontent.com/43604493/88985917-8a34b600-d30c-11ea-96c4-4fd0dddfb9f4.jpeg" align="left" width="100%"></div>

## FrontEnd Architecture

```각 View에 알맞은 Component를 import하여 조합. ```

<div><img src="https://user-images.githubusercontent.com/43604493/88986709-b7826380-d30e-11ea-9698-1dc3bb6b3220.jpeg" align="left" width="100%"></div>


## BackEnd Architecture

```Flow``` Jwt를 받아온 후 redux안에 넣어 상태 관리 - 새로 고침 후 초기화되므로 localStorage에도 넣기

<div><img src="https://user-images.githubusercontent.com/43604493/88986436-ef3cdb80-d30d-11ea-82c4-eee916c46748.jpeg" align="left" width="100%"></div>


```REST API Sever 구현```

```kt

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
