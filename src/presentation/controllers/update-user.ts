import { UpdateUser } from "../../usecases/update-user";
import { Controller } from "../interfaces/controller";
import { HttpResponse, badRequest, noContent } from "../interfaces/http";

export class UpdateUserController implements Controller {
  constructor(private readonly u: UpdateUser) {}

  async handle({ id, name }: UserUpdate.Request): Promise<HttpResponse> {
    try {
      const user = await this.u.update(id, name);
      return noContent(user);
    } catch (error) {
      return badRequest(error.message);
    }
  }
}

export namespace UserUpdate {
  export type Request = {
    id: string;
    name: string;
  };
}
