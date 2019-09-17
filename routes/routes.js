const express = require('express');
const Router = express.Router();
const Crud = require('../models/crud')


Router.get('/', Crud.read);
Router.post('/Save', Crud.create);
Router.post('/Edit', Crud.update);
Router.post('/Delete', Crud.delete);

module.exports = Router;