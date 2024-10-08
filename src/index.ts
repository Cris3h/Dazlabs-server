import express from "express";
import { PORT } from "./utils/envs";
import { setAppMiddlewares } from "./middlewares/setAppMiddlewares";
import router from "./routes";
import { swaggerDocs } from "./utils/swaggerMiddleware";


export const app = express();

setAppMiddlewares(app);

app.use('/', router);

swaggerDocs(app);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} ⚡`);
});