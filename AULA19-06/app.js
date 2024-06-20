const express = require('express');
const app = express();
const port = 3000;
const filmeRoutes = require('./routes/filmeRoutes');

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));
app.use(filmeRoutes);

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(port, () =>{
    console.log(`aplicação rodando em http://localhost:${port}`);
});