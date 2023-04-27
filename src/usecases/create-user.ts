export interface CreateUser {
  create(request): Promise<User>;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
