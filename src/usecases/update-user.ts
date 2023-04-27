export interface UpdateUser {
  update(id: string, name: string): Promise<void>;
}
