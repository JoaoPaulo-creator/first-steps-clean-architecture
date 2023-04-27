import { Router } from "express";
import { deleteAdapt } from "../adapters/router/delete-adapter";
import { adaptRoute } from "../adapters/router/express-router";
import { postAdapt } from "../adapters/router/post-adapter";

import { patchAdapt } from "../adapters/router/patch-adapter";
import { makeCreateUserController } from "../factories/controllers/create-user-controller";
import { makeDeleteController } from "../factories/controllers/delete-user-controller";
import { makeUpateController as makeUpdateController } from "../factories/controllers/update-user-controller";
import { makeUserController } from "../factories/controllers/user";

export default (router: Router): void => {
  router.get("/users", adaptRoute(makeUserController()));
  router.post("/user", postAdapt(makeCreateUserController()));
  router.delete("/user/:id", deleteAdapt(makeDeleteController()));
  router.patch("/user/:id", patchAdapt(makeUpdateController()));
};
