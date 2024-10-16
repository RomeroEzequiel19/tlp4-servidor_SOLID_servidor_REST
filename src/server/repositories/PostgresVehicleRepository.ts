import { IVehicle } from '../interfaces/IVehicle';
import { IVehicleRepository } from '../interfaces/IVehicleRepository'; 
import { Vehicle } from '../models/PostgresVehicleModel'; 

export class PostgresVehicleRepository implements IVehicleRepository {
  async create(data: IVehicle): Promise<any> {
    return await Vehicle.create(data);
  }

  async findById(id: string): Promise<any> {
    return await Vehicle.findByPk(id);
  }

  async update(id: string, data: any): Promise<any> {
    const vehicle = await Vehicle.findByPk(id);
    if (vehicle) {
      return await vehicle.update(data);
    }
    return null;
  }

  async delete(id: string): Promise<void> {
    const vehicle = await Vehicle.findByPk(id);
    if (vehicle) {
      await vehicle.destroy();
    }
  }

}
