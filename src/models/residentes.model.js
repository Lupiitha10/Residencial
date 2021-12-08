"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var Residentes = function(resident){
    this.NOMBRE = resident.NOMBRE
    this.PATERNO = resident.PATERNO
    this.MATERNO = resident.MATERNO
}

Residentes.findAll = function(result) {
    sql.query("SELECT * FROM RESIDENTES", function(err, res) {
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Residentes.findOne = async function(id, result){
    sql.query("SELECT * FROM RESIDENTES WHERE ID = ?", id, function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Residentes.update = async function(id, resident, result){
    sql.query("UPDATE RESIDENTES SET , NOMBRE = ?, PATERNO = ?, MATERNO = ? WHERE ID = ?", [ resident.NOMBRE, resident.PATERNO, resident.MATERNO ,id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Residentes.delete = async function(id, result){
    sql.query("DELETE R,U FROM RESIDENTES R INNER JOIN USUARIOS U ON U.ID = R.ID_USR WHERE R.ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = Residentes