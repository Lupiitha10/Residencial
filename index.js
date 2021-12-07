const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("Hello World");
  });

const Usuarios = require('./src/routes/usuarios.router');
app.use('/Usuarios',Usuarios);

app.listen(5000,()=>{
    console.log('Corriendo');
})