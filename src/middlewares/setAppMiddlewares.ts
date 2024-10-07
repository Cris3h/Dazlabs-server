import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { NODE_ENV } from "../utils/envs";

export const setAppMiddlewares = (app: express.Application) => {
    app.use(cors());
    app.use(json());
    NODE_ENV === 'development' && app.use(morgan("dev"));
};