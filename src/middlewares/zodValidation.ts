import { type Request, type Response, type NextFunction } from "express";
import { type ZodTypeAny, ZodError } from "zod";

import { StatusCodes } from "http-status-codes";

export function validateData<T extends ZodTypeAny>(schema: T) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join(".")} is ${issue.message}`,
                }));

                res.status(StatusCodes.BAD_REQUEST).json({
                    error: "Invalid data",
                    details: errorMessages,
                });
            } else {
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: "Internal Server Error",
                });
            }
        }
    };
}