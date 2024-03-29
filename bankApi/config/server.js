const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.condenserPath = '/condenser';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.condenserPath, require('../src/routes/condenser.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port: ', this.port);
        })
    }
}

module.exports = Server;