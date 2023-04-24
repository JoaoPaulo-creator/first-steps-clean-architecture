import { CreateUserController } from "../../../presentatin/controllers/create-user";
import { Controller } from "../../../presentatin/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeCreateUserController(): Controller {
  const userRepo = new MongoDbUserRepository();
  return new CreateUserController(userRepo);
}
