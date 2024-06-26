// Importa o modelo de curso e o inicializa
const Course = require('../models/course');
const courseModel = new Course();

// Importa o módulo 'path' para lidar com caminhos de arquivo
const path = require('path');

// Define a classe CourseController para gerenciar operações relacionadas aos cursos
class CourseController {

    // Método para exibir o formulário de edição de um curso
    homeCourse(req, res) {
        res.sendFile(path.join(__dirname, '../public/html/adm', 'index.html')); // Envia o arquivo de formulário de edição HTML
    }
    // Método para obter todos os cursos
    async getAllCourses(req, res) {
        const cursos = await courseModel.getAllCourses();
        res.json(cursos);
    }

    // Método para criar um novo curso
    async createCourse(req, res) {
        const {name, description } = req.body; // Extrai o nome e a descrição do corpo da solicitação
        try {
            await courseModel.createCourse(name,description);
            res.status(201).redirect('/courses'); // Redireciona para a página inicial após a criação do curso
        } catch (error) {
            console.error('Erro ao cadastrar curso:', error);
            res.status(500).json({ error: 'Erro interno ao cadastrar curso.' });
        }
    }
    
    // Método para obter um curso por ID
    async getCourseById(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const curso = await courseModel.getCourseById(courseId);
        res.json(curso);
    }

    // Método para excluir um curso por ID
    async deleteCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        try {
            await courseModel.deleteCourse(courseId);
            res.status(200).json({ message: 'Curso removido com sucesso.' });
        } catch (error) {
            console.error('Erro ao remover curso:', error);
            res.status(500).json({ error: 'Erro interno ao remover o curso.' });
        }
    }

    // Método para exibir o formulário de edição de um curso
    formEditCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        res.sendFile(path.join(__dirname, '../public/html/adm', 'edit.html')); // Envia o arquivo de formulário de edição HTML
    }
    

    // Método para atualizar um curso por ID
    async updateCourse(req, res) {
        const courseId = req.params.id; // Obtém o ID do curso dos parâmetros da solicitação
        const { name, description } = req.body; // Extrai o novo nome e descrição do corpo da solicitação
        try {
            await courseModel.updateCourse(courseId, name, description);
            res.status(200).json({ message: 'Curso atualizado com sucesso.' });
        } catch (error) {
            console.error('Erro ao atualizar Curso:', error);
            res.status(500).json({ error: 'Erro interno ao atualizar Curso.' });
        }
    }   
}

// Exporta uma instância da classe CourseController
module.exports = new CourseController();