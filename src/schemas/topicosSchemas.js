import { z } from "zod";

export const topicoSchema = z.object({
  titulo: z.string().max(100),
  mensaje: z.string().max(300),
  fechaDeCreacion: z.string().date(),
  estatus: z.enum(["Enviado", "Recibido"]),
  autor: z.string().max(100),
  curso: z.string().max(100),
});
