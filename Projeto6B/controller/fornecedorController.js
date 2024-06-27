const fornecedorModel = require('../models/fornecedorModel');

class FornecedorController {

    // Método para listar todos os fornecedores
    async listarFornecedores(req, res) {
        try {
            // Chama o método getAllFornecedor do modelo e aguarda o resultado
            const fornecedores = await fornecedorModel.getAllFornecedor();
            // Retorna a lista de fornecedores em formato JSON
            res.json(fornecedores);
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao listar fornecedores:', error);
            res.status(500).json({ error: 'Erro interno ao listar fornecedores.' });
        }
    }

    // Método para cadastrar um novo fornecedor
    async cadastrarFornecedor(req, res) {
        // Extrai os dados do fornecedor do corpo da requisição
        const { nomefantasia, endereco, cnpj } = req.body;
        try {
            // Chama o método createFornecedor do modelo passando os dados do fornecedor
            await fornecedorModel.createFornecedor(nomefantasia, endereco, cnpj);
            // Retorna uma resposta de sucesso
            res.status(201).json({ message: 'Fornecedor cadastrado com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao cadastrar fornecedor:', error);
            res.status(500).json({ error: 'Erro interno ao cadastrar fornecedor.' });
        }
    }

    // Método para atualizar um fornecedor existente
    async atualizarFornecedor(req, res) {
        // Extrai o id dos parâmetros da requisição e os dados do corpo da requisição
        const { id } = req.params;
        const { nomefantasia, endereco, cnpj } = req.body;
        try {
            // Chama o método updateFornecedor do modelo passando o id e os dados do fornecedor
            await fornecedorModel.updateFornecedor(id, nomefantasia, endereco, cnpj);
            // Retorna uma resposta de sucesso
            res.status(200).json({ message: 'Fornecedor atualizado com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao atualizar fornecedor:', error);
            res.status(500).json({ error: 'Erro interno ao atualizar fornecedor.' });
        }
    }

    // Método para deletar um fornecedor
    async deletarFornecedor(req, res) {
        // Extrai o id dos parâmetros da requisição
        const { id } = req.params;
        try {
            // Chama o método deleteFornecedor do modelo passando o id
            await fornecedorModel.deleteFornecedor(id);
            // Retorna uma resposta de sucesso
            res.status(200).json({ message: 'Fornecedor removido com sucesso.' });
        } catch (error) {
            // Em caso de erro, loga o erro no console e retorna uma resposta de erro
            console.error('Erro ao remover fornecedor:', error);
            res.status(500).json({ error: 'Erro interno ao remover fornecedor.' });
        }
    }
}

module.exports = new FornecedorController();

