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
exports.postNewProductController = void 0;
const postNewProductService_1 = require("../services/postNewProductService");
const postNewProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, category, price, image } = req.body;
    if (!title || !category || !price || !image)
        return res.status(400).json({ message: 'Missing parameter' });
    try {
        const newProduct = yield (0, postNewProductService_1.postNewProductService)({ title, category, price, image });
        return res.status(200).json(newProduct);
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.postNewProductController = postNewProductController;
