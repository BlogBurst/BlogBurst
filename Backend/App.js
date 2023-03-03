const express = require('express');
require('dotenv').config({path: "./config/config.env"});



const app = express();


app.get('/', (req, res)=>{
    res.send("Landing Page");
});

//signup api
app.get('/signup', (req, res)=>{
    res.send('signup page opens');
})

app.post('signup', );




//login api



app.listen(process.env.PORT, ()=>{
    console.log("listening on port", process.env.PORT);
})