//Inicializando um objeto imutável chamado controller com conteúdo vazio

module.exports = function() {

    const controller = {};
    
        //Toda função de controller tem pelo menos dois parâmetros:
        //1º parâmetro: req = requisição recebida
        //2º parâmetro: res= resposta para o cliente (navegador)
    
    controller.ola_mundo = function(req,res) {
    
        //Enviando uma mensagem de respostas
        res.send('Olá mundo!').end(); 
    
    }
    
    return controller;
    
    };