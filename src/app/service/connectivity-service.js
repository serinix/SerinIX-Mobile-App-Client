"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ConnectivityService = (function () {
    function ConnectivityService(network) {
        this.network = network;
        this.count = 0;
    }
    Object.defineProperty(ConnectivityService.prototype, "nav", {
        set: function (nav) {
            this.navCtrl = nav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectivityService.prototype, "counter", {
        get: function () {
            return this.count;
        },
        set: function (count) {
            this.count = count;
        },
        enumerable: true,
        configurable: true
    });
    ConnectivityService.prototype.checkConnection = function (error) {
        var activePage = this.navCtrl.getActive();
        // <editor-fold desc="For browser testing only">
        /*if (activePage && activePage.name !== 'NoConnectionPage') {
          this.showNoConnectionPage(error);
        }*/
        console.log(error.message ? error.message : error);
        // </editor-fold>
        if (this.network.type !== 'none') {
            return;
        }
        else if (this.network.type === 'none') {
            if (activePage && activePage.name !== 'NoConnectionPage') {
                this.showNoConnectionPage(error);
            }
        }
        else {
            if (activePage && activePage.name !== 'NoConnectionPage') {
                this.showNoConnectionPage(error);
            }
        }
    };
    ConnectivityService.prototype.showNoConnectionPage = function (error) {
        if (1 > this.count) {
            this.navCtrl.push('NoConnectionPage', { error: error });
            this.count++;
        }
    };
    return ConnectivityService;
}());
ConnectivityService = __decorate([
    core_1.Injectable()
], ConnectivityService);
exports.ConnectivityService = ConnectivityService;
