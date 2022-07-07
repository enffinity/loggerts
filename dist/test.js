"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const index_2 = __importDefault(require("./index"));
(0, index_1.info)('This is INFO');
(0, index_1.err)('This is ERROR');
(0, index_1.warn)('This is WARN');
(0, index_1.success)('This is SUCCESS');
(0, index_1.debug)('This is DEBUG');
(0, index_1.bomb)('This is BOMB');
(0, index_1.custom)('This is CUSTOM');
(0, index_1.custom)('This is CUSTOM', 'CUSTOM TITLE');
console.log('');
index_2.default.info('This is INFO using DEFAULT EXPORT');
