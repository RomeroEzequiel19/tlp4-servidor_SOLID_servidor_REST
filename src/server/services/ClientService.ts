import { IClient } from '../interfaces/IClient'; 
import { IClientRepository } from '../interfaces/IClientRepository';

export class ClientService {
  constructor(private readonly clientRepository: IClientRepository) {}

  async createClient(clientData: IClient): Promise<any> {
    return await this.clientRepository.create(clientData);
  }

  async getClientById(id: string): Promise<any> {
    return await this.clientRepository.findById(id);
  }

  async updateClient(id: string, clientData: Partial<IClient>): Promise<any> {
    return await this.clientRepository.update(id, clientData);
  }

  async deleteClient(id: string): Promise<any> {
    return await this.clientRepository.delete(id);
  }
}
