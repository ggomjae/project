TodoList [intern proejct] 
==================== 

## Full Architecture

```React + node(express) + docker(mariadb)```

<div><img src="https://user-images.githubusercontent.com/43604493/88985917-8a34b600-d30c-11ea-96c4-4fd0dddfb9f4.jpeg" align="left" width="100%"></div>

## FrontEnd Architecture

```각 View에 알맞은 Component를 import하여 조합. ```

<div><img src="https://user-images.githubusercontent.com/43604493/88985933-8e60d380-d30c-11ea-91f7-a489fba36658.jpeg" align="left" width="100%"></div>


## BackEnd Architecture

```Flow``` Jwt를 받아온 후 redux안에 넣어 상태 관리 - 새로 고침 후 초기화되므로 localStorage에도 넣기

<div><img src="https://user-images.githubusercontent.com/43604493/88986436-ef3cdb80-d30d-11ea-82c4-eee916c46748.jpeg" align="left" width="100%"></div>


```REST API Sever 구현```

```kt

//project/todo/servers/server.js
app.use(bodyParser.json());
app.use('/api', route); 

//project/todo/servers/routes/index.js
router.get('/list')
router.get('/post/:postid')
router.post('/create')
router.delete('/remove/:postid')
router.put('/update/:postid')

router.post('/createuser')
router.post('/loginuser') + json web token

```

## Author

* **MIN KYUNGJAE**
    * **Github** - (https://github.com/ggomjae)
    * **Blog**    - (https://blog.naver.com/ggomjae)


## Issue

1. [HPM] Error occurred while trying to proxy request - body-parser로 인한 error 인듯
2. SPA이므로 window.location.reload는 좋지않음

## Next

1. http-proxy-middleware가 아닌 다른 proxy로 해결할 것
2. Redux를 이용해서 SPA 장점 살릴 것