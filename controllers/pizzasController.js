const menu = require('../data/menu');

const index = (req, res) => {
  console.log(req.query);
  // se non ricevo nessun parametro in query string stampo tutto il menu altrimenti lo filtro
  const { ingredient } = req.query;

  // let filteredMenu = menu;
  // if (ingredient) {
  //   filteredMenu = menu.filter(pizza => pizza.ingredients.includes(ingredient))
  // }
  const filteredMenu = ingredient ? menu.filter(pizza => pizza.ingredients.includes(ingredient)) : menu;

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
  res.send('Rotta store: Creazione di una nuova pizza')
}

const update = (req, res) => {
  res.send('Rotta update: Modifica dell\'itero elemento con id = ' + req.params.id)
}

const modify = (req, res) => {
  res.send('Rotta modify: modifica di parte dell\'elemnto con id = ' + req.params.id)
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