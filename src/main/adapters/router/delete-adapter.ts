import { Request, Response } from "express";
import { Controller } from "../../../presentation/interfaces/controller";

export function deleteAdapt(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = req.params.id;

    const httpResponse = await controller.handle(request);
    return res.sendStatus(httpResponse.statusCode);
  };
}
