const{Broma} = require('./../modelos/modeloBroma');

const crearBroma = (request, response ) =>{
    const {setup, punchline} = request.body;
    const nuevaBroma = {
        setup, punchline
    };
    Broma.create( nuevaBroma )
        .then ( datoNuevo => {
            return response.status( 200 ).json( datoNuevo );
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar crear " + err ;
            return response.status( 400 ).end();
        })
}

const obtenerBromas = (request, response) => {
    Broma.find()
        .then ( listaBromas => {
            return response.status( 200 ).json ( listaBromas );
        })
        .catch (err => {
            response.statusMessage = "Hubo un error al ejecutar find " + err;
            return response.status(400).end();
        });
}

const obtenerBromaxId = (request, response) => {
    const id = request.params.id;

    if (!id){
        response.statusMessage = "Para obtener una broma se requiere el id";
        return response.status( 406 ).end();
    } 
    else {
        Broma.findById(id)
            .then ( bromaEncontrada => {
                return response.status( 200 ).json( bromaEncontrada );
            })
            .catch ( err => {
                response.statusMessage = "Hubo un error al ejecutar obtener broma por id " + err;
                return response.status( 400 ).end();
            });
    }
}

const obtenerBromaRandom = (request, response) =>{
    Broma.find()
        .then( listaBromas =>{
            const numRandomDeListaBromas = Math.floor(Math.random()*listaBromas.length);
            return response.json( {broma: listaBromas[numRandomDeListaBromas]});
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar obtener broma random" + err;
            return response.status( 400 ).end();
        });
}

const actualizarBroma = (request, response) =>{
    const  id  = request.params.id;
    const { setup, punchline } = request.body;
    const bromaActualizada = {
        setup, punchline
    }
    Broma.findOneAndUpdate ( id , {$set : bromaActualizada}, {new: true})
        .then( (datosBroma) => {
            return response.status( 202 ).json( datosBroma );
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el actualizar broma " + err;
            return response.status( 400 ).end();
        })
}

const eliminarBroma = (request,response) => {
    const {id} = request.params;

    Broma.deleteOne( {id} )
        .then( () =>{
            return response.status( 204 ).end();
        })
        .catch(err=>{
            response.statusMessage = "Hubo un error al ejecutar el eliminar broma "+err;
            response.status(400).end();
        });
}

const controladorBroma = {
    crearBroma,
    obtenerBromas,
    obtenerBromaxId,
    obtenerBromaRandom,
    actualizarBroma,
    eliminarBroma
};

module.exports = controladorBroma;



