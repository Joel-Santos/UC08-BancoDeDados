const db = require('../database/db');

class Genero{
    async listarGeneros(){
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM GENERO', (error, results) =>{
                if(error){
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                }else{
                    resolve(results);  
                }
            }); 
        });
    }
    async cadastrarGenero(id, descricao){
        return new Promise((resolve, reject)=>{
            db.query(`INSERT INTO GENERO(ID, DESCRICAO) VALUES(${id}, ${descricao})`, (error, results) =>{
                if(error){
                    console.log('Erro ao executar o script sql');
                    reject(error);
                }else{
                    resolve(results);  
                }
            }); 
        });
    }



}
module.exports = new Genero();