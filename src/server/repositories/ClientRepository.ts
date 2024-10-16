import { IClient } from '../interfaces/IClient'; 
import { IClientRepository } from '../interfaces/IClientRepository';

export class ClientRepository implements IClientRepository {
  private clients: IClient[] = [];

  async create(clientData: IClient): Promise<IClient> {
    const newClient = {...clientData };
    this.clients.push(newClient);
    return newClient;
  }

  async findById(id: string): Promise<IClient | null> {
    const client = this.clients.find(c => c.id === id);
    return client || null;
  }

  async update(id: string, clientData: Partial<IClient>): Promise<IClient | null> {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.clients[index] = { ...this.clients[index], ...clientData };
    return this.clients[index];
  }

  async delete(id: string): Promise<IClient | null> {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return null;
    const deletedClient = this.clients.splice(index, 1);
    return deletedClient[0];
  }
}
