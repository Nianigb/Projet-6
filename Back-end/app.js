const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

require('dotenv').config();

const userRoute = require('./routes/routeuser');

const SauceRoutes = require('./routes/routesauce');


// require('dotenv').config();
mongoose.connect('mongodb+srv://Anianige:Mdpprojet6@cluster0.l9zeq0l.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// headers spécifiques de contrôle d'accès 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use(bodyParser.json());
app.use('/api/sauces', SauceRoutes);
app.use('/api/auth', userRoute);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;