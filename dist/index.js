"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom = exports.bomb = exports.debug = exports.success = exports.warn = exports.err = exports.info = void 0;
const chalk_1 = __importDefault(require("chalk"));
const arrow = chalk_1.default.bold.blackBright('>');
const info = (msg) => {
    console.log(`${chalk_1.default.bold.blue('INFO')} ${arrow} ${chalk_1.default.green(msg)}`);
};
exports.info = info;
const err = (msg) => {
    console.log(`${chalk_1.default.bold.red('ERROR 🌋')} ${arrow} ${chalk_1.default.redBright(msg)} `);
};
exports.err = err;
const warn = (msg) => {
    console.log(`${chalk_1.default.bold.yellow('WARN ⚠️')} ${arrow} ${chalk_1.default.yellowBright(msg)}`);
};
exports.warn = warn;
const success = (msg) => {
    console.log(`${chalk_1.default.bold.green("SUCCESS ✅")} ${arrow} ${chalk_1.default.greenBright(msg)}`);
};
exports.success = success;
const debug = (msg) => {
    console.log(`${chalk_1.default.bold.yellow('DEBUG')} ${arrow} ${chalk_1.default.yellowBright(msg)}`);
};
exports.debug = debug;
const bomb = (msg, profanity) => {
    console.log(`${chalk_1.default.bold.bgRed(`${profanity ? 'OH FUCK IT\'S ALL GONE WRONG' : 'IT\'S ALL GONE WRONG'}`)} ${arrow} ${chalk_1.default.redBright(msg)}`);
};
exports.bomb = bomb;
const custom = (msg, title) => {
    console.log(`${chalk_1.default.bold.blue(title ? title : 'CUSTOM LOG')} ${arrow} ${chalk_1.default.green(msg)}`);
};
exports.custom = custom;
exports.default = {
    info: exports.info,
    err: exports.err,
    warn: exports.warn,
    success: exports.success,
    debug: exports.debug,
    bomb: exports.bomb,
    custom: exports.custom
};
