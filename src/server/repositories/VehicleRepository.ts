import { IVehicle } from '../interfaces/IVehicle'; 
import { IVehicleRepository } from '../interfaces/IVehicleRepository';

export class VehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = [];

  async create(vehicleData: IVehicle): Promise<IVehicle> {
    const newVehicle = { ...vehicleData };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  async findById(id: string): Promise<IVehicle | null> {
    const vehicle = this.vehicles.find(v => v.id === id);
    return vehicle || null;
  }

  async update(id: string, vehicleData: Partial<IVehicle>): Promise<IVehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return null;
    this.vehicles[index] = { ...this.vehicles[index], ...vehicleData };
    return this.vehicles[index];
  }

  async delete(id: string): Promise<IVehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return null;
    const deletedVehicle = this.vehicles.splice(index, 1);
    return deletedVehicle[0];
  }
}
