import { Router } from 'express';
import auth from './middlewares/auth'; 
import UsersController from './controllers/UsersController.js';
import SessionsController from './controllers/SessionsController';
import MenuController from './controllers/MenuController';

const routes = new Router();

routes.post('/users', UsersController.create);
routes.post('/sessions', SessionsController.create);

//routes.use(auth);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/items/', MenuController.index);
routes.get('/items/:id', MenuController.show);
routes.post('/items', MenuController.create);
routes.put('/items/:id', MenuController.update);
routes.delete('/items/:id', MenuController.destroy);

export default routes;