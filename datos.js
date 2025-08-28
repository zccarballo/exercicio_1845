const sqlite3 = require('sqlite3').verbose();
const rutaBaseDatos = './';
const nombreBaseDatos = "chinook.db";
const dataBase = `${rutaBaseDatos}${nombreBaseDatos}`;
const modoAperturaDataBase= sqlite3.OPEN_READWRITE;
const funcionErroDataBase = (err)=>{
    if(err){
        console.log(err.message);
    }
}
const db = new sqlite3.Database(rutaBaseDatos, nombreBaseDatos, funcionErroDataBase)
module.exports = {db};