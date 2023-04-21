import { Router } from "express";
import { adaptRoute } from "../adapters/router/express-router";
import { postAdapt } from "../adapters/router/post-adapter";
import { makeControllerTeste } from "../factories/controllers/controller-teste";
import { makeCreateUserController } from "../factories/controllers/create-user-controller";

export default (router: Router): void => {
  router.get("/", async (req, res) => {
    return res.json({ message: "Ola, mundo" });
  });
  router.get("/teste", adaptRoute(makeControllerTeste()));
  router.post("/user", postAdapt(makeCreateUserController()));
};
