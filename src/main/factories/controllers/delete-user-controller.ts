import { DeleteUser } from "../../../presentation/controllers/delete-user";
import { Controller } from "../../../presentation/interfaces/controller";
import { MongoDbUserRepository } from "../../infra/mongo-user-repo";

export function makeDeleteController(): Controller {
  const userRepo = new MongoDbUserRepository();
  const deleteController = new DeleteUser(userRepo);
  return deleteController;
}
