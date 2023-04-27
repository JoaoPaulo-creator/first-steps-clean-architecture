import { UpdateUserController } from "../../../presentation/controllers/update-user";
import { Controller } from "../../../presentation/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeUpateController(): Controller {
  const userRepo = new MongoDbUserRepository();
  return new UpdateUserController(userRepo);
}
