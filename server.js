const menu = require('./data/menu');
const express = require('express');
const { getBasePath } = require('./modules/utils')
const pizzaRouter = require('./routers/pizzas');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server della pizzeria');
})

// Router risorsa pizzas
app.use('/pizzas', pizzaRouter);


app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
  
})