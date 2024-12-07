import express from "express";
import cors from "cors";
import helmet from "helmet";

import { configCors } from "./config/cors";
import { router } from "./routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 5000);

// Middlewares
app.use(cors(configCors));
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api", router);

export { app };
