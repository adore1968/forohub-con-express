import { z } from "zod";

export const usuarioSchema = z.object({
  username: z.string().max(100),
  clave: z.string().max(500),
});
