const express = require('express');

const app =express();
var dbConn = require('./database/bdconf');
app.get('/', (req, res) => {
    res.send("Hello World");
  });
app.listen(5000,()=>{
    console.log('Corriendo');
})