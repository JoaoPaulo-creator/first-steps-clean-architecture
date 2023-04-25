import { ExcludeUser } from "../../usecases/delete-user";
import { Controller } from "../interfaces/controller";
import { HttpResponse, badRequest, noContent } from "../interfaces/http";

export class DeleteUser implements Controller {
  constructor(private readonly d: ExcludeUser) {}

  async handle({ id }: Request.Param): Promise<HttpResponse> {
    try {
      const user = await this.d.delete(id);
      return noContent(user);
    } catch (error) {
      return badRequest(error.message);
    }
  }
}

export namespace Request {
  export type Param = {
    id: string;
  };
}
