const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (pasta public)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas das páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

app.get('/cursos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cursos.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
