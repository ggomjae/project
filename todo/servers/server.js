const express = require('express');
const app = express();
const port = 3002;

const postsrouter = require('./routes/postsrouter');
const authrouter = require('./routes/authrouter');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/posts', postsrouter); 
app.use('/api/auth/users', authrouter); 

app.listen(port, ()=>{
    console.log("--------------------------")
    console.log(`express is running on ${port}`);
})