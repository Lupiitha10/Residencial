"use strict"
const Login = require('../models/login.model');

//Login
exports.find = function(req,resp){
    const  new_user = new Login(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Login.find(new_user,function(err,user){
            if (err)
            resp.send(err);
            resp.json({error:false,data:user});
        })
    }

}

//Modificar usuario o Contraseña del residente o administrador
exports.upadate = function(req,resp){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Login.update(req.body,function(err,user){
            if (err)
            resp.send(err);
            resp.json({error:false,data:user});
        })
    }

}