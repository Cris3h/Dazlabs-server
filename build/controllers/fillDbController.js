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
exports.fillDbController = void 0;
const fillDbService_1 = require("../services/fillDbService");
const fillDbController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.query;
    if (!type)
        return res.status(400).json({ message: 'Missing parameter' });
    try {
        const fill = yield (0, fillDbService_1.fillDbService)(type);
        return res.status(200).json(fill);
    }
    catch (error) {
        // throw new Error(error.message);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
        else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});
exports.fillDbController = fillDbController;
