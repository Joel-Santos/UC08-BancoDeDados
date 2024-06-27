const express = require("express");
const app = express();
const porta = 3000;
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");

app.use(express.json());
app.use(produtoRoutes);
app.use(fornecedorRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API de controle de estoque" });
});

app.listen(porta, () =>
  console.log(`Aplicação iniciada em http://localhost:${porta}`),
);
