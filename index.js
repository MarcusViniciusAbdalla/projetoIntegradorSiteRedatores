/*const express = require('express');

const app = express();
app.use(express.json());

var users = [];

app.get('/users' , (req,res) => {
   res.send(JSON.stringify(users))
});

app.post('/users' ,(req,res) => {
  users.push(req.body)
  res.send(200,users)
});

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
});*/