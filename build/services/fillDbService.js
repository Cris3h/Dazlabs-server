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
exports.fillDbService = void 0;
const database_1 = require("../database");
const axios_1 = __importDefault(require("axios"));
const fillDbService = (type) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("type", type);
    let products;
    try {
        const fetch = yield axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${type}#json`);
        const fillDataBase = fetch.data.results.map((e) => __awaiter(void 0, void 0, void 0, function* () {
            yield database_1.database.findOneAndUpdate({ title: e.title }, {
                title: e.title,
                category: type,
                price: e.price,
                image: e.thumbnail,
            }, 
            // insert new document if not found
            { upsert: true, new: true });
        }));
        yield Promise.all(fillDataBase);
        products = yield database_1.database.find();
        return products;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.fillDbService = fillDbService;
