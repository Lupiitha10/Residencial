"use strict"
const sql = require('../../database/bdconf');
const { response } = require('express');

var Direcciones = function(direcciones){
    this.CALLE = direcciones.CALLE
    this.NO_INT = direcciones.NO_INT
    this.NO_EXT = direcciones.NO_EXT
}

Direcciones.create = async function(Dir, result){
    sql.query("INSERT INTO DIRECCIONES(CALLE, NO_INT, NO_EXT)VALUE(?,?,?)", [Dir.CALLE, Dir.NO_INT, Dir.NO_EXT], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Direcciones.findAll = function(result) {
        sql.query("SELECT * FROM DIRECCIONES", function(err, res) {
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Direcciones.findOne = async function(id, result){
    sql.query("SELECT * FROM DIRECCIONES WHERE ID = ?", id, function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Direcciones.update = async function(id, Dir, result){
    sql.query("UPDATE DIRECCIONES SET CALLE = ?, NO_INT = ?, NO_EXT = ? WHERE ID = ?", [Dir.CALLE, Dir.NO_INT, Dir.NO_EXT, id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
Direcciones.delete = async function(id, result){
    sql.query("DELETE FROM DIRECCIONES WHERE ID = ?", [id], function(err, res){
        if(err){
            result(err, null)
        }else{
            result(null, res)
        }
    });
};
module.exports = Direcciones