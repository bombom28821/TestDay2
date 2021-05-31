// const express = require('express')

// const app = express()

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/public/index.html');
// })

// app.get('/about', (req,res)=>{
//     res.sendFile(__dirname + '/public/about.html');
// })

// const PORT = 5000;
// app.listen(process.env.PORT || PORT);
// console.log('Sever is running')

const express = require('express');

const app = express()

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.get('/huy.html',(req,res)=>{
    res.sendFile(__dirname + '/huy.html');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log("Sever is running okok");