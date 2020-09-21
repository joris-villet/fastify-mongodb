const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/users',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  module.exports = db;
 







