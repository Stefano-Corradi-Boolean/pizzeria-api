const express = require('express');
const router = express.Router();  // inizializzo il router
const pizzaController = require('../controllers/pizzasController')
const checkTime = require('../middlewares/checkTime')
const sanitizeData = require('../middlewares/sanitizeData')

// registro il middleware per tutte le rotte del router
//router.use(checkTime)

// ROTTE CRUD //////////
// index
router.get('/', pizzaController.index)

// show
router.get('/:id', pizzaController.show)

//store
router.post('/', sanitizeData, pizzaController.store)   // middleware sulla rotta per sanitizzare i dati

// update
router.put('/:id', sanitizeData, pizzaController.update)  // middleware sulla rotta per sanitizzare i dati

// modify 
router.patch('/:id', sanitizeData, pizzaController.modify)  // middleware sulla rotta per sanitizzare i dati

// destroy
router.delete('/:id', pizzaController.destroy)


module.exports = router;