const genero = require('../models/generoModel');

class GeneroController{
    async listarGeneros(req, res){
        const generos = await genero.listarGeneros();
        res.json(generos);
    }

    async cadastrarGenero(req, res){
        // const {id, descricao} = req.body;
        // genero.cadastrarGenero(id, descricao);
        const { id, descricao } = req.body;
        try {
            await genero.cadastrarGenero(id, descricao);
            res.status(200).json({ message: 'Gênero cadastrado com sucesso.' });
        } catch (error) {
            console.error('Erro ao cadastrar gênero:', error);
            res.status(500).json({ error: 'Erro interno ao cadastrar gênero.' });
        }
    }
        
    }


module.exports = new GeneroController();