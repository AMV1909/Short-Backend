import { Schema, model } from "mongoose";

export const urls = model(
    "urls",
    new Schema({
        shortUrl: {
            type: String,
            unique: true,
            required: true,
        },
        longUrl: {
            type: String,
            required: true,
        },
    })
);
