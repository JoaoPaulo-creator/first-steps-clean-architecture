export interface CreateUser {
  create(request): Promise<User>;
}

export interface User {
  name: string;
  email: string;
}
