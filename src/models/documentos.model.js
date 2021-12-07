"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var Documentos = function(documento){
    this.DOCUMENTO = documento.DOCUMENTO
}

Documentos.create = async function(Doc, result){
    sql.query("INSERT INTO DOCUMENTOS(DOCUMENTO)VALUE(?)", [Doc.DOCUMENTO], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Documentos.findAll = function(result) {
        sql.query("SELECT * FROM DOCUMENTOS", function(err, res) {
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Documentos.findOne = async function(id, result){
    sql.query("SELECT * FROM DOCUMENTOS WHERE ID = ?", id, function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Documentos.update = async function(id, Doc, result){
    sql.query("UPDATE DOCUMENTOS SET DOCUMENTO = ? WHERE ID = ?", [Doc.DOCUMENTO, id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Documentos.delete = async function(id, result){
    sql.query("DELETE FROM DOCUMENTOS WHERE ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = Documentos