import { IClientRepository } from '../interfaces/IClientRepository'; 
import { Client } from '../models/PostgresClientModel'; 

export class PostgresClientRepository implements IClientRepository {
  async create(data: any): Promise<any> {
    return await Client.create(data);
  }

  async findById(id: string): Promise<any> {
    return await Client.findByPk(id);
  }

  async update(id: string, data: any): Promise<any> {
    const client = await Client.findByPk(id);
    if (client) {
      return await client.update(data);
    }
    return null;
  }

  async delete(id: string): Promise<void> {
    const client = await Client.findByPk(id);
    if (client) {
      await client.destroy();
    }
  }

}
