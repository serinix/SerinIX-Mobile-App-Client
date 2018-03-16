"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_core_1 = require("../core/app-core");
var client_address_1 = require("./client-address");
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var Client = (function () {
    function Client(id, userId, name, phone, login, email, fname, lname, barcode
        /*,
        public bonusBalance?: number,
        public actionBonusBalance?: number
        */
    ) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.phone = phone;
        this.login = login;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.barcode = barcode;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    return Client;
}());
Client = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: client_address_1.ClientAddress }, action: 'getClientAddressesByClientId', params: ['id'] }
    ])
], Client);
exports.Client = Client;
