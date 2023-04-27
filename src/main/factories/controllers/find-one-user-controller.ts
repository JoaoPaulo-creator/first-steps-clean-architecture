import { MongoDbUserRepository } from "../../../infra/mongo-user-repo";
import { FindOneUserController } from "../../../presentation/controllers/find-one";
import { Controller } from "../../../presentation/interfaces/controller";

export function makeFindOneController(): Controller {
  const userRepo = new MongoDbUserRepository();
  return new FindOneUserController(userRepo);
}
