import type { RequestHandler } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { prisma } from "../config/prisma";
import { generateRandomText } from "../helpers/generateRandomText";

export const getUrl: RequestHandler = async (req, res) => {
    const { shortUrl } = req.params;

    if (!shortUrl || typeof shortUrl !== "string") {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: ReasonPhrases.BAD_REQUEST,
        });
    }

    try {
        const url = await prisma.urls.findUnique({
            where: {
                shortUrl,
            },
        });

        if (!url) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
            });
        }

        return res.status(StatusCodes.OK).json({ url: url.longUrl });
    } catch (error) {
        console.error("Error getting URL:", error);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
    }
};

export const createUrl: RequestHandler = async (req, res) => {
    const { url } = req.body;

    try {
        const shortUrl = generateRandomText(10);

        await prisma.urls.create({
            data: {
                shortUrl,
                longUrl: url,
            },
        });

        const origin =
            req.get("origin") ||
            req.get("referer") ||
            `${req.protocol}://${req.get("host")}`;

        const result = `${origin}/${shortUrl}`;

        return res.status(StatusCodes.CREATED).json({ url: result });
    } catch (error) {
        console.error("Error creating URL:", error);

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        });
    }
};
