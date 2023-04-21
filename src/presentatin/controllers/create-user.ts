import { Controller } from "../interfaces/controller";
import { HttpResponse, badRequest, created } from "../interfaces/http";

export class CreateUserController implements Controller {
  async handle({
    name,
    email,
  }: CreateUserController.Request): Promise<HttpResponse> {
    try {
      const user = { name, email };

      if (name === undefined) {
        console.log(user);
      }

      return created(user);
    } catch (error) {
      return badRequest(error.message);
    }
  }
}

export namespace CreateUserController {
  export type Request = {
    name: string;
    email: string;
  };
}
