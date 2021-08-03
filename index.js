const express = require('express');
const apiRoute = require('./routes/api');
const PORT = 3000;

const path = require('path');

const app = express();
app.use(express.json());

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
