'use strict';
const Residentes = require('../models/administradores.model');

exports.findAll = function(req, res){
    Residentes.findAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}
exports.findOne = function(req, res){
    Residentes.findOne(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Residentes.update(req.params.id, new Residentes(req.body), function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!" });
            }
        })
    }
}
exports.delete = function(req, res){
    Residentes.delete(req.params.id, function(err, result){
        if(err){
            res.send(err)
        }else{
            res.json({error:false, message:"Se Elimino Correctamente!" });
        }
    })
}