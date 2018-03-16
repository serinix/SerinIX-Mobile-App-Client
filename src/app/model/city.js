"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_core_1 = require("../core/app-core");
var region_1 = require("./region");
var index_1 = require("../service/index");
var City = (function () {
    function City(id, name, idRegion) {
        this.id = id;
        this.name = name;
        this.idRegion = idRegion;
        this._repo = app_core_1.RefInjector.pull(index_1.AbstractDataRepository);
    }
    Object.defineProperty(City.prototype, "cityWithRegion", {
        get: function () {
            var _reg = (this.region) ? this.region.name : '';
            return this.name + ', ' + _reg;
        },
        enumerable: true,
        configurable: true
    });
    return City;
}());
City = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: region_1.Region }, action: 'getRegionById', params: ['idRegion'] }
    ])
], City);
exports.City = City;
