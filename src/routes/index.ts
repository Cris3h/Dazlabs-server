import { Router } from 'express';

import { getProductsController } from '../controllers/getProductsController';

const router = Router();


router.get('/products', getProductsController);

export default router;
