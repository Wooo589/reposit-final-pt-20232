import express from 'express';
import cors from 'cors';

import routes from './routes';
import './database/index';


class App {

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors({
            origin: `http://localhost:5000`,
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        }));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;