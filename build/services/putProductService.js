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
exports.putProductService = void 0;
const database_1 = require("../database");
const putProductService = (id, object) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, category, price, image } = object;
    try {
        const changedProduct = yield database_1.database.findOneAndUpdate({ _id: id }, {
            title,
            category,
            price,
            image,
        }, {
            new: true,
        });
        yield (changedProduct === null || changedProduct === void 0 ? void 0 : changedProduct.save());
        return changedProduct;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.putProductService = putProductService;
