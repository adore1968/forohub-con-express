import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import topicosRoutes from "./routes/topicos.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/topicos", topicosRoutes);
app.use("/api/usuarios", usuariosRoutes);

export default app;
