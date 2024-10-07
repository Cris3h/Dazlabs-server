"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsController = void 0;
const getProductsService_1 = require("../services/getProductsService");
const getProductsController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = _req.query;
    try {
        const allProducts = yield (0, getProductsService_1.getProductsService)(type || undefined);
        res.status(200).json(allProducts);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getProductsController = getProductsController;
