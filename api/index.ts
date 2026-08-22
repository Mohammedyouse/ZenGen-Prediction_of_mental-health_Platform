import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

await registerRoutes(app);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    console.error(err);
});

export default app;
