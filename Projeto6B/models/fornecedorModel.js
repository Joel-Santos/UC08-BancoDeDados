const db = require("../database/db");

// Define a classe Course para representar cursos e suas operações
class FornecedorModel {
    // Método para retornar todos os produtos
    async getAllFornecedor() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM fornecedor", (error, results) => {
                if (error) {
                    console.log("Erro ao executar a consulta sql");
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    // Método para criar um novo curso com o nome e a descrição fornecidos
    async createFornecedor(nomefantasia, endereco, cnpj) {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO fornecedor  (nomefantasia,endereco, cnpj) VALUES (?,?,?)",
                [nomefantasia, endereco, cnpj],
                (error, results) => {
                    if (error) {
                        console.log("Erro ao executar o script sql");
                        reject(error);
                    } else {
                        resolve(results);
                    }
                },
            );
        });
    }

    // Método para buscar um produto pelo ID fornecido
    async getFornecedorById(id) {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM fornecedor WHERE id = ?",
                [id],
                (error, results) => {
                    if (error) {
                        console.log("Erro ao executar o script sql");
                        reject(error);
                    } else {
                        resolve(results);
                    }
                },
            );
        });
    }
    // Método para deletar um produto pelo ID fornecido
    async deleteFornecedor(id) {
        return new Promise((resolve, reject) => {
            db.query(
                "DELETE FROM fornecedor WHERE id = ?",
                [id],
                (error, results) => {
                    if (error) {
                        console.log("Erro ao executar o script sql");
                        reject(error);
                    } else {
                        resolve(results);
                    }
                },
            );
        });
    }

    // Método para atualizar o nome e a descrição de um curso pelo ID fornecido
    async updateFornecedor(id, nomefantasia, endereco, cnpj) {
        return new Promise((resolve, reject) => {
            db.query(
                "UPDATE fornecedor SET cnpj = ?, nomefantasia = ? ,endereco=?, WHERE id = ?",
                [cnpj, nomefantasia, endereco,id],
                (error, results) => {
                    if (error) {
                        console.log("Erro ao executar o script sql");
                        reject(error);
                    } else {
                        resolve(results);
                    }
                },
            );
        });
    }
}

// Exporta a classe Produto para ser utilizada em outros arquivos
module.exports = new FornecedorModel();
