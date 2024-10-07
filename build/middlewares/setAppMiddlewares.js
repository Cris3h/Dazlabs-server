"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAppMiddlewares = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const envs_1 = require("../utils/envs");
const setAppMiddlewares = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    envs_1.NODE_ENV === 'development' && app.use((0, morgan_1.default)("dev"));
};
exports.setAppMiddlewares = setAppMiddlewares;
