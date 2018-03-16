"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_core_1 = require("../core/app-core");
var index_1 = require("../model/index");
var index_2 = require("../service/index");
var Product = (function () {
    function Product(id, name, price, oldPrice, bonuses, manufacturerId, Props, imageUrl, rating, recall, supplOffers, 
        //public description?: string,
        slideImageUrls, barcode) {
        if (rating === void 0) { rating = 0; }
        if (recall === void 0) { recall = 0; }
        if (supplOffers === void 0) { supplOffers = 1; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.bonuses = bonuses;
        this.manufacturerId = manufacturerId;
        this.Props = Props;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.recall = recall;
        this.supplOffers = supplOffers;
        this.slideImageUrls = slideImageUrls;
        this.barcode = barcode;
        this._repo = app_core_1.RefInjector.pull(index_2.AbstractDataRepository);
    }
    return Product;
}());
Product = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: index_1.Manufacturer }, action: 'getManufacturerById', params: ['manufacturerId'] }
    ])
], Product);
exports.Product = Product;
