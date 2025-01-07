const express = require('express');
const router = express.Router();  // inizializzo il router
const pizzaController = require('../controllers/pizzasController')

// ROTTE CRUD //////////
// index
router.get('/', pizzaController.index)

// show
router.get('/:id', pizzaController.show)

//store
router.post('/', pizzaController.store)

// update
router.put('/:id', pizzaController.update)

// modify 
router.patch('/:id', pizzaController.modify)

// destroy
router.delete('/:id', pizzaController.destroy)


module.exports = router;