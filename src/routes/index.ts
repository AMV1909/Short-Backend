import { Router } from "express";
import { urlsRouter } from "./urls.routes";

const router = Router();

router.use(urlsRouter);

export { router };
