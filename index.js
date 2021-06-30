const express = require('express')
const path = require('path')
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const error = require('./middleware/error');
const winston = require('winston')
const customerRoutes = require('./routes/customer-routes');
const PORT = process.env.PORT || 5000

app = express()
require('Procfile')();
require('./startup/config')();
require('./startup/db')();
//require('./startup/logging')();
require('./startup/validations')();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(customerRoutes.routes);
  app.use(expressLayoutes);
  app.use(customerRoutes.routes);
  
app.use(expressLayoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.get('/', function(req, res){
  res.redirect('index');
});
//app.use(express.urlencoded({extended:true}));

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
