import { MongoDbUserRepository } from "../../main/infra/mongo-user-repo";
import { Controller } from "../interfaces/controller";
import { HttpResponse, ok, serverError } from "../interfaces/http";

export class UserController implements Controller {
  constructor(private readonly userRepo: MongoDbUserRepository) {}

  async handle(request?: any): Promise<HttpResponse> {
    try {
      const users = await this.userRepo.findAll();

      return ok(users);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
