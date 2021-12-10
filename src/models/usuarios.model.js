"use strict"
const sql = require('../../database/bdconf');
var bcrypt = require('bcrypt');
const { response } = require('express');


var Usuarios = function (usuarios) {
    this.NOMBRE = usuarios.NOMBRE
    this.PATERNO = usuarios.PATERNO
    this.MATERNO = usuarios.MATERNO
    this.USUARIO = usuarios.USUARIO
    this.PASS = usuarios.PASS
    this.TIPO = usuarios.TIPO
};

//Alta de Usuarios
Usuarios.create = async function (newUser, result) {
    newUser.PASS = await bcrypt.hash(newUser.PASS, 10);
    sql.query("INSERT INTO USUARIOS(USUARIO,PASS,TIPO)VALUE(?,?,?)", [newUser.USUARIO, newUser.PASS, newUser.TIPO], function (err, resp) {
        if (err) {
            result(err, null)
        } else {
            // TIPOS 1 = RESIDENTE, 2= ADMINISRTRADOR
            const id_usr = resp.insertId;
            let query;
            if (newUser.TIPO == 1) {
                query = "INSERT INTO RESIDENTES(ID_USR,NOMBRE,PATERNO,MATERNO)VALUE(?,?,?,?)";
            } else {
                query = "INSERT INTO ADMINISTRADORES (ID_USR,NOMBRE,PATERNO,MATERNO)VALUE(?,?,?,?)";
            }
            sql.query(query, [id_usr, newUser.NOMBRE, newUser.PATERNO, newUser.MATERNO], function (err, res) {
                if (err) {
                    result(err, null)
                } else {
                    result(null, res)
                }
            })
        }
    })
}

//Consulta Usuarios por id
Usuarios.findOne = function(USR,resp){
    sql.query("SELECT * FROM USUARIOS WHERE USUARIO ?",USR,(err,res)=>{
        if(!err){
            response(null,res)
        }
    })
}
module.exports = Usuarios