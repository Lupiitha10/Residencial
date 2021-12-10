'use strict';
const Visitantes = require('../models/visitantes.model');

//Alta de visitantes
exports.create = function(req, res){
    const new_visit = new Visitantes(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Visitantes.create(new_visit, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!", data:result});
            }
        })
    }
}

//Consultar todos los visitantes
exports.findAll = function(req, res){
    Visitantes.findAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Consultar Visitante por id
exports.findOne = function(req, res){
    Visitantes.findOne(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Modificar Visitante
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Visitantes.update(req.params.id, new Visitantes(req.body), function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!" });
            }
        })
    }
}

//Eliminar Visitante
exports.delete = function(req, res){
    Visitantes.delete(req.params.id, function(err, result){
        if(err){
            res.send(err)
        }else{
            res.json({error:false, message:"Se Elimino Correctamente!" });
        }
    })
}
