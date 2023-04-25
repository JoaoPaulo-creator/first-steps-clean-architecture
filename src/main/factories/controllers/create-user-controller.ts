import { CreateUserController } from "../../../presentation/controllers/create-user";
import { Controller } from "../../../presentation/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeCreateUserController(): Controller {
  const userRepo = new MongoDbUserRepository();
  return new CreateUserController(userRepo);
}
