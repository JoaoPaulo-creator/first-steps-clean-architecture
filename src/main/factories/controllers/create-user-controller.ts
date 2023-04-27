import { MongoDbUserRepository } from "../../../infra/mongo-user-repo";
import { CreateUserController } from "../../../presentation/controllers/create-user";
import { Controller } from "../../../presentation/interfaces/controller";

export function makeCreateUserController(): Controller {
  const userRepo = new MongoDbUserRepository();
  return new CreateUserController(userRepo);
}
