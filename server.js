const express = require('express');
require('./config/config');

const app = express();
const BromaRouter = require('./rutas/rutaBroma');

app.use(express.json());
app.use('/api/bromas', BromaRouter);

app.listen ( 8080, () => {
    console.log ("El servidor se encuentra corriendo en el puerto 8080.")
})