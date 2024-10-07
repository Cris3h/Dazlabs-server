import express from "express";
import { PORT } from "./utils/envs";
import { setAppMiddlewares } from "./middlewares/setAppMiddlewares";


const app = express();

setAppMiddlewares(app);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT} ⚡`);
});