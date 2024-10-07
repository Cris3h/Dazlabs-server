import { Router } from "express";
import { getProductsController } from "../controllers/getProductsController";
import { postNewProductController } from "../controllers/postNewProductController";
import { putProductController } from "../controllers/putProductController";

const router = Router();


router.get('/products', getProductsController);

router.post('/products', postNewProductController);

router.patch('/products/:id', putProductController);

export default router;
