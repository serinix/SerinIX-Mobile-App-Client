"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_constants_1 = require("../../../app-constants");
var abstract_news_subscribe_service_1 = require("../abstract/abstract-news-subscribe-service");
var NewsSubscribeService = (function (_super) {
    __extends(NewsSubscribeService, _super);
    function NewsSubscribeService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    NewsSubscribeService.prototype.subscribeToNews = function (email) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(app_constants_1.AppConstants.EMAIL_SUBSCRIPTION_ENDPOINT, email, headers);
    };
    return NewsSubscribeService;
}(abstract_news_subscribe_service_1.AbstractNewsSubscribeService));
NewsSubscribeService = __decorate([
    core_1.Injectable()
], NewsSubscribeService);
exports.NewsSubscribeService = NewsSubscribeService;
