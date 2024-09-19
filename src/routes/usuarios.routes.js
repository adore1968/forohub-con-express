import { Router } from "express";
import {
  registerUserController,
  loginUserController,
  getUserController,
} from "../controllers/usuariosControllers.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import authRequiredMiddleware from "../middlewares/authRequiredMiddleware.js";
import { usuarioSchema } from "../schemas/usuariosSchemas.js";

const router = Router();

router.post(
  "/register",
  validateSchemaMiddleware(usuarioSchema),
  registerUserController
);

router.post(
  "/login",
  validateSchemaMiddleware(usuarioSchema),
  loginUserController
);

router.get("/protected", authRequiredMiddleware, getUserController);

export default router;
