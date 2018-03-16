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
var city_1 = require("./city");
var StorePlace = (function () {
    function StorePlace(id, idSupplier, name, idCity, zip, address_line, lat, lng, type) {
        this.id = id;
        this.idSupplier = idSupplier;
        this.name = name;
        this.idCity = idCity;
        this.zip = zip;
        this.address_line = address_line;
        this.lat = lat;
        this.lng = lng;
        this.type = type;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    return StorePlace;
}());
StorePlace = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: city_1.City }, action: 'getCityById', params: ['idCity'] }
    ])
], StorePlace);
exports.StorePlace = StorePlace;
