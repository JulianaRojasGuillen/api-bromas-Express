const mongoose = require('mongoose');

mongoose.connect ('mongodb://localhost/bromas_db', {useNewUrlParser: true})
    .then( () => {
        console.log("Base de datos conectada.");
    })
    .catch( err => {
        console.log("Hubo un error al conectarse a la base de datos.")
    });

mongoose.connection.on('error', (err) => {
    console.log("Mongoose error: " + err);
    process.exit( 0 );
});

mongoose.connection.on('disconnect', () => {
    console.log("Base de datos desconectada.");
});