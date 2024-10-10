import express from "express";
import router from "./routes";
import { Request, Response, NextFunction } from 'express';
import { setAppMiddlewares } from "./middlewares/setAppMiddlewares";
import { swaggerDocs } from "./utils/swaggerMiddleware";
import { CustomError } from "./utils/interfaces";
import { PORT } from "./utils/envs";

export const app = express();

setAppMiddlewares(app);

app.use('/', router);

swaggerDocs(app);

app.use((err:CustomError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.statusCode || 500).json({
       error: true,
       message: err.message
    });
});

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} ⚡`);
});