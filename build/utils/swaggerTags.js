"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegisteredTags = exports.registerTag = void 0;
const registeredTags = new Set();
//reg
const registerTag = (name, description) => {
    registeredTags.add(JSON.stringify({ name, description }));
};
exports.registerTag = registerTag;
//LF
const getRegisteredTags = () => {
    return Array.from(registeredTags).map((tag) => JSON.parse(tag));
};
exports.getRegisteredTags = getRegisteredTags;
