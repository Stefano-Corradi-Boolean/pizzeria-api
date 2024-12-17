const getBasePath = (req) => `${req.protocol}://${req.get('host')}/`;




module.exports = {
  getBasePath
}