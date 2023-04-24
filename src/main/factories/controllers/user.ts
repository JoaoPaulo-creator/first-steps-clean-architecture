import { UserController } from "../../../presentatin/controllers/user-controller";
import { Controller } from "../../../presentatin/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeUserController(): Controller {
  const userRepo = new MongoDbUserRepository();
  const userController = new UserController(userRepo);
  return userController;
}
