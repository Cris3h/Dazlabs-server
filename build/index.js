"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const envs_1 = require("./utils/envs");
const setAppMiddlewares_1 = require("./middlewares/setAppMiddlewares");
const routes_1 = __importDefault(require("./routes"));
const swaggerMiddleware_1 = require("./utils/swaggerMiddleware");
exports.app = (0, express_1.default)();
(0, setAppMiddlewares_1.setAppMiddlewares)(exports.app);
exports.app.use('/', routes_1.default);
(0, swaggerMiddleware_1.swaggerDocs)(exports.app);
exports.app.listen(envs_1.PORT, () => {
    console.log(`Server listening on port ${envs_1.PORT} ⚡`);
});
