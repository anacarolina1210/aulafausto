const mongoose = require('mongoose');

module.exports = function() {

    const schema = mongoose.Schema({

        categoria: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Categoria',
            required: true
        },

        nome: {
            type: String,
            required: true
        },

        preco: {
            type: Number,
            required: true
        },
        
        descricao: {
            type: String,
        },

        

    });
    //1º parâmetro: Nome do modelo
    //2º parâmetro: Esquema do modelo
    //3º parâmetro: Nome da coleção onde os objetos serão armazenados
    return mongoose.model('Item',schema,'itens');
}