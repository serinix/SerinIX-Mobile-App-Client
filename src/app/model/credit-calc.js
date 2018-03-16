"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreditCalc = (function () {
    function CreditCalc(isChecked, creditProduct, clMonths, clMonthCommPct, clYearPct, clFirstAidAmt, clGraceMonths, clMonthAmt) {
        if (clMonths === void 0) { clMonths = null; }
        if (clMonthCommPct === void 0) { clMonthCommPct = null; }
        if (clYearPct === void 0) { clYearPct = null; }
        if (clFirstAidAmt === void 0) { clFirstAidAmt = null; }
        if (clGraceMonths === void 0) { clGraceMonths = null; }
        if (clMonthAmt === void 0) { clMonthAmt = null; }
        this.isChecked = isChecked;
        this.creditProduct = creditProduct;
        this.clMonths = clMonths;
        this.clMonthCommPct = clMonthCommPct;
        this.clYearPct = clYearPct;
        this.clFirstAidAmt = clFirstAidAmt;
        this.clGraceMonths = clGraceMonths;
        this.clMonthAmt = clMonthAmt;
    }
    return CreditCalc;
}());
exports.CreditCalc = CreditCalc;
