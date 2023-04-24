import { MongoDbUserRepository } from "../../main/infra/mongo-user-repo";
import { Controller } from "../interfaces/controller";
import { HttpResponse, badRequest, created } from "../interfaces/http";

export class CreateUserController implements Controller {
  constructor(private readonly userRepo: MongoDbUserRepository) {}

  async handle({
    name,
    email,
  }: CreateUserController.Request): Promise<HttpResponse> {
    try {
      const user = await this.userRepo.create({ name, email });
      return created(user);
    } catch (error) {
      const { message } = error;
      return badRequest(message);
    }
  }
}

export namespace CreateUserController {
  export type Request = {
    name: string;
    email: string;
  };
}
