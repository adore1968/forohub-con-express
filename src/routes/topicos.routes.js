import { Router } from "express";
import {
  deleteTopicoController,
  getTopicoController,
  getTopicosController,
  registrarTopicoController,
  updateTopicoController,
} from "../controllers/topicosControllers.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import authRequiredMiddleware from "../middlewares/authRequiredMiddleware.js";
import { topicoSchema } from "../schemas/topicosSchemas.js";

const router = Router();

router.post(
  "/",
  authRequiredMiddleware,
  validateSchemaMiddleware(topicoSchema),
  registrarTopicoController
);

router.get("/", authRequiredMiddleware, getTopicosController);

router.get("/:id", authRequiredMiddleware, getTopicoController);

router.put(
  "/:id",
  authRequiredMiddleware,
  validateSchemaMiddleware(topicoSchema),
  updateTopicoController
);

router.delete("/:id", authRequiredMiddleware, deleteTopicoController);

export default router;
