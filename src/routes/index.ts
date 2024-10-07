import { Router } from "express";
import { getProductsController } from "../controllers/getProductsController";
import { postNewProductController } from "../controllers/postNewProductController";

const router = Router();

router.get('/products', getProductsController);

router.post('/products', postNewProductController);

export default router;