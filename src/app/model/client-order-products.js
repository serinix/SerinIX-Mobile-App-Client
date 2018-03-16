"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../service/index");
var app_core_1 = require("../core/app-core");
var quotation_product_1 = require("./quotation-product");
var store_place_1 = require("./store-place");
var lo_entity_1 = require("./lo-entity");
var ClientOrderProducts = (function () {
    function ClientOrderProducts(id, idOrder, idQuotationProduct, price, qty, idStorePlace, idLoEntity, loTrackTicket, loDeliveryCost, loDeliveryCompleted, loEstimatedDeliveryDate, loDeliveryCompletedDate, errorMessage, warningMessage, payPromoCode, payPromoCodeDiscount, payBonusCnt, payPromoBonusCnt, earnedBonusCnt, warningRead) {
        this.id = id;
        this.idOrder = idOrder;
        this.idQuotationProduct = idQuotationProduct;
        this.price = price;
        this.qty = qty;
        this.idStorePlace = idStorePlace;
        this.idLoEntity = idLoEntity;
        this.loTrackTicket = loTrackTicket;
        this.loDeliveryCost = loDeliveryCost;
        this.loDeliveryCompleted = loDeliveryCompleted;
        this.loEstimatedDeliveryDate = loEstimatedDeliveryDate;
        this.loDeliveryCompletedDate = loDeliveryCompletedDate;
        this.errorMessage = errorMessage;
        this.warningMessage = warningMessage;
        this.payPromoCode = payPromoCode;
        this.payPromoCodeDiscount = payPromoCodeDiscount;
        this.payBonusCnt = payBonusCnt;
        this.payPromoBonusCnt = payPromoBonusCnt;
        this.earnedBonusCnt = earnedBonusCnt;
        this.warningRead = warningRead;
        this._repo = app_core_1.RefInjector.pull(index_1.AbstractDataRepository);
    }
    Object.defineProperty(ClientOrderProducts.prototype, "dto", {
        get: function () {
            return { id: this.id, idOrder: this.idOrder, idQuotationProduct: this.idQuotationProduct, qty: this.qty, price: this.price,
                idStorePlace: this.idStorePlace, idLoEntity: this.idLoEntity, loTrackTicket: this.loTrackTicket,
                loDeliveryCost: this.loDeliveryCost, loDeliveryCompleted: this.loDeliveryCompleted,
                loEstimatedDeliveryDate: this.loEstimatedDeliveryDate, loDeliveryCompletedDate: this.loDeliveryCompletedDate,
                errorMessage: this.errorMessage, warningMessage: this.warningMessage, payPromoCode: this.payPromoCode,
                payPromoCodeDiscount: this.payPromoCodeDiscount, payBonusCnt: this.payBonusCnt, payPromoBonusCnt: this.payPromoBonusCnt,
                earnedBonusCnt: this.earnedBonusCnt, warningRead: this.warningRead };
        },
        enumerable: true,
        configurable: true
    });
    return ClientOrderProducts;
}());
ClientOrderProducts = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: quotation_product_1.QuotationProduct }, action: 'getQuotationProductById', params: ['idQuotationProduct'] },
        { options: { constructor: store_place_1.StorePlace }, action: 'getStorePlaceById', params: ['idStorePlace'] },
        { options: { constructor: lo_entity_1.LoEntity }, action: 'getLoEntitiyById', params: ['idLoEntity'] }
    ])
], ClientOrderProducts);
exports.ClientOrderProducts = ClientOrderProducts;
