const db = require('../database/db');

// Define a classe Course para representar cursos e suas operações
class ProdutoModel {

    // Método para retornar todos os produtos
    async getAllProdutos() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM produtos', (error, results) => {
                if (error) {
                    console.log('Erro ao executar a consulta sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    // Método para criar um novo produto com o nome e a descrição fornecidos
    async createProduto(nome, estoque,id_fornecedor) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO produtos (nome, estoque,id_fornecedor) VALUES (?,?,?)', [nome, estoque,id_fornecedor], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Método para buscar um produto pelo ID fornecido
    async getProdutoById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM produtos WHERE id = ?', [id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    // Método para deletar um produto pelo ID fornecido
    async deleteProduto(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM produtos WHERE id = ?', [id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    // Método para atualizar o nome e a descrição de um produto pelo ID fornecido
    async updateProduto(id,nome, estoque,id_fornecedor) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE produtos SET nome = ?, estoque = ?, id_fornecedor= ?  WHERE id = ?', [nome, estoque, id,id_fornecedor], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

// Exporta a classe Produto para ser utilizada em outros arquivos
module.exports = new ProdutoModel();