"use strict"
const Usuarios = require('../models/usuarios.model');

//Alta de Usuarios
exports.create = function(req,resp){
    const  new_user = new Usuarios(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Usuarios.create(new_user,function(err,user){
            if (err)
            resp.send(err);
            resp.json({error:false,message:"El Usuario se Ha Creado",data:user});
        })
    }

}