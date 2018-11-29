var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors');
app.use(cors());

const db = require('./config/database');

// mongodb:// -> protocolo de rede
// localhost -> nome do servidor, no caso, a máquina local
// :27017 -> porta na qual o MongoDB espera ("escuta") conexões
// brecho-not -> nome do banco de dados
db('mongodb://localhost:27017/hamburgueria');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Ligando a aplicação à rota
const teste = require('./routes/teste');

// Associando a rota /ola à rota
const categoria = require('./routes/categoria');
app.use('/categoria', categoria);

const cliente = require('./routes/cliente');
app.use('/cliente', cliente);

const endereco = require('./routes/endereco');
app.use('/endereco', endereco);

const item = require('./routes/item');
app.use('/item', item);

const pedido = require('./routes/pedido');
app.use('/pedido', pedido);

const pedidoitem = require('./routes/pedidoitem');
app.use('/pedidoitem', pedidoitem);

const status = require('./routes/status');
app.use('/status', status);

module.exports = app;
