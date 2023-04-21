import { CreateUserController } from "../../../presentatin/controllers/create-user";
import { Controller } from "../../../presentatin/interfaces/controller";

export function makeCreateUserController(): Controller {
  return new CreateUserController();
}
