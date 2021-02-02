// Server class
const Server  = require('./models/server');

// variables de entorno
require('dotenv').config();

// instance server class
const server = new Server();




// runing server 
server.execute();