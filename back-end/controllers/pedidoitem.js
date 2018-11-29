const PedidoItem = require('../models/PedidoItem')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        // Cria um novo artigo apartir das informações que vieram no corpo (body) da requisição

        PedidoItem.create(req.body).then(
            // Callback se der certo
            function() {
                // HTTP 201: Criado
                res.send(201).end();
            },
            // Callback se der errado
            function(erro) {
                // Para que possamos visualizar o erro
                console.log(erro);
                // HTTP 500: Erro interno do servidor
                res.send(500).end();
            }
        );
    
    };
    
    controller.listar = function(req, res) {
        PedidoItem.find().populate('pedido').populate('item').exec().then( //populate('tipo') -> para popular com as informações da tabela tipo

        //foi bem    
            function(pedidoitens) {
                //Retornando os artigos encontrados com status HTTP200: ok
                res.json(pedidoitens).end();
        },

        //deu ruim
        function(erro) {
            console.log(erro);
            res.status(500).end();
        }
        );
    }

    controller.obterUm = function(req, res) {

        PedidoItem.findById(req.params.id).exec().then(
            function(pedidoitem) {
                if(pedidoitem) { //Se o artigo existe (não veio vazio)
                    //Retorna o artigo com status 200
                    res.json(pedidoitem).end();
                }
                else {
                    //HTTP 404: Não encontrado
                    res.status(404).end();
                }
            },
        function(erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

    }

    controller.atualizar = function(req, res) {

        PedidoItem.findByIdAndUpdate(req.body._id, req.body).exec().then(
            function() {
                //HTTP 204: OK sem dados
                res.send(204).end();
            },
        function(erro) {
            console.log(erro);
            res.send(500).end();
        }
        );
    }

    controller.excluir = function(req,res) {
        // findByIdAndRemove(): busca o objeto pelo id
        // passado e o exclui do BD
        PedidoItem.findByIdAndRemove(req.params.id).exec().then(
            function() {
                res.send(204).end();
            },
            function(erro) {
                console.log(erro);
                res.send(500).end();
            }
        );
    }

    return controller;
}