const menu = require('./data/menu');
const express = require('express');
const pizzaRouter = require('./routers/pizzas');
const checkTime = require('./middlewares/checkTime.js')
const errorsHandler = require('./middlewares/errorsHandler.js')
const notFound = require('./middlewares/notFound.js')

const app = express();
const port = 3000;

app.use(express.static('public'));
// registro il body-parser per "application/json"
app.use(express.json());

// registro il middleware globalmente su tutte le rotte
//app.use(checkTime);

// registrazione middleware su singola rotta
app.get('/', checkTime, (req, res) => {
  res.send('Server della pizzeria');
})

// registro il middleware su tutte le rotte che hanno il prefisso /pizzas
app.use('/pizzas', checkTime)



// Router risorsa pizzas
app.use('/pizzas', pizzaRouter);

// registrazione middleware gestione errori
app.use(errorsHandler);

// registro il middleware per err 404
app.use(notFound)


app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
})