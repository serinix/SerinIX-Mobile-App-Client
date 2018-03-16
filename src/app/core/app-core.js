"use strict";
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
var http_1 = require("@angular/http");
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.compare = function (matchControlName) {
        return function (control) {
            var data = control.value;
            var dataPrimary = control.root.get(matchControlName);
            dataPrimary = (!dataPrimary) ? '' : dataPrimary.value;
            return (data !== dataPrimary) ? { 'compare': data } : null;
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
var RefInjector = (function () {
    function RefInjector() {
    }
    RefInjector.push = function (value) {
        RefInjector.injector = value;
    };
    RefInjector.pull = function (injector) {
        return RefInjector.injector.get(injector);
    };
    return RefInjector;
}());
exports.RefInjector = RefInjector;
var Providers;
(function (Providers) {
    var CacheItems = (function () {
        function CacheItems(maxSize) {
            if (maxSize === void 0) { maxSize = 100; }
            this.maxSize = maxSize;
            this.items = {};
            this.count = 0;
        }
        CacheItems.prototype.ContainsKey = function (key) {
            return this.items.hasOwnProperty(key);
        };
        CacheItems.prototype.Count = function () {
            return this.count;
        };
        CacheItems.prototype.Add = function (key, value) {
            if (key && value) {
                if (value.id) {
                    if (!this.items.hasOwnProperty(key))
                        this.count++;
                    this.items[key] = value;
                }
            }
        };
        CacheItems.prototype.Remove = function (key) {
            var val = this.items[key];
            delete this.items[key];
            this.count--;
            return val;
        };
        CacheItems.prototype.Item = function (key) {
            return this.items[key];
        };
        CacheItems.prototype.Keys = function () {
            var keySet = [];
            for (var prop in this.items) {
                if (this.items.hasOwnProperty(prop)) {
                    keySet.push(prop);
                }
            }
            return keySet;
        };
        CacheItems.prototype.Values = function () {
            var values = [];
            for (var prop in this.items) {
                if (this.items.hasOwnProperty(prop)) {
                    values.push(this.items[prop]);
                }
            }
            return values;
        };
        CacheItems.prototype.MaxSize = function () {
            return this.maxSize;
        };
        return CacheItems;
    }());
    Providers.CacheItems = CacheItems;
    var CacheProvider = (function () {
        function CacheProvider() {
            this._cacheProduct = null;
            this._cacheSupplier = null;
            this._cacheCurrency = null;
            this._cacheLang = null;
            this._cacheManufacturer = null;
            this._cacheCity = null;
            this._cacheStorePlace = null;
            this._cacheStore = null;
            this._cacheMeasureUnit = null;
            this._cacheQuotation = null;
            this._cacheLoEntity = null;
            this._cacheCountry = null;
            this._cacheEnumPaymentMethod = null;
            this._cacheRegion = null;
        }
        Object.defineProperty(CacheProvider.prototype, "Products", {
            get: function () {
                if (this._cacheProduct == null)
                    this._cacheProduct = new CacheItems(1500);
                return this._cacheProduct;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Suppliers", {
            get: function () {
                if (this._cacheSupplier == null)
                    this._cacheSupplier = new CacheItems(200);
                return this._cacheSupplier;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Currency", {
            get: function () {
                if (this._cacheCurrency == null)
                    this._cacheCurrency = new CacheItems(10);
                return this._cacheCurrency;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Lang", {
            get: function () {
                if (this._cacheLang == null)
                    this._cacheLang = new CacheItems();
                return this._cacheLang;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Manufacturer", {
            get: function () {
                if (this._cacheManufacturer == null)
                    this._cacheManufacturer = new CacheItems(500);
                return this._cacheManufacturer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "City", {
            get: function () {
                if (this._cacheCity == null)
                    this._cacheCity = new CacheItems(300);
                return this._cacheCity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "StorePlace", {
            get: function () {
                if (this._cacheStorePlace == null)
                    this._cacheStorePlace = new CacheItems(300);
                return this._cacheStorePlace;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Store", {
            get: function () {
                if (this._cacheStore == null)
                    this._cacheStore = new CacheItems(300);
                return this._cacheStore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "MeasureUnit", {
            get: function () {
                if (this._cacheMeasureUnit == null)
                    this._cacheMeasureUnit = new CacheItems(200);
                return this._cacheMeasureUnit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Quotation", {
            get: function () {
                if (this._cacheQuotation == null)
                    this._cacheQuotation = new CacheItems(100);
                return this._cacheQuotation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "LoEntity", {
            get: function () {
                if (this._cacheLoEntity == null)
                    this._cacheLoEntity = new CacheItems(10);
                return this._cacheLoEntity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Country", {
            get: function () {
                if (this._cacheCountry == null)
                    this._cacheCountry = new CacheItems(10);
                return this._cacheCountry;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "EnumPaymentMethod", {
            get: function () {
                if (this._cacheEnumPaymentMethod == null)
                    this._cacheEnumPaymentMethod = new CacheItems(10);
                return this._cacheEnumPaymentMethod;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CacheProvider.prototype, "Region", {
            get: function () {
                if (this._cacheRegion == null)
                    this._cacheRegion = new CacheItems(50);
                return this._cacheRegion;
            },
            enumerable: true,
            configurable: true
        });
        return CacheProvider;
    }());
    Providers.CacheProvider = CacheProvider;
})(Providers = exports.Providers || (exports.Providers = {}));
// <editor-fold desc="Attributes">
function LazyLoad(options) {
    return function (target) {
        // change function constructor
        var OverCtor = function () {
            var _this = this;
            var navPropNames = [];
            // call constructor
            target.apply(this, arguments);
            // <editor-fold desc="add in runtime">
            options.forEach(function (value) {
                var baseName = (!value.options['navName']) ? value.options.constructor.name.toLowerCase()
                    : value.options['navName'];
                var loadingProp = "is" + baseName + "Loading";
                var navProp = "_" + baseName;
                var fnName = value.action;
                _this[loadingProp] = false;
                _this[navProp] = null;
                // add to navigate prop for resolved getter
                navPropNames.push(navProp);
                // create getter
                Object.defineProperty(_this, baseName, {
                    configurable: false,
                    get: function () {
                        if (!_this[navProp] && !_this[loadingProp]) {
                            _this[loadingProp] = true;
                            (function () { return __awaiter(_this, void 0, void 0, function () {
                                var repo, paramsConvertedList, _a, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            repo = this['_repo'];
                                            paramsConvertedList = lazyParamToValue(this, value.params);
                                            if (!(paramsConvertedList.length !== 0)) return [3 /*break*/, 2];
                                            _a = this;
                                            _b = navProp;
                                            return [4 /*yield*/, repo[fnName].apply(repo, paramsConvertedList)];
                                        case 1:
                                            _a[_b] = _c.sent();
                                            _c.label = 2;
                                        case 2:
                                            this[loadingProp] = false;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })();
                        }
                        return _this[navProp];
                    }
                });
                Object.defineProperty(_this, baseName + '_p', {
                    configurable: false,
                    get: function () {
                        var repo = _this['_repo'];
                        var paramsConvertedList = lazyParamToValue(_this, value.params);
                        if (paramsConvertedList.length !== 0) {
                            _this[navProp + '_p'] = repo[fnName].apply(repo, paramsConvertedList);
                        }
                        else {
                            _this[navProp + '_p'] = Promise.resolve(null);
                        }
                        return _this[navProp + '_p'];
                    }
                });
            });
            // create resolved predicate
            Object.defineProperty(this, 'resolved', {
                configurable: false,
                get: function () {
                    for (var i = 0; i < navPropNames.length; i++) {
                        if (_this[navPropNames[i]] == null) {
                            return false;
                        }
                    }
                    return true;
                }
            });
            // </editor-fold>
        };
        // return function constructor name
        OverCtor.prototype = target.prototype;
        Object.defineProperty(OverCtor, 'name', { value: target.name, writable: false });
        return OverCtor;
    };
}
exports.LazyLoad = LazyLoad;
function lazyParamToValue(pointer, params) {
    var resultArr = [];
    if (!params || params.length === 0 || !pointer[params[0]]) {
        return resultArr;
    }
    params.forEach(function (value) { return resultArr.push(pointer[value]); });
    return resultArr;
}
// </editor-fold>
// #region requestFactory
var RequestFactory = (function () {
    function RequestFactory() {
    }
    /** only search param
     * example in http.get(apiUrl,
     *                     RequestFactory.makeSearch([{ key: "idAction", value: idAction.toString()}]))
     *                    ).toPromise();
    **/
    RequestFactory.makeSearch = function (params) {
        var searchParams = new http_1.URLSearchParams();
        params.forEach(function (val) { searchParams.set(val.key, val.value); });
        return { search: searchParams };
    };
    /** only auth headers (token,uid)
    * example in http.get(apiUrl, RequestFactory.makeAuthHeader()).toPromise();
    **/
    RequestFactory.makeAuthHeader = function () {
        var h = new http_1.Headers();
        h.set('Authorization', "Bearer " + (localStorage.getItem('token') || ''));
        // h.set('X-User',localStorage.getItem('id') || '');
        return { headers: h };
    };
    /** both search and auth param
     * example in http.get(apiUrl,
     *                      RequestFactory.makeSearchAndAuth([{ key: "idAction", value: idAction.toString()}]
                           ).toPromise();
   **/
    RequestFactory.makeSearchAndAuth = function (params) {
        var search = RequestFactory.makeSearch(params).search;
        var headers = RequestFactory.makeAuthHeader().headers;
        return { search: search, headers: headers };
    };
    return RequestFactory;
}());
exports.RequestFactory = RequestFactory;
// #endregion
// <editor-fold desc="core object methods">
function Activator(type) {
    return new type();
}
exports.Activator = Activator;
// </editor-fold>
// core system type
var System;
(function (System) {
    // custome number
    var FoxNumber = (function () {
        function FoxNumber(value) {
            if (value === void 0) { value = 1; }
            this.value = value;
            this._range = { min: 1, max: 30 };
        }
        Object.defineProperty(FoxNumber.prototype, "range", {
            get: function () {
                return this._range;
            },
            enumerable: true,
            configurable: true
        });
        return FoxNumber;
    }());
    System.FoxNumber = FoxNumber;
    function customConcat(source, target) {
        for (var i = 0; i < target.length; i++) {
            source.push(target[i]);
        }
    }
    System.customConcat = customConcat;
    var PushContainer = (function () {
        function PushContainer() {
        }
        return PushContainer;
    }());
    PushContainer.pushStore = {};
    System.PushContainer = PushContainer;
})(System = exports.System || (exports.System = {}));
