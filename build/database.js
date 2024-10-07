"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const envs_1 = require("./utils/envs");
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema_1 = require("./schemas/productSchema");
console.log('db', envs_1.MONGO_URI);
const conn = mongoose_1.default.createConnection(envs_1.MONGO_URI);
exports.database = conn.model('Product', productSchema_1.productsSchema);
