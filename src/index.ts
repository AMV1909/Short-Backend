import { app } from "./app";

// Start the server
app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
});
