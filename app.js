const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const fileUpload = require('express-fileupload');
// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`Database error: ${err}`));

  app.prepare()
    .then(()=>{
      const server = express();

const users = require('./routes/users');
const products = require('./routes/products');
const sliders = require('./routes/sliders');



// Port Number
const port = 3000;

// CORS Middleware
server.use(cors());

// Set Static Folder
// server.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
server.use(bodyParser.json());

// Passport Middleware
server.use(passport.initialize());
server.use(passport.session());
server.use(fileUpload())
require('./config/passport')(passport);

server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id } 
  app.render(req, res, actualPage, queryParams)
})

server.use('/users', users);
server.use('/api/products', products);
server.use('/api/sliders', sliders);






server.get('*', (req, res) => {
  return handle(req, res)
})

// Start Server
server.listen(port, () => {
  console.log('Server started on port '+port);
});

    })
