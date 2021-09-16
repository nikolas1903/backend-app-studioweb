var express = require('express');

app = express();
port = process.env.PORT || 8080;
mongoose = require('mongoose')
orcamento = require('./api/models/orcamentoModel');
bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://nikolas1903:12qwaszx@cluster0.zfqqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/orcamentoRoute');
routes(app);

app.listen(port);