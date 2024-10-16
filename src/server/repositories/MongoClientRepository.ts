import { IClientRepository } from '../interfaces/IClientRepository'; 
import ClientModel from '../models/ClientModel';

export class MongoClientRepository implements IClientRepository {
  async create(data: any): Promise<any> {
    const client = new ClientModel(data);
    return await client.save();
  }

  async findById(id: string): Promise<any> {
    return await ClientModel.findById(id);
  }

  async update(id: string, data: any): Promise<any> {
    return await ClientModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await ClientModel.findByIdAndDelete(id);
  }
}
