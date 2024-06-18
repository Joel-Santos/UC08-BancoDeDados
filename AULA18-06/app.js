const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.get('/', (req, res)=>{
    res.send('Olá mundo!');
});

app.get('/filmes', (req,res) =>{
    db.query('SELECT * FROM FILMES', (error, results) =>{
        if(error){
            res.status(500).send('Erro ao executar a consulta sql');
            return
        }
        res.json(results);
    });
});

app.listen(port,()=>{
    console.log(`aplicação rodando em http://localhost:${port}`)
}); 
