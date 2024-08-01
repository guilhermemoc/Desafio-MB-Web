const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const path = require('path');
const staticPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(staticPath));

app.get('/registration', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.post('/registration', (req, res) => {
  const { email, name, document, birthDate, contact, password } = req.body;

  if (!email || !name || !document || !birthDate || !contact || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  res.status(200).json({ message: 'Registro recebido com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
