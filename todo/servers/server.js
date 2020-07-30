const express = require('express');
const app = express();
const port = 3002;
const route = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', route); 

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})