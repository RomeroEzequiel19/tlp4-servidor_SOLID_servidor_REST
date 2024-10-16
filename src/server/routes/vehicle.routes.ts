import { Router } from 'express';
import VehicleController from '../controllers/VehicleController';

const vehicleRouter: Router = Router();

vehicleRouter.post('/vehicles', VehicleController.CreateVehicle);
vehicleRouter.get('/vehicles/:id', VehicleController.getVehicle);
vehicleRouter.put('/vehicles/:id', VehicleController.updateVehicle);
vehicleRouter.delete('/vehicles/:id', VehicleController.deleteVehicle);

export default vehicleRouter;
