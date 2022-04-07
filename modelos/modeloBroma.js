const mongoose = require( 'mongoose' );

const SchemaBroma = new mongoose.Schema (
    {
        setup: {
            type: String,
            required: [true, 'Setup es requerido.'],
            minlegth: [10, 'Setup debe tener como mínimo 6 caracteres.']
        },
        punchline: {
            type: String,
            required: [true, 'Punchline es requerido'],
            minlength: [3, 'Punchline debe tener como mínimo 3 caracteres.']
        },
    },
    {timestamps: true} // Created At & Updated At
    );

const Broma = mongoose.model ('bromas', SchemaBroma);

module.exports = {
    Broma,
    SchemaBroma
}