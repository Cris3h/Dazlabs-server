import { Router } from "express";
import { getProductsController } from "../controllers/getProductsController";
import { postNewProductController } from "../controllers/postNewProductController";
import { putProductController } from "../controllers/putProductController";
import { getProductByIdController } from "../controllers/getProductByIdController";
import { deleteProductController } from "../controllers/deleteProductController";

const router = Router();


router.get('/products', getProductsController);

router.get('/products/:id', getProductByIdController);

router.post('/products', postNewProductController);

router.patch('/products/:id', putProductController);

router.delete('/products/:id', deleteProductController);

export default router;
