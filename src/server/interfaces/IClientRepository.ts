export interface IClientRepository {
    create(clientData: any): Promise<any>;
    findById(id: string): Promise<any | null>;
    update(id: string, clientData: any): Promise<any | null>;
    delete(id: string): Promise<any | null>;
}
  