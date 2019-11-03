require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true,
useUnifiedTopology:true});

//req.query acessar os query parameters (para filtros)
//req.paramers acessar router params (para edição e delete)
//req.body acessar corpó da requixição (para criacção edição)
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3333);