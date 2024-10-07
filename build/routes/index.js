"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProductsController_1 = require("../controllers/getProductsController");
const fillDbController_1 = require("../controllers/fillDbController");
const router = (0, express_1.Router)();
router.get("/fill", fillDbController_1.fillDbController);
router.get("/products", getProductsController_1.getProductsController);
exports.default = router;
