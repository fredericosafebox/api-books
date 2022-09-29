import { Router } from "express";
import newUserValidationMiddleware from "../middleware/users/newUser.middleware";
import newUserController from "../controllers/users/newUser.controller";
import getAllUsersController from "../controllers/users/getAllUsers.controller";
import userExistsMiddleware from "../middleware/users/userExists.middleware";
import getUserByIdController from "../controllers/users/getUserById.constroller";
import updateUserController from "../controllers/users/updateUser.controller";
import verifyTokenMiddleware from "../middleware/auth/verifyToken.middleware";

const usersRoutes = new Router();
usersRoutes.get("/", getAllUsersController);
usersRoutes.get("/:uuid", userExistsMiddleware, getUserByIdController);
usersRoutes.post("/", newUserValidationMiddleware, newUserController);
usersRoutes.put(
  "/:uuid",
  verifyTokenMiddleware,
  userExistsMiddleware,
  updateUserController
);

export default usersRoutes;
