"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var Residentes = function(resident){
    this.ID_USR = resident.ID_USR
    this.NOMBRE = resident.NOMBRE
    this.PATERNO = resident.PATERNO
    this.MATERNO = resident.MATERNO
}

Residentes.create = async function(resident, result){
    sql.query("INSERT INTO RESIDENTES(ID_USR, NOMBRE, PATERNO, MATERNO)VALUE(?,?,?,?)", [resident.ID_USR, resident.NOMBRE, resident.PATERNO, resident.MATERNO], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
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
    sql.query("UPDATE RESIDENTES SET ID_USR = ?, NOMBRE = ?, PATERNO = ?, MATERNO = ? WHERE ID = ?", [resident.ID_USR, resident.NOMBRE, resident.PATERNO, resident.MATERNO ,id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Residentes.delete = async function(id, result){
    sql.query("DELETE FROM RESIDENTES WHERE ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = Residentes