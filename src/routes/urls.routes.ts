import { Router } from "express";

import { validateData } from "../middlewares/zodValidation";

import { getUrl, createUrl } from "../controllers/urls.controller";
import { urlSchema } from "../schemas/url";

const urlsRouter = Router();

urlsRouter.get("/urls/:shortUrl", getUrl);
urlsRouter.post("/urls", validateData(urlSchema), createUrl);

export { urlsRouter };
