import { Request, Response } from "express";
import { Controller } from "../../../presentatin/interfaces/controller";

export function postAdapt(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    console.log(request);
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
