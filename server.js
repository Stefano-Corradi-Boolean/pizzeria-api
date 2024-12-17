const menu = require('./data/menu');
const express = require('express');
const { getBasePath } = require('./modules/utils')

const app = express();
const port = 3000;

app.use(express.static('public'));


//http://localhost:3000/

app.get('/', (req, res) => {
  res.send('Server della pizzeria');
})

app.get('/pizzas', (req, res) => {


  const basePathPizze = menu.map(pizza => {
    pizza.image = getBasePath(req) + pizza.image;
    return pizza
  });

  const ingredient = req.query.ingredient;

  if(!ingredient){
    return res.json(basePathPizze)
  }

  const filteredPizzas = basePathPizze.filter(pizza => pizza.ingredients.includes(ingredient))

  res.json(filteredPizzas)
})

app.get('/img', (req, res) => {
  
  const id = req.query.id ?? 1;
  
  const pizzaImage = menu.find(pizza => pizza.id == id).image;
  console.log(pizzaImage);
  
  res.send(`<img src=${pizzaImage}>`)
})




app. listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`);
  
})