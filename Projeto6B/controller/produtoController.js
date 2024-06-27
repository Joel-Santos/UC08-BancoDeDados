const produtoModel = require('../models/produtoModel')

class produtoController{

    // Método para listar todos os produtos
    async listarProdutos(req, res) {
        try {
            // Chama o método getAllProdutos do modelo e aguarda o resultado
            const produtos = await produtoModel.getAllProdutos();
            // Retorna a lista de produtos em formato JSON
            res.json(produtos);
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao listar produtos:', error);
            res.status(500).json({ error: 'Erro interno ao listar produtos.' });
        }
    }

  // Método para cadastar um novo produto
    async cadastrarProduto(req, res) {
        // Extrai os dados do produto do corpo da requisição
        const { nome, estoque, id_fornecedor } = req.body;
        try {
            // Chama o método createProduto do modelo passando os dados do produto
            await produtoModel.createProduto(nome, estoque, id_fornecedor);
            // Retorna uma resposta de sucesso
            res.status(201).json({ message: 'Produto cadastrado com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao cadastrar produto:', error);
            res.status(500).json({ error: 'Erro interno ao cadastrar produto.' });
        }
    }

    // Método para atualizar um produto existente
    async atualizarProduto(req, res) {
        // Extrai o id dos parâmetros da requisição e os dados do corpo da requisição
        const { id } = req.params;
        const { nome, estoque, id_fornecedor } = req.body;
        try {
            // Chama o método updateProduto do modelo passando o id e os dados do produto
            await produtoModel.updateProduto(id, nome, estoque, id_fornecedor);
            // Retorna uma resposta de sucesso
            res.status(200).json({ message: 'Produto atualizado com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao atualizar produto:', error);
            res.status(500).json({ error: 'Erro interno ao atualizar produto.' });
        }
    }

// Método para deletar um produto
    async deletarProduto(req, res) {
        // Extrai o id dos parâmetros da requisição
        const { id } = req.params;
        try {
            // Chama o método deleteProduto do modelo passando o id
            await produtoModel.deleteProduto(id);
            // Retorna uma resposta de sucesso
            res.status(200).json({ message: 'Produto removido com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao remover produto:', error);
            res.status(500).json({ error: 'Erro interno ao remover produto.' });
        }
    }
}

module.exports = new produtoController();