"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var ADMINISRTRADOR = function(admin){
    this.NOMBRE = admin.NOMBRE
    this.PATERNO = admin.PATERNO
    this.MATERNO = admin.MATERNO
}

//Consulta todos los Administradores
ADMINISRTRADOR.findAll = function(result) {
    sql.query("SELECT * FROM RESIDENTES", function(err, res) {
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};

//Consulta Administrador por id
ADMINISRTRADOR.findOne = async function(id, result){
    sql.query("SELECT * FROM RESIDENTES WHERE ID = ?", id, function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};

//Modificar Administrador
ADMINISRTRADOR.update = async function(id, admin, result){
    sql.query("UPDATE RESIDENTES SET , NOMBRE = ?, PATERNO = ?, MATERNO = ? WHERE ID = ?", [ admin.NOMBRE, admin.PATERNO, admin.MATERNO ,id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};

//Eliminar Adminsitrador
ADMINISRTRADOR.delete = async function(id, result){
    sql.query("DELETE R,U FROM ADMINISTRADORES R INNER JOIN USUARIOS U ON U.ID = R.ID_USR WHERE R.ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = ADMINISRTRADOR