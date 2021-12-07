"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var Visitantes = function(visita){
    this.NOMBRE = visita.NOMBRE
    this.PATERNO = visita.PATERNO
    this.MATERNO = visita.MATERNO
}

Visitantes.create = async function(Visit, result){
    sql.query("INSERT INTO VISITANTES(NOMBRE, PATERNO, MATERNO)VALUE(?,?,?)", [Visit.NOMBRE, Visit.PATERNO, Visit.MATERNO], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Visitantes.findAll = function(result) {
        sql.query("SELECT * FROM VISITANTES", function(err, res) {
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Visitantes.findOne = async function(id, result){
    sql.query("SELECT * FROM VISITANTES WHERE ID = ?", id, function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Visitantes.update = async function(id, Visit, result){
    sql.query("UPDATE VISITANTES SET NOMBRE = ?, PATERNO = ?, MATERNO = ? WHERE ID = ?", [Visit.NOMBRE, Visit.PATERNO, Visit.MATERNO ,id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Visitantes.delete = async function(id, result){
    sql.query("DELETE FROM VISITANTES WHERE ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = Visitantes