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
exports.getProductByIdController = void 0;
const getProductsByIdService_1 = require("../services/getProductsByIdService");
const getProductByIdController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = _req.params;
    try {
        const productId = yield (0, getProductsByIdService_1.getProductsByIdService)(id);
        res.status(200).json(productId);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getProductByIdController = getProductByIdController;
