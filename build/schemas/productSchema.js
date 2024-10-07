"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productsSchema = new mongoose_1.Schema({
    title: String,
    category: String, //req.query
    price: Number,
    image: String,
});
