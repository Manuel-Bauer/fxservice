"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const Router = express_1.default.Router;
// @ts-ignore
const router = new Router();
router.get('/fxrates', controller_1.getFxrates);
exports.default = router;
