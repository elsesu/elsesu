const express = require('express')
const path = require('path')
const cors = require('cors')
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const error = require('./middleware/error');
const winston = require('winston')
const customerRoutes = require('./routes/customer-routes');
const PORT = process.env.PORT || 5000

app = express()
require('Procfile')
require('./startup/config')();
require('./startup/db')();
//require('./startup/logging')();
require('./startup/validations')();

app.use(expressLayoutes);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.render('./views/addCustomer'))
app.use(customerRoutes.routes);
  app.use(expressLayoutes);
  app.use(customerRoutes.routes);
  app.use(cors())

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
