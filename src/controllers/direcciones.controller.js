'use strict';
const Direcciones = require('../models/direcciones.model');

//Alta de Direccion
exports.create = function(req, res){
    const new_dir = new Direcciones(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Direcciones.create(new_dir, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!", data:result});
            }
        })
    }
}

//Consulta todas las Direcciones
exports.findAll = function(req, res){
    Direcciones.findAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Consulta Direccion por id
exports.findOne = function(req, res){
    Direcciones.findOne(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Modifica Direccion
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Direcciones.update(req.params.id, new Direcciones(req.body), function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!" });
            }
        })
    }
}

//Eliminar Direccion
exports.delete = function(req, res){
    Direcciones.delete(req.params.id, function(err, result){
        if(err){
            res.send(err)
        }else{
            res.json({error:false, message:"Se Elimino Correctamente!" });
        }
    })
}
