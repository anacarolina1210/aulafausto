const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        data: {
            type: Date,
            required: true
        },

        cliente: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cliente',
            required: true
        },
        
        entrega: {
            type: Boolean,      
        },

        endereco: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Endereco',
         },

        viagem: {
            type: Boolean,         
        },

        status: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Status',         
        },

        observacao: {
            type: String,
        },

    });
    //1º parâmetro: Nome do modelo
    //2º parâmetro: Esquema do modelo
    //3º parâmetro: Nome da coleção onde os objetos serão armazenados
    return mongoose.model('Pedido',schema,'pedidos');
}