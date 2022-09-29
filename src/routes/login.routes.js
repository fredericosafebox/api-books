import { Router } from "express";
import validateUserMiddleware from "../middleware/login/validateUser.middleware";
import validateSubmitMiddleware from "../middleware/login/validateSubmit.middleware";
import loginController from "../controllers/login/login.controller";

const loginRoutes = new Router();

loginRoutes.post(
  "/",
  validateSubmitMiddleware,
  validateUserMiddleware,
  loginController
);

export default loginRoutes;
