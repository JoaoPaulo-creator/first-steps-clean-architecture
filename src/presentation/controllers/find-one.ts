import { FindOneUser } from "../../usecases/find-one-user";
import { Controller } from "../interfaces/controller";
import { HttpResponse, ok, serverError } from "../interfaces/http";

export class FindOneUserController implements Controller {
  constructor(private readonly find: FindOneUser) {}

  async handle({ id }: User.param): Promise<HttpResponse> {
    try {
      const user = await this.find.findById(id);

      return ok(user); // : notFound();
    } catch (error) {
      return serverError(new Error("Something went wrong"));
    }
  }
}

namespace User {
  export type param = {
    id: string;
  };
}
