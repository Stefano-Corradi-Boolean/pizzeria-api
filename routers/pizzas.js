const express = require('express');
const router = express.Router();  // inizializzo il router

// ROTTE CRUD //////////
// index
router.get('/', (req, res) => {
  res.send('Rotta index: stampo tutte le pizze')
})

// show
router.get('/:id', (req, res) => {
  res.send('Rotta show: stampo il dettaglio della pizza con id = ' + req.params.id)
})

//store
router.post('/', (req, res) => {
  res.send('Rotta store: Creazione di una nuova pizza')
})

// update
router.put('/:id', (req, res) => {
  res.send('Rotta update: Modifica dell\'itero elemento con id = ' + req.params.id)
})

// modify 
router.patch('/:id', (req, res) => {
  res.send('Rotta modify: modifica di parte dell\'elemnto con id = ' + req.params.id)
})

// destroy
router.delete('/:id', (req, res) => {
  res.send('Rotta destroy: eliminazione dell\'elemento con id = ' + req.params.id)
})


module.exports = router;