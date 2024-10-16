import { IVehicle } from '../interfaces/IVehicle'; 
import { IVehicleRepository } from '../interfaces/IVehicleRepository';

export class VehicleService {
  constructor(private readonly vehicleRepository: IVehicleRepository) {}

  async createVehicle(vehicleData: IVehicle) {
    return await this.vehicleRepository.create(vehicleData);
  }

  async getVehicleById(id: string) {
    return await this.vehicleRepository.findById(id);
  }

  async updateVehicle(id: string, vehicleData: Partial<IVehicle>) {
    return await this.vehicleRepository.update(id, vehicleData);
  }

  async deleteVehicle(id: string) {
    return await this.vehicleRepository.delete(id);
  }
}
