"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var app_core_1 = require("../core/app-core");
var User = (function () {
    function User(name, email, password, appKey, // private application key
        userSetting, favoriteStoresId, phone, fname, lname) {
        if (userSetting === void 0) { userSetting = {}; }
        this.name = name;
        this.email = email;
        this.password = password;
        this.appKey = appKey;
        this.userSetting = userSetting;
        this.favoriteStoresId = favoriteStoresId;
        this.phone = phone;
        this.fname = fname;
        this.lname = lname;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    return User;
}());
User = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: client_1.Client }, action: 'getClientByPhone', params: ['phone'] }
    ])
], User);
exports.User = User;
