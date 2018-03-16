"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrencyConvert = (function () {
    function CurrencyConvert(cur1, cur2, rate) {
        this.cur1 = cur1;
        this.cur2 = cur2;
        this.rate = rate;
    }
    return CurrencyConvert;
}());
exports.CurrencyConvert = CurrencyConvert;
var Currency = (function () {
    function Currency(id, shortName) {
        this.id = id;
        this.shortName = shortName;
    }
    return Currency;
}());
exports.Currency = Currency;
