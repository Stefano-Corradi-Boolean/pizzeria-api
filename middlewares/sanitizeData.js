const sanitizeData = (req, res, next) => {
  const sanitize = (value) => {
    if (typeof value === 'string') {
      return value
        .trim() // Rimuove spazi extra all'inizio e alla fine
        .replace(/<[^>]*>/g, ''); // Rimuove tag HTML
    }
    return value;
  };

  if (req.body && typeof req.body === 'object') {
    for (const key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        req.body[key] = sanitize(req.body[key]);
      }
    }
  }

  next(); // Passa al prossimo middleware o handler
};

module.exports = sanitizeData;