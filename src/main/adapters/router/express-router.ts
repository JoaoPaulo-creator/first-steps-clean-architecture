import { Request, Response } from "express";
import { Controller } from "../../../presentation/interfaces/controller";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle();
    return res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
