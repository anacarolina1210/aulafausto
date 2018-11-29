const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        nome: {
            type: String,
            required: true
        },

    });
    //1º parâmetro: Nome do modelo
    //2º parâmetro: Esquema do modelo
    //3º parâmetro: Nome da coleção onde os objetos serão armazenados
    return mongoose.model('Status',schema,'status');
}