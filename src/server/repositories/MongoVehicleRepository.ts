import { IVehicle } from '../interfaces/IVehicle';
import { IVehicleRepository } from '../interfaces/IVehicleRepository'; 
import VehicleModel from '../models/VehicleModel'; 

export class MongoVehicleRepository implements IVehicleRepository {
  async create(data: IVehicle): Promise<any> {
    const vehicle = new VehicleModel(data);
    return await vehicle.save();
  }

  async findById(id: string): Promise<any> {
    return await VehicleModel.findById(id);
  }

  async update(id: string, data: any): Promise<any> {
    return await VehicleModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<void> {
    await VehicleModel.findByIdAndDelete(id);
  }
}
