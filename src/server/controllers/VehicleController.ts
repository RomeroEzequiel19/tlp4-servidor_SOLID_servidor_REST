import { Request, Response, RequestHandler } from 'express';
import { VehicleService } from '../services/VehicleService';
import { MongoVehicleRepository } from '../repositories/MongoVehicleRepository'; 
import { IVehicle } from '../interfaces/IVehicle';

const vehicleRepository = new MongoVehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);

class VehicleController {
  async CreateVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicleData: IVehicle = req.body;
      const vehicle = await vehicleService.createVehicle(vehicleData);
      res.status(201).json(vehicle);
    } catch (error: any) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  };

  async getVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await vehicleService.getVehicleById(req.params.id);
      if (!vehicle) res.status(404).json({ message: 'Vehicle no encontrado' });
      res.status(200).json(vehicle);
    } catch (error: any) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  };

  async updateVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await vehicleService.updateVehicle(req.params.id, req.body);
      if (!vehicle) res.status(404).json({ message: 'Vehicle no encontrado' });
      res.status(200).json(vehicle);
    } catch (error: any) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  };

  async deleteVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await vehicleService.deleteVehicle(req.params.id);
      if (!vehicle) res.status(404).json({ message: 'Vehicle no encontrado' });
      res.status(200).json({ message: 'Vehicle Eliminado' });
    } catch (error: any) {
      res.status(500).json({ message: "Error interno en el servidor" });
    }
  };
}

export default new VehicleController();
