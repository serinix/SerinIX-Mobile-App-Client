"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var app_core_1 = require("../core/app-core");
var store_place_1 = require("./store-place");
var ProductStorePlace = (function () {
    function ProductStorePlace(id, idQuotationProduct, idStorePlace, qty) {
        this.id = id;
        this.idQuotationProduct = idQuotationProduct;
        this.idStorePlace = idStorePlace;
        this.qty = qty;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    return ProductStorePlace;
}());
ProductStorePlace = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: store_place_1.StorePlace }, action: 'getStorePlaceById', params: ['idStorePlace'] }
    ])
], ProductStorePlace);
exports.ProductStorePlace = ProductStorePlace;
