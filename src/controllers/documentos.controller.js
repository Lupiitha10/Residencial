'use strict';
const Documentos = require('../models/documentos.model');

//Alta de Documentos
exports.create = function(req, res){
    const new_doc = new Documentos(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Documentos.create(new_doc, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!", data:result});
            }
        })
    }
}

//Consulta todos los Documentos
exports.findAll = function(req, res){
    Documentos.findAll(function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Consulta un Documento por id
exports.findOne = function(req, res){
    Documentos.findOne(req.params.id, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    })
}

//Modificar Documento
exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Documentos.update(req.params.id, new Documentos(req.body), function(err, result){
            if(err){
                res.send(err);
            }else{
                res.json({error:false, message:"Se Guardo Correctamente!" });
            }
        })
    }
}

//Eliminar Documento
exports.delete = function(req, res){
    Documentos.delete(req.params.id, function(err, result){
        if(err){
            res.send(err)
        }else{
            res.json({error:false, message:"Se Elimino Correctamente!" });
        }
    })
}
