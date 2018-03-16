"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_constants_1 = require("../app-constants");
var CreditProduct = (function () {
    function CreditProduct() {
        this.minAmt = app_constants_1.AppConstants.MIN_LOAN_AMT;
        this.maxAmt = app_constants_1.AppConstants.MAX_LOAN_AMT;
    }
    ;
    return CreditProduct;
}());
exports.CreditProduct = CreditProduct;
