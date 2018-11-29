const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cliente',
            required: true
        },

        rua: {
            type: String,
            required: true
        },
        
        numero: {
            type: String,
            required: true            
        },

        bairro: {
            type: String,
            required: true            
        },

        complemento: {
            type: String,
        },

        pontodereferencia: {
            type: String,
        },

        cidade: {
            type: String,
            required: true            
        },

        estado: {
            type: String,
            required: true            
        },

        cep: {
            type: Number,
            required: true            
        },

        

    });
    //1º parâmetro: Nome do modelo
    //2º parâmetro: Esquema do modelo
    //3º parâmetro: Nome da coleção onde os objetos serão armazenados
    return mongoose.model('Endereco',schema,'enderecos');
}