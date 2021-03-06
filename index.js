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

const login = require('./src/routes/login.router');
app.use('/Login',login);

const Documentos = require('./src/routes/documentos.router');
app.use('/Documentos', Documentos);

const Visitantes = require('./src/routes/visitantes.router');
app.use('/Visitantes', Visitantes);

const Direcciones = require('./src/routes/direcciones.router');
app.use('/Direcciones', Direcciones);

const Residentes = require('./src/routes/residentes.router');
app.use('/Residentes', Residentes);

const Adminins = require('./src/routes/administradores.router');
app.use('/Administradores', Adminins);

app.listen(process.env.PORT || 3000,()=>{
    console.log('Corriendo');
});