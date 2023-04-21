import { ControllerTeste } from "../../../presentatin/controllers/controller-teste";
import { Controller } from "../../../presentatin/interfaces/controller";

export function makeControllerTeste(): Controller {
  const controller = new ControllerTeste();
  return controller;
}
