const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        pedido: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Pedido',
            required: true
        },

        item: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Item',
            required: true
        },

        valor: {
            type: Number,
            required: true
        },
        
        quantidade: {
            type: Number,
            required: true            
        },

        observacao: {
            type: String,
            required: true            
        },
        

    });
    //1º parâmetro: Nome do modelo
    //2º parâmetro: Esquema do modelo
    //3º parâmetro: Nome da coleção onde os objetos serão armazenados
    return mongoose.model('PedidoItem',schema,'pedidoitens');
}