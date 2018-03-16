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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var component_base_1 = require("../../components/component-extension/component-base");
var NoConnectionPage = (function (_super) {
    __extends(NoConnectionPage, _super);
    function NoConnectionPage(navCtrl, network, connServ) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.network = network;
        _this.connServ = connServ;
        return _this;
    }
    NoConnectionPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var index, prevPage;
            return __generator(this, function (_a) {
                _super.prototype.ngOnInit.call(this);
                index = this.navCtrl.getActive().index;
                prevPage = this.navCtrl.getByIndex(index - 1);
                if ((1 < index) && (prevPage.name !== 'HomePage')) {
                    this.navCtrl.remove(index - 1).catch();
                }
                else if (prevPage && prevPage.name === 'HomePage') {
                    this.navCtrl.remove(index - 1).catch();
                    this.navCtrl.insert(index - 1, 'HomePage').catch();
                }
                this.checkAndHandleConnectionState();
                return [2 /*return*/];
            });
        });
    };
    NoConnectionPage.prototype.ngOnDestroy = function () {
        this.connServ.counter = 0;
        if (this.connected)
            this.connected.unsubscribe();
    };
    NoConnectionPage.prototype.ionViewWillLeave = function () {
        this.connServ.counter = 0;
    };
    /**
     * Checking network status
     */
    NoConnectionPage.prototype.checkAndHandleConnectionState = function () {
        var _this = this;
        this.connected = this.network.onConnect().subscribe(function (data) {
            if (data) {
                if (data.type !== 'none') {
                    _this.navCtrl.pop();
                }
            }
        }, function (error) { return console.error(error); });
    };
    return NoConnectionPage;
}(component_base_1.ComponentBase));
NoConnectionPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-no-connection',
        templateUrl: 'no-connection.html',
    })
], NoConnectionPage);
exports.NoConnectionPage = NoConnectionPage;
