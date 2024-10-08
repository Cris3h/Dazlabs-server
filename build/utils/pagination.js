"use strict";
//For future use
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
exports.pagination = void 0;
//T variable type of document: could be any type but just Document type.
const pagination = (schema, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const results = yield schema.find().skip(skip).limit(limit);
    const total = yield schema.countDocuments();
    const pages = Math.ceil(total / limit);
    const hasPrev = page > 1;
    const hasNext = page < pages;
    const pagination = {
        data: results,
        totalItems: total,
        currentPage: page,
        totalPages: pages,
        hasPrev,
        hasNext,
    };
    return pagination;
});
exports.pagination = pagination;
