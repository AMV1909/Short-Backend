import type { CorsOptions, CorsOptionsDelegate } from "cors";

export const configCors: CorsOptions | CorsOptionsDelegate = {
    credentials: true,
    allowedHeaders: `Content-Type,Authorization`,
    origin: (
        origin: string | undefined,
        callback: (err: Error | null, allow?: boolean) => void
    ) => {
        const allowedOrigins = [
            "http://localhost:3000",
            "https://short-backend-production.up.railway.app",
            "https://short-blue.vercel.app",
        ];

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};
