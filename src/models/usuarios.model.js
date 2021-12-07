"use strict"
const sql = require('../../database/bdconf');
var bcrypt = require('bcrypt');


var Usuarios = function(usuarios){
    this.NOMBRE = usuarios.NOMBRE
    this.PATERNO = usuarios.PATERNO
    this.MATERNO = usuarios.MATERNO
    this.USUARIO = usuarios.USUARIO
    this.PASS = usuarios.PASS
    this.TIPO = usuarios.TIPO
};

Usuarios.create = function(newUser, result){
    

    sql.query("INSERT INTO USUARIOS(USUARIO,PASS,TIPO)VALUE(?,?,?)",[newUser.USUARIO, bcrypt.hash(newUser.PASS, 10),newUser.TIPO],function (err,resp) {
        if(err){
            result(err,null)
        }else{
            // TIPOS 1 = RESIDENTE, 2 ADMINISRTRADOR
            const id_usr = resp.insertId;
            let query;
            if(newUser.tipo == 1){
                query = "INSERT INTO RESIDENTES(ID_USR,NOMBRE,PATERNO,MATERNO)VALUE(?,?,?,?)";
            }else{
                query = "INSERT INTO ADMINISTRADORES (ID_USR,NOMBRE,PATERNO,MATERNO)VALUE(?,?,?,?)";
            }
            sql.query(query,[id_usr,newUser.NOMBRE,newUser.PATERNO,newUser.MATERNO],function(err,res) {
                if(err){
                    result(err,null)
                }else{
                    result(null,res)
                }
            })
        }
    })
}
module.exports = Usuarios