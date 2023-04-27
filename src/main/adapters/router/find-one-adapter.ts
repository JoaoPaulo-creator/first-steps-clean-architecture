import { Request, Response } from "express";
import { Controller } from "../../../presentation/interfaces/controller";

export function findOneAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.data);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.data.message,
      });
    }
  };
}
