import { Request, RequestHandler, Response } from 'express';
import { ClientService } from '../services/ClientService';
import { ClientRepository } from '../repositories/ClientRepository';
import { IClient } from '../interfaces/IClient'; 

const clientRepository = new ClientRepository();
const clientService = new ClientService(clientRepository);

class ClientController {
  async createClient(req: Request, res: Response): Promise<void>{
    try {
      const clientData: IClient = req.body;
      const client = await clientService.createClient(clientData);
      res.status(201).json(client);
    } catch (error) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  }

  async getClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await clientService.getClientById(req.params.id);
      if (!client) res.status(404).json({ message: 'Client no encontrado' });
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  }

  async updateClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await clientService.updateClient(req.params.id, req.body);
      if (!client) res.status(404).json({ message: 'Client no encontrado' });
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  }

  async deleteClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await clientService.deleteClient(req.params.id);
      if (!client) res.status(404).json({ message: 'Client no encontrado' });
      res.status(200).json({ message: 'Client deleted' });
    } catch (error) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  }
}

export default new ClientController()