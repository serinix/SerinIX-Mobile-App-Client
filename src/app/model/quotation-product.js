"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("../service/index");
var app_core_1 = require("../core/app-core");
var QuotationProduct = (function () {
    function QuotationProduct(id, idQuotation, idProduct, price, maxDeliveryDays, stockQuant, stockLow, freeShipping, actionPrice) {
        this.id = id;
        this.idQuotation = idQuotation;
        this.idProduct = idProduct;
        this.price = price;
        this.maxDeliveryDays = maxDeliveryDays;
        this.stockQuant = stockQuant;
        this.stockLow = stockLow;
        this.freeShipping = freeShipping;
        this.actionPrice = actionPrice;
        this._repo = app_core_1.RefInjector.pull(index_2.AbstractDataRepository);
    }
    return QuotationProduct;
}());
QuotationProduct = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: index_1.Quotation }, action: 'getQuotationById', params: ['idQuotation'] },
        { options: { constructor: index_1.Product }, action: 'getProductById', params: ['idProduct'] }
    ])
], QuotationProduct);
exports.QuotationProduct = QuotationProduct;
