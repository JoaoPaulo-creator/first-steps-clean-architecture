import { ExcludeUser } from "../../usecases/delete-user";
import { Controller } from "../interfaces/controller";
import { HttpResponse, badRequest, noContent } from "../interfaces/http";

export class DeleteUser implements Controller {
  constructor(private readonly d: ExcludeUser) {}

  async handle({ id }: DeleteUser.Param): Promise<HttpResponse> {
    try {
      console.log("Controller", id);
      const user = await this.d.delete(id);
      return noContent(user);
    } catch (error) {
      return badRequest(error.message);
    }
  }
}

export namespace DeleteUser {
  export type Param = {
    id: string;
  };
}
