const express = require('express');

const app = express();

app.get('' ,(req, res) =>{
   res.send('Hello Word!')
});

app.get('/usuarios' ,(req, res) =>{
  const usuario = {nome: 'Marcus Vinicius Abdalla'}
  res.send(JSON.stringify(usuario))
});

app.post('/usuarios' ,(req, res) =>{
  console.log(req)
  res.send('Hello Word')
});

app.listen(3000,() => {
    console.log('Servidor rodando no endereço http://localhost:3000')
});