const express = require('express');
const BromaRouter = express.Router();

const controladorBroma = require('./../controladores/controladorBroma');

BromaRouter.post('/nuevo', controladorBroma.crearBroma);
BromaRouter.get('', controladorBroma.obtenerBromas);
BromaRouter.get('/random', controladorBroma.obtenerBromaRandom);
BromaRouter.get('/:id', controladorBroma.obtenerBromaxId);
BromaRouter.put('/actualizar/:id', controladorBroma.actualizarBroma);
BromaRouter.delete('/eliminar/:id', controladorBroma.eliminarBroma);

module.exports = BromaRouter;
