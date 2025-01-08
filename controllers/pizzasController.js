const menu = require('../data/menu');

const index = (req, res) => {


  // se non ricevo nessun parametro in query string stampo tutto il menu altrimenti lo filtro
  const { ingredient } = req.query;

  // filtro con un ingrediente modalità estesa <<----------------
  // if (ingredient) {
  //   filteredMenu = menu.filter(pizza => pizza.ingredients.includes(ingredient))
  // }

  // filtro con un ingrediente modalità compatta <<----------------
  const filteredMenu = ingredient ? menu.filter(pizza => pizza.ingredients.includes(ingredient)) : menu;

  // filtro con ingredienti multipli <<----------------
  // let filteredMenu = menu;
  // const ingredientsString = req.query.ingredients;
  // if (ingredientsString) {
  //   const ingredients = ingredientsString.split(',');
  //   console.log(ingredients);
  //   // verifico che ogni elemento dell'array ingredints sia presente nell'array pizza.ingrendients di ogni elemento
  //   filteredMenu = menu.filter(pizza => ingredients.every(ingr => pizza.ingredients.includes(ingr)));
  // }

  res.json(filteredMenu)
};

const show = (req, res) => {
  const id = req.params.id
  // estraggo dall'array menu la pizza con id = req.parms.id
  const pizza = menu.find(pizza => pizza.id == id)

  // se non esiste una pizza con l'id passsato devo restituire un errore
  if (!pizza) {
    res.status(404);
    return res.json({
      message: 'Pizza non trovata',
      status: 404,
      error: 'Not Found'
    })
  }

  // restituisco l'oggetto estratto
  res.json(pizza);
};

const store = (req, res) => {
  //console.log(req.body);
  // creo un nuovo id (normalmente è il database che crea un nuovo id)
  // prendo l'id dell'ultimo elemento e sommo 1

  const id = menu.at(-1).id + 1; // menu[menu.length - 1].id + 1;

  // creo un nuovo oggetto
  // const newPizza = {
  //   id,
  //   name: req.body.name,
  //   image: req.body.image,
  //   ingredients: req.body.ingredients
  // }
  const newPizza = {
    id,
    ...req.body
  }

  // lo pusho nell'array
  menu.push(newPizza);

  // status 201 created
  res.status(201);
  // resttuisco l'array aggiornato
  res.json(menu)
}

const update = (req, res) => {
  const id = parseInt(req.params.id);
  let pizza = menu.find(pizza => pizza.id === id);

  if (!pizza) {
    res.status(404);
    return res.json({
      message: 'Pizza non trovata',
      status: 404,
      error: 'Non Found'
    })
  }

  // aggiorno le proiprità dell'elemento
  pizza.name = req.body.name;
  pizza.image = req.body.image;
  pizza.ingredients = req.body.ingredients;

  res.json(pizza)
}

const modify = (req, res) => {
  const id = parseInt(req.params.id);
  let pizza = menu.find(pizza => pizza.id === id);

  if (!pizza) {
    res.status(404);
    return res.json({
      message: 'Pizza non trovata',
      status: 404,
      error: 'Non Found'
    })
  }

  console.log(req.body.ingredients);
  // controllo se la proprità esiste e nel caso la aggiorno
  // if (req.body.name !== undefined) pizza.name = req.body.name;
  // if (req.body.image !== undefined) pizza.image = req.body.image;
  // if (req.body.ingredients !== undefined) pizza.ingredients = req.body.ingredients;

  // for (let key in req.body) {
  //   pizza[key] = req.body[key]
  // }

  // trasformo le chiavi di un oggetto in un array di stringhe dove ogni stringa è ogni singola proprietà
  Object.keys(req.body).forEach(key => {
    pizza[key] = req.body[key]
  })

  res.json(pizza)
}

const destroy = (req, res) => {
  const id = req.params.id;
  const pizza = menu.find(pizza => pizza.id == id);
  // se l'elemnto non esiste reistituisco l'errore
  if (!pizza) {
    res.status(404);
    return res.json({
      message: 'Pizza non trovata',
      status: 404,
      error: 'Not Found'
    })
  }

  // se l'elemento esiste lo elimino dall'array
  menu.splice(menu.indexOf(pizza), 1);
  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}