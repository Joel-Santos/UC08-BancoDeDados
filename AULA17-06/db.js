const sql = require('mssql');

//configuração da conexão:
const config = {
        user: 'sa',
        password: 'sa',
        server: '02MOVNB10',
        database: 'mctec',
        options:{
            encrypt: false,
            enableArithAbort: true,
            instanceName: 'SQLDEVELOPER'
        },
        // connectionTimeout: 30000, // Aumenta o tempo limite de conexão para 30 segundos
        // requestTimeout: 30000, // Aumenta o tempo limite da requisição para 30 segundos
        port: 1433
        
};
//Função de conexão com o banco
const conectionBD  = async () =>{
    try{
        const pool = await sql.connect(config);
        console.log('Conexão bem sucedida');
        return pool;
    }catch(err){
        console.error('Erro ao se conectar com o Sql Server:', err);
        throw err;
    }
};

module.exports = {
    conectionBD
}