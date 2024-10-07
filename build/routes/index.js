"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProductsController_1 = require("../controllers/getProductsController");
const postNewProductController_1 = require("../controllers/postNewProductController");
const router = (0, express_1.Router)();
router.get('/products', getProductsController_1.getProductsController);
router.post('/products', postNewProductController_1.postNewProductController);
exports.default = router;
