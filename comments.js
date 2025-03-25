// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
