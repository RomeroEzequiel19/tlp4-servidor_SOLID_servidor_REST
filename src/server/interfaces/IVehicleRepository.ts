export interface IVehicleRepository {
    create(vehicleData: any): Promise<any>;
    findById(id: string): Promise<any | null>;
    update(id: string, vehicleData: any): Promise<any | null>;
    delete(id: string): Promise<any | null>;
}
