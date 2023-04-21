import { randomUUID } from "node:crypto";
import { Controller } from "../interfaces/controller";
import { HttpResponse, ok, serverError } from "../interfaces/http";

export class ControllerTeste implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      const teste = {
        id: randomUUID(),
        name: "Joao",
        email: "teste@teste.com",
      };
      return ok(teste);
    } catch (error) {
      return serverError(error.message);
    }
  }
}
