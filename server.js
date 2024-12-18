const menu = require('./data/menu');
const express = require('express');
const { getBasePath } = require('./modules/utils')

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server della pizzeria');
})


/// ROTTE CRUD ////////////////////
// index
app.get('/pizzas', (req, res) => {
  res.send('Rotta index: stampo tutte le pizze')
})

// show
app.get('/pizzas/:id', (req, res) => {
  res.send('Rotta show: stampo il dettaglio della pizza con id = ' + req.params.id)
})

//store
app.post('/pizzas', (req, res) => {
  res.send('Rotta store: Creazione di una nuova pizza')
})

// update
app.put('/pizzas/:id', (req, res) => {
  res.send('Rotta update: Modifica dell\'itero elemento con id = ' + req.params.id)
})

// modify 
app.patch('/pizzas/:id', (req, res) => {
  res.send('Rotta modify: modifica di parte dell\'elemnto con id = ' + req.params.id)
})

// destroy
app.delete('/pizzas/:id', (req, res) => {
  res.send('Rotta destroy: eliminazione dell\'elemento con id = ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
  
})