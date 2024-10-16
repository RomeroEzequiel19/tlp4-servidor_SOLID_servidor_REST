import { IVehicle } from '../interfaces/IVehicle'; 
import { IVehicleRepository } from '../interfaces/IVehicleRepository';

export class VehicleService {
  constructor(private readonly vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicleData: IVehicle): Promise<any> {
    return await this.vehicleRepository.create(vehicleData);
  }

  async getVehicleById(id: string): Promise<any> {
    return await this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicleData: Partial<IVehicle>): Promise<any> {
    return await this.vehicleRepository.update(id, vehicleData);
  }

  async deleteVehicle(id: string): Promise<any> {
    return await this.vehicleRepository.delete(id);
  }
}
