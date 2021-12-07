"use strict";
const sql = require('../../database/bdconf');
var bcrypt = require('bcrypt');


var Login = function (Login) {
    this.USUARIO = Login.USUARIO;
    this.PASS = Login.PASS
}
Login.find = function (acceso, response) {
    sql.query("SELECT * FROM USUARIOS WHERE USUARIO = ?", acceso.USUARIO, async (er, r) => {
        if (!er) {
            var coin = await bcrypt.compare(acceso.PASS, r[0].PASS)
          if (coin) {
              var r = r[0];
                sql.query('SELECT * FROM USUARIOS WHERE USUARIO = ? AND PASS = ?',[r.USUARIO,r.PASS],(err,res) =>{
                    if(!err){
                        response(null,res)
                    }else{
                        response(err,null)
                    }
                })
            } else {
                response("Contraseña Invalida")
            }
        } else {
            response(er, null)
        }
    })


}


module.exports = Login;