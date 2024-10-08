"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProductsController_1 = require("../controllers/getProductsController");
const postNewProductController_1 = require("../controllers/postNewProductController");
const putProductController_1 = require("../controllers/putProductController");
const getProductByIdController_1 = require("../controllers/getProductByIdController");
const deleteProductController_1 = require("../controllers/deleteProductController");
const router = (0, express_1.Router)();
router.get('/products', getProductsController_1.getProductsController);
router.get('/products/:id', getProductByIdController_1.getProductByIdController);
router.post('/products', postNewProductController_1.postNewProductController);
router.patch('/products/:id', putProductController_1.putProductController);
router.delete('/products/:id', deleteProductController_1.deleteProductController);
exports.default = router;
