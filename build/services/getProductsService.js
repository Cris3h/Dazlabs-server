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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsService = void 0;
const database_1 = require("../database");
const axios_1 = __importDefault(require("axios"));
const getProductsService = (type, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    let products;
    let totalProducts;
    try {
        if (!type) {
            // no payload:
            totalProducts = yield database_1.database.countDocuments();
            products = yield database_1.database
                .find()
                .skip((page - 1) * limit)
                .limit(limit);
        }
        else {
            const fetch = yield axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${type}#json`);
            const fillDataBase = fetch.data.results.map((e) => __awaiter(void 0, void 0, void 0, function* () {
                // check and update
                yield database_1.database.findOneAndUpdate(
                //this "filters" the database to not get more than one document with the same title. Like we'd say in my neighborhood "a fines practicos". Just for demo.
                { title: e.title }, 
                // {_id: e.id},
                {
                    title: e.title,
                    category: type,
                    price: e.price,
                    image: e.thumbnail,
                }, 
                // insert new document if not found
                { upsert: true, new: true });
            }));
            yield Promise.all(fillDataBase);
            totalProducts = yield database_1.database.countDocuments();
            products = yield database_1.database
                .find()
                .skip((page - 1) * limit)
                .limit(limit);
        }
        return {
            products,
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: page,
            hasPrev: page > 1,
            hasNext: page < Math.ceil(totalProducts / limit),
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getProductsService = getProductsService;
