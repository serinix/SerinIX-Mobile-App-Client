"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_1 = require("./country");
var app_core_1 = require("../core/app-core");
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var ClientAddress = (function () {
    function ClientAddress(id, idClient, idCity, zip, street, lat, lng, isPrimary, idCountry, city, bldApp, recName, phone) {
        this.id = id;
        this.idClient = idClient;
        this.idCity = idCity;
        this.zip = zip;
        this.street = street;
        this.lat = lat;
        this.lng = lng;
        this.isPrimary = isPrimary;
        this.idCountry = idCountry;
        this.city = city;
        this.bldApp = bldApp;
        this.recName = recName;
        this.phone = phone;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    Object.defineProperty(ClientAddress.prototype, "idC", {
        get: function () {
            return this.idCountry;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAddress.prototype, "dto", {
        get: function () {
            return { id: this.id, idClient: this.idClient, idCity: this.idCity, zip: this.zip, street: this.street,
                lat: this.lat, lng: this.lng, isPrimary: this.isPrimary,
                idCountry: this.idCountry, city: this.city,
                bldApp: this.bldApp, recName: this.recName,
                phone: this.phone };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAddress.prototype, "addressString", {
        get: function () {
            return ((this.street) ? this.street : '') + ' ' +
                ((this.bldApp) ? this.bldApp : '') + ', ' +
                ((this.city) ? this.city : '') + ', ' +
                ((this.zip) ? this.zip : '') + ' ' +
                ((this.country) ? this.country.name : '') + ' ' +
                ((this.phone) ? ', Phone: ' + this.phone : '');
        },
        enumerable: true,
        configurable: true
    });
    return ClientAddress;
}());
ClientAddress = __decorate([
    app_core_1.LazyLoad([
        /* { options: {constructor: City}, action: 'getCityById', params: ['idCity']},*/
        { options: { constructor: country_1.Country }, action: 'getCountryById', params: ['idCountry'] }
    ])
], ClientAddress);
exports.ClientAddress = ClientAddress;
