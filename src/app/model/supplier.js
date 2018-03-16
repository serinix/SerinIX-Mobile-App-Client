"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Supplier = (function () {
    function Supplier(id, name, paymentMethodId, rating, positiveFeedbackPct, refsCount) {
        this.id = id;
        this.name = name;
        this.paymentMethodId = paymentMethodId;
        this.rating = rating;
        this.positiveFeedbackPct = positiveFeedbackPct;
        this.refsCount = refsCount;
    }
    return Supplier;
}());
exports.Supplier = Supplier;
