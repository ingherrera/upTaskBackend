import express, { Request, Response } from "express";
import projectRoutes from "./routes/projectRoutes";
import authRoutes from "./routes/authRoutes";
import utilsRoutes from "./routes/utilsRoutes";

import cors from "cors";
import { corsConfig } from "./config/cors";

const app = express();
app.use(cors(corsConfig));

// Leer datos de formularios
app.use(express.json());

//Rutas
app.get("/api/", (req: Request, res: Response) => {
	res.json({ mensaje: "Bienvenido a la API de UpTask" });
});
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/utils", utilsRoutes);

export default app;
