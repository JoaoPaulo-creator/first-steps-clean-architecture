export interface FindOneUser {
  findById(id: string): Promise<any>;
  exists(id: string): Promise<boolean>;
}
