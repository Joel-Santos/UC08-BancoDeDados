const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController");

router.get("/produto", produtoController.listarProdutos);
router.post("/produto", produtoController.cadastrarProduto);
router.put("/produto/:id", produtoController.atualizarProduto);
router.delete("/produto/:id", produtoController.deletarProduto);

module.exports = router;
