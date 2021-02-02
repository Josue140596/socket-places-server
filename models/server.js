
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors     = require('cors');

const Socket  = require('../models/socket');

class Server {

    constructor() {
        // app express
        this.app = express();
        // Variable de entorno(Puerto)
        this.port = process.env.PORT
        // Http server
        this.server = http.createServer(this.app);

        // socket
        // Configuraciones de sockets
        this.io = socketio(this.server, { /* configuraciones */ });
        
        this.socket = new Socket(this.io);
    }

    middlewares() {
        // Despliega el directorio publico (la página html)
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        // CORS

        this.app.use(cors());
    }

    


    // Method execute all functions
    execute() {
        // midlewares
        this.middlewares();

        // Inicializar Sockets
        this.socket.socketsEvents();

        // listen server
        this.server.listen(this.port, () => {
            console.log('Server running at port: ', this.port);
        });
    }
}



module.exports = Server;