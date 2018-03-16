"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchService = (function () {
    /*public set progressBarStatus(value: boolean) {
      this.progressBarIsActive = value;
    }*/
    function SearchService(repo) {
        var _this = this;
        this.repo = repo;
        this.cKey = 'searchItems';
        this.cMaxSearchItemsCount = 15;
        this.searchItems = new Array();
        this._ls = '';
        this.progressBarIsActive = false;
        this.lastSearchStringUpdated = new core_1.EventEmitter();
        var stor = JSON.parse(localStorage.getItem(this.cKey));
        if (stor) {
            stor.forEach(function (val) {
                _this.searchItems.push(val);
            });
        }
    }
    Object.defineProperty(SearchService.prototype, "lastSearch", {
        get: function () {
            return this._ls;
        },
        set: function (value) {
            this._ls = value;
            this.lastSearchStringUpdated.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "progressBarStatus", {
        get: function () {
            return this.progressBarIsActive;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.searchProducts = function (srchString) {
        var _this = this;
        this.progressBarIsActive = true;
        this.lastSearch = srchString;
        // Если такая строка поиска уже есть в списке - переносим ее в верх списка и обрезаем список до макс длиньі
        var i = this.searchItems.indexOf(srchString);
        if (!(i == -1))
            this.searchItems.splice(i, 1);
        this.searchItems.splice(0, 0, srchString);
        this.searchItems = this.searchItems.splice(0, this.cMaxSearchItemsCount);
        //Сохраняем массив в сторадже
        localStorage.setItem(this.cKey, JSON.stringify(this.searchItems));
        // Обращаемся за данньіми в бекенд
        this.searchResults = this.repo.searchProducts(srchString);
        this.searchResults.then(function () {
            _this.progressBarIsActive = false;
        });
        return this.searchResults;
    };
    SearchService.prototype.removeSearchItem = function (str) {
        var i = this.searchItems.indexOf(str);
        if (!(i == -1)) {
            this.searchItems.splice(i, 1);
            localStorage.setItem(this.cKey, JSON.stringify(this.searchItems));
        }
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable()
], SearchService);
exports.SearchService = SearchService;
