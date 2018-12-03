const Endereco = require('../models/Endereco')(/* construtor */);

module.exports = function() {

    const controller = {};

    controller.novo = function(req, res) {

        // Cria um novo artigo apartir das informações que vieram no corpo (body) da requisição

        Endereco.create(req.body).then(
            // Callback se der certo
            function() {
                // HTTP 201: Criado
                res.send(null);
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
        Endereco.find().populate('cliente').exec().then( //populate('tipo') -> para popular com as informações da tabela tipo

        //foi bem    
            function(enderecos) {
                //Retornando os artigos encontrados com status HTTP200: ok
                res.json(enderecos).end();
        },

        //deu ruim
        function(erro) {
            console.log(erro);
            res.status(500).end();
        }
        );
    }

    controller.obterUm = function(req, res) {

        Endereco.findById(req.params.id).exec().then(
            function(enderecos) {
                if(enderecos) { //Se o artigo existe (não veio vazio)
                    //Retorna o artigo com status 200
                    res.json(enderecos).end();
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

        Endereco.findByIdAndUpdate(req.body._id, req.body).exec().then(
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
        Endereco.findByIdAndRemove(req.params.id).exec().then(
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