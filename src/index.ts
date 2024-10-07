import express from "express";
import { PORT } from "./utils/envs";
import { setAppMiddlewares } from "./middlewares/setAppMiddlewares";
import router from "./routes";


export const app = express();

setAppMiddlewares(app);

app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} ⚡`);
});