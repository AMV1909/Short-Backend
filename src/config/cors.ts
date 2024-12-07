export const configCors = {
    credentials: true,
    allowedHeaders: `Content-Type,Authorization`,
    origin: [
        "http://localhost:3000",
        "https://short-backend-production.up.railway.app/",
        "https://short-frontend.pages.dev/",
    ],
    optionsSuccessStatus: 200,
};
