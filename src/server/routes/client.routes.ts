import { Router } from "express";
import ClientController from "../controllers/ClientController";

const clientRouter: Router = Router()

clientRouter.post('/clients', ClientController.createClient)
clientRouter.get('/clients/:id', ClientController.getClient)
clientRouter.put('/clients/:id', ClientController.updateClient);
clientRouter.delete('/clients/:id', ClientController.deleteClient);

export default clientRouter
