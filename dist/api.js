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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFxrates = void 0;
const xml2js_1 = __importDefault(require("xml2js"));
const axios_1 = __importDefault(require("axios"));
function parse(string) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield xml2js_1.default.parseStringPromise(string);
        const time = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['$']['time'];
        const ratesArray = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube'].map((rate) => rate['$']);
        const ratesObject = {};
        ratesArray.forEach((rate) => {
            ratesObject[rate.currency] = rate.rate;
        });
        const data = {
            time: time,
            rates: ratesObject,
        };
        return data;
    });
}
function fetchFxrates() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_1.default.get('http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml');
        const rates = yield parse(result.data);
        return rates;
    });
}
exports.fetchFxrates = fetchFxrates;
