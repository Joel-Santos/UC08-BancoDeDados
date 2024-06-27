const express = require("express");
const router = express.Router();
const fornecedorController = require("../controller/fornecedorController");

router.get("/fornecedor", fornecedorController.listarFornecedores);
router.post("/fornecedor/cadastro", fornecedorController.cadastrarFornecedor);
router.put("/fornecedor/:id", fornecedorController.atualizarFornecedor);
router.delete("/fornecedor/:id", fornecedorController.deletarFornecedor);

module.exports = router;
