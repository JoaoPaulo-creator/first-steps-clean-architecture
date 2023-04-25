import { FindUserController } from "../../../presentation/controllers/find-user-controller";
import { Controller } from "../../../presentation/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeUserController(): Controller {
  const userRepo = new MongoDbUserRepository();
  const userController = new FindUserController(userRepo);
  return userController;
}
