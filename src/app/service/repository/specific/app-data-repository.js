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
var app_constants_1 = require("./../../../app-constants");
var app_core_1 = require("./../../../core/app-core");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CacheProvider = app_core_2.Providers.CacheProvider;
var index_1 = require("../../../model/index");
var index_2 = require("../../index");
var app_core_2 = require("../../../core/app-core");
var region_1 = require("../../../model/region");
// <editor-fold desc="url const">
//PRODUCTION URLS
var productDescriptionsUrl = app_constants_1.AppConstants.BASE_URL + "/api/product/getProductDescription";
var productsUrl = app_constants_1.AppConstants.BASE_URL + "/api/product";
var currenciesUrl = app_constants_1.AppConstants.BASE_URL + "/api/currency";
var manufacturersUrl = app_constants_1.AppConstants.BASE_URL + "/api/manufacturer";
var quotationProductsUrl = app_constants_1.AppConstants.BASE_URL + "/api/quotationproduct";
var suppliersUrl = app_constants_1.AppConstants.BASE_URL + "/api/supplier";
var measureUnitUrl = app_constants_1.AppConstants.BASE_URL + "/api/measureUnit";
var LangUrl = app_constants_1.AppConstants.BASE_URL + "/api/localization/lang";
var countriesUrl = app_constants_1.AppConstants.BASE_URL + "/api/geo/country";
var citiesUrl = app_constants_1.AppConstants.BASE_URL + "/api/geo/city";
var regionsUrl = app_constants_1.AppConstants.BASE_URL + "/api/geo/region";
var getPaymentMethodsUrl = app_constants_1.AppConstants.BASE_URL + "/api/fin/pmtmethod";
var loEntitiesUrl = app_constants_1.AppConstants.BASE_URL + "/api/lo/loentity";
var quotationsUrl = app_constants_1.AppConstants.BASE_URL + "/api/quotation";
var clientsUrl = app_constants_1.AppConstants.BASE_URL + "/api/client";
var cartProductsUrl = app_constants_1.AppConstants.BASE_URL + "/api/cart/CartProducts";
var productStorePlacesUrl = app_constants_1.AppConstants.BASE_URL + "/api/storeplace/productstoreplaces";
var storePlacesUrl = app_constants_1.AppConstants.BASE_URL + "/api/storeplace/storeplace";
var loSupplEntitiesUrl = app_constants_1.AppConstants.BASE_URL + "/api/lo/losupplentity";
var specLOTrackingLogUrl = app_constants_1.AppConstants.BASE_URL + "/api/lo/specLOTrackingLog";
var clientDraftOrderUrl = app_constants_1.AppConstants.BASE_URL + "/api/Cart/ClientDraftOrder";
var personsUrl = app_constants_1.AppConstants.BASE_URL + "/api/client/person";
var productImagesUrl = app_constants_1.AppConstants.BASE_URL + "/api/product/getProductImages";
var getBonusesInfoUrl = app_constants_1.AppConstants.BASE_URL + "/api/client/getBonusesInfo";
var getClientBonusesExpireInfoUrl = app_constants_1.AppConstants.BASE_URL + "/api/client/GetBonusesExpireInfo";
var creditProductsUrl = app_constants_1.AppConstants.BASE_URL + "/api/credit/creditproduct";
var productSupplCreditGradesUrl = app_constants_1.AppConstants.BASE_URL + "/api/credit/GetProductCreditSize";
var postProductViewUrl = app_constants_1.AppConstants.BASE_URL + "/api/client/LogProductView";
var clientAddressesUrl = app_constants_1.AppConstants.BASE_URL + "/api/client/clientAddress";
var clientOrderSpecProductsUrl = app_constants_1.AppConstants.BASE_URL + "/api/Cart/GetCartProductsByOrderId";
var clientOrdersUrl = app_constants_1.AppConstants.BASE_URL + "/api/Cart/GetClientOrders";
var citiesWithStoresUrl = app_constants_1.AppConstants.BASE_URL + "/api/geo/citiesWithStores";
var getDeliveryCostUrl = app_constants_1.AppConstants.BASE_URL + "/api/lo/GetDeliveryCost";
var getDeliveryDateUrl = app_constants_1.AppConstants.BASE_URL + "/api/lo/GetDeliveryDate";
var calculateCartUrl = app_constants_1.AppConstants.BASE_URL + "/api/cart/calculateCart";
var postOrderUrl = app_constants_1.AppConstants.BASE_URL + "/api/cart/postOrder";
var pollsUrl = app_constants_1.AppConstants.BASE_URL + "/api/poll";
var clientPollAnswersUrl = app_constants_1.AppConstants.BASE_URL + "/api/poll/ClientPollAnswer";
var pollQuestionUrl = app_constants_1.AppConstants.BASE_URL + "/api/poll/pollQuestions";
var pollQuestionAnswerUrl = app_constants_1.AppConstants.BASE_URL + "/api/poll/pollAnswers";
var pagesDynamicUrl = app_constants_1.AppConstants.BASE_URL + "/api/page";
var actionDynamicUrl = app_constants_1.AppConstants.BASE_URL + "/api/stock";
var storesUrl = app_constants_1.AppConstants.BASE_URL + "/api/storeplace/stores";
var productReviewsUrl = app_constants_1.AppConstants.BASE_URL + "/api/product/GetProductReviews";
var storeReviewsUrl = app_constants_1.AppConstants.BASE_URL + "/api/storeplace/GetStoreReviews";
var storeReviewsByStoreIdUrl = app_constants_1.AppConstants.BASE_URL + "/api/storeplace/GetStoreReviewsByStoreId";
var noveltyByIdDynamicUrl = app_constants_1.AppConstants.BASE_URL + "/api/novelty/GetNoveltyById";
var noveltiesDynamicUrl = app_constants_1.AppConstants.BASE_URL + "/api/novelty/GetNovelties";
var noveltyDetailsDynamicUrl = app_constants_1.AppConstants.BASE_URL + "/api/novelty/GetNoveltyDetailsByNoveltyId";
//DEV URLS
// const productDescriptionsUrl = 'api/mproductDescriptions';
// const currenciesUrl = "/api/mcurrencies";
// const productsUrl = "/api/mproducts";
// const manufacturersUrl = "/api/manufacturers";
// const quotationProductsUrl = "/api/mquotationProducts";
// const suppliersUrl = "/api/msuppliers";
// const mYeasureUnitUrl = '/api/mmeasureUnits';
// const LangUrl = "/api/mlocalization";
// const countriesUrl = "/api/mcountries";
// const citiesUrl = "/api/mcities";
// const regionsUrl = "/api/mregions";
// const getPaymentMethodsUrl = "/api/mpaymentMethods";
// const loEntitiesUrl = "/api/mloEntities";
// const quotationsUrl = "/api/mquotation";
// const clientsUrl = "/api/mclients";
// const cartProductsUrl = "/api/mcartProducts";
// const productStorePlacesUrl = "/api/mproductStorePlaces";
// const storePlacesUrl = "/api/mstorePlaces";
// const loSupplEntitiesUrl = "/api/mloSupplEntities";
// const specLOTrackingLogUrl = '/api/mspecLOTrackingLog';
// const clientDraftOrderUrl = "/api/mclientDraftOrder";
// const personsUrl = "/api/mpersons";
// const productImagesUrl = "/api/mProductImages";
// const getBonusesInfoUrl = "/api/mgetBonusesInfoForCheckout";
// const getClientBonusesExpireInfoUrl = "/api/mclientBonuses";
// const creditProductsUrl = "/api/mcreditProducts";
// const productSupplCreditGradesUrl = "/api/mproductSupplCreditGrades";
// const postProductViewUrl = "/api/mpostProductView";
// const clientAddressesUrl = "/api/mclientAddresses";
// const clientOrderSpecProductsUrl = "/api/mclientOrderSpecProducts";
// const clientOrdersUrl = "/api/mclientOrders";
// const citiesWithStoresUrl = "/api/mcities";
// const storesUrl = "/api/mstores";
// const getDeliveryCostUrl = "/api/mgetDeliveryCost";
// const getDeliveryDateUrl = "/api/mgetDeliveryDate";
// const calculateCartUrl = "/api/mcalculateCart";
// const productReviewsUrl = "/api/mproductReviews";
var actionOffersUrl = "/api/mactionOffers";
// const storeReviewsUrl = "/api/mstoreReviews";
// const noveltyDynamicUrl = "/api/mnovelties";
//const noveltyDetailsDynamicUrl = "/api/mnoveltyDetails";
var deviceDataUrl = "/api/mdeviceData";
var categoriesUrl = app_constants_1.AppConstants.USE_PRODUCTION ? app_constants_1.AppConstants.BASE_URL + "/api/catalog" : "/api/mcategories";
// </editor-fold
var AppDataRepository = (function (_super) {
    __extends(AppDataRepository, _super);
    function AppDataRepository(http, connServ) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.connServ = connServ;
        _this.cache = new CacheProvider();
        return _this;
    }
    AppDataRepository.prototype.getClientBonusesExpireInfo = function (clientId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, arr_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(getClientBonusesExpireInfoUrl, {
                                search: this.createSearchParams([
                                    { key: "clientId", value: clientId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        arr_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return arr_1.push(new index_1.ClientBonus(val.id, val.clientId, val.bonus, val.dueDate));
                            });
                        }
                        return [2 /*return*/, arr_1];
                    case 2:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_1)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.postProductView = function (idProduct, params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(postProductViewUrl, { idProduct: idProduct.toString(), params: params }).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 201) {
                            throw new Error("server side status error");
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_2 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_2)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.calculateCart = function (promoCode, maxBonusCnt, usePromoBonus, creditProductId, cartContent) {
        return __awaiter(this, void 0, void 0, function () {
            var _dtoContent_1, response, val, _res_1, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _dtoContent_1 = [];
                        cartContent.forEach(function (i) {
                            _dtoContent_1.push(i.dto);
                        });
                        return [4 /*yield*/, this.http
                                .post(calculateCartUrl, { promoCode: promoCode, maxBonusCnt: maxBonusCnt,
                                usePromoBonus: usePromoBonus, creditProductId: creditProductId,
                                cartContent: _dtoContent_1 })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 201 && response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        _res_1 = [];
                        if (val) {
                            val.forEach(function (i) {
                                _res_1.push({ clOrderSpecProdId: i.clOrderSpecProdId, promoCodeDisc: i.promoCodeDisc,
                                    bonusDisc: i.bonusDisc, promoBonusDisc: i.promoBonusDisc, earnedBonus: i.earnedBonus });
                            });
                        }
                        return [2 /*return*/, _res_1];
                    case 2:
                        err_3 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_3)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getBonusesInfo = function (clientId) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, response, val, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _id = clientId.toString();
                        return [4 /*yield*/, this.http
                                .get(getBonusesInfoUrl + ("/" + _id)).toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status == 204)
                            return [2 /*return*/, { bonusLimit: 0, actionBonusLimit: 0 }];
                        if (response.status !== 201 && response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, val];
                    case 2:
                        err_4 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_4)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCreditProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cItems_1, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(creditProductsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cItems_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var cp = new index_1.CreditProduct();
                                cp.sId = val.sId;
                                cp.sName = val.sName;
                                cp.sDefProdId = val.sDefProdId;
                                cp.sPartPay = val.sPartPay;
                                cp.sGracePeriod = val.sGracePeriod;
                                cp.maxTerm = val.maxTerm;
                                cp.firstPay = val.firstPay;
                                cp.monthCommissionPct = val.monthCommissionPct;
                                cp.yearPct = val.yearPct;
                                cp.kpcPct = val.kpcPct;
                                cp.minTerm = val.minTerm;
                                cItems_1.push(cp);
                            });
                        }
                        return [2 /*return*/, cItems_1];
                    case 2:
                        err_5 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_5)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadPmtMethodsCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(getPaymentMethodsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var pmtMethod = new index_1.EnumPaymentMethod();
                                pmtMethod.id = val.id;
                                pmtMethod.name = val.name;
                                if (_this.isEmpty(_this.cache.EnumPaymentMethod.Item(val.id.toString()))) {
                                    _this.cache.EnumPaymentMethod.Add(val.id.toString(), pmtMethod);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_6 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_6)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPmtMethods = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cItems_2, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.EnumPaymentMethod.Count() === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(getPaymentMethodsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cItems_2 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                cItems_2.push(new index_1.EnumPaymentMethod(val.id, val.name));
                            });
                        }
                        return [2 /*return*/, cItems_2];
                    case 2: return [2 /*return*/, this.cache.EnumPaymentMethod.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_7 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_7)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPmtMethodById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, pmtMethod, response, data, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        _id = id.toString();
                        pmtMethod = new index_1.EnumPaymentMethod();
                        if (!this.isEmpty(this.cache.EnumPaymentMethod.Item(_id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http
                                .get(getPaymentMethodsUrl + ("/" + _id)).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data) {
                            pmtMethod.id = data.id;
                            pmtMethod.name = data.name;
                            this.cache.EnumPaymentMethod.Add(_id, pmtMethod);
                        }
                        return [2 /*return*/, pmtMethod];
                    case 2: return [2 /*return*/, this.cache.EnumPaymentMethod.Item(_id)];
                    case 3:
                        ;
                        return [3 /*break*/, 6];
                    case 4:
                        err_8 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_8)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getDeliveryDate = function (order, loEntityId, loIdClientAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(getDeliveryDateUrl, { order: order.dto, loEntity: loEntityId, loIdClientAddress: loIdClientAddress })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, val.deliveryDate];
                    case 2:
                        err_9 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_9)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getDeliveryCost = function (order, loEntityId, loIdClientAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(getDeliveryCostUrl, { order: order.dto, loEntity: loEntityId, loIdClientAddress: loIdClientAddress })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, val.assessedCost];
                    case 2:
                        err_10 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_10)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductCreditSize = function (idProduct, isSupplier) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(productSupplCreditGradesUrl, {
                                search: this.createSearchParams([
                                    { key: "idProduct", value: idProduct.toString() },
                                    { key: "idSupplier", value: isSupplier.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data[0])
                            return [2 /*return*/, { partsPmtCnt: data[0].partsPmtCnt, creditSize: data[0].creditSize }];
                        else
                            return [2 /*return*/, null];
                        return [3 /*break*/, 4];
                    case 2:
                        err_11 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_11)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getLoEntitiyById = function (entityId) {
        return __awaiter(this, void 0, void 0, function () {
            var id, loEntity, response, data, err_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        id = entityId.toString();
                        loEntity = new index_1.LoEntity();
                        if (!this.isEmpty(this.cache.LoEntity.Item(id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http
                                .get(loEntitiesUrl + ("/" + entityId))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data) {
                            loEntity.id = data.id;
                            loEntity.name = data.name;
                            this.cache.LoEntity.Add(id, loEntity);
                        }
                        return [2 /*return*/, loEntity];
                    case 2: return [2 /*return*/, this.cache.LoEntity.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_12 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_12)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getLoTrackLogByOrderSpecId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, arr_2, err_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(specLOTrackingLogUrl, {
                                search: this.createSearchParams([
                                    { key: "idOrderSpecProd", value: id.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        arr_2 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return arr_2.push(new index_1.LoTrackLog(val.id, val.idOrderSpecProd, val.trackDate, val.trackString));
                            });
                            arr_2.sort(function (x, y) {
                                return (+new Date(y.trackDate) - +new Date(x.trackDate));
                            });
                        }
                        return [2 /*return*/, arr_2];
                    case 2:
                        err_13 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_13)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getLoEntitiesForSupplier = function (supplierId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cloSupplEntArr_1, err_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(loSupplEntitiesUrl, {
                                search: this.createSearchParams([
                                    { key: "idSupplier", value: supplierId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cloSupplEntArr_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return cloSupplEntArr_1.push(new index_1.LoSupplEntity(val.id, val.idSupplier, val.idLoEntity));
                            });
                        }
                        return [2 /*return*/, cloSupplEntArr_1];
                    case 2:
                        err_14 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_14)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.saveClientDraftOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cClientOrder, err_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .put(clientDraftOrderUrl, order.dto)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            cClientOrder = new index_1.ClientOrder(data.id, data.orderDate, data.idCur, data.idClient, data.total, data.idPaymentMethod, data.idPaymentStatus, data.idStatus, null, data.loIdEntity, data.loIdClientAddress, data.itemsTotal, data.shippingTotal, data.bonusTotal, data.promoBonusTotal, data.bonusEarned, data.promoCodeDiscTotal, data.idPerson);
                            return [2 /*return*/, cClientOrder];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_15 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_15)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Метод должен возвращать 1 обїект - черновой заказ, которьій для каждого клиента может бьіть только в единсвенном єкземпляре.
    // Если чернового заказа в базе нет - то создавать и возвращать его
    AppDataRepository.prototype.getClientDraftOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cClientOrder, err_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(clientDraftOrderUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            cClientOrder = new index_1.ClientOrder(data.id, data.orderDate, data.idCur, data.idClient, data.total, data.idPaymentMethod, data.idPaymentStatus, data.idStatus, null, data.loIdEntity, data.loIdClientAddress, data.itemsTotal, data.shippingTotal, data.bonusTotal, data.promoBonusTotal, data.bonusEarned, data.promoCodeDiscTotal, data.idPerson);
                            return [2 /*return*/, cClientOrder];
                        }
                        ;
                        return [3 /*break*/, 4];
                    case 2:
                        err_16 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_16)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cClientOrders_1, err_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(clientOrdersUrl, {
                                //TODO в реальном бекенде входящие параметры игнорить и возвращать все заказы клиента в статусе > 0
                                search: this.createSearchParams([
                                    { key: "idClient", value: "100" },
                                    { key: "idStatus", value: "1" }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cClientOrders_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return cClientOrders_1.push(new index_1.ClientOrder(val.id, val.orderDate, val.idCur, val.idClient, val.total, val.idPaymentMethod, val.idPaymentStatus, val.idStatus, null, val.loIdEntity, val.loIdClientAddress, val.itemsTotal, val.shippingTotal, val.bonusTotal, val.promoBonusTotal, val.bonusEarned, val.promoCodeDiscTotal, val.idPerson));
                            });
                        }
                        ;
                        return [2 /*return*/, cClientOrders_1];
                    case 2:
                        err_17 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_17)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.postOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, err_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .put(postOrderUrl, order.dto).toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, { isSuccess: val.isSuccess, errorMessage: val.errorMessage }];
                    case 2:
                        err_18 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_18)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.insertCartProduct = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, p, err_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(cartProductsUrl, prod.dto /*obj*/)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 201) {
                            throw new Error("server side status error");
                        }
                        p = new index_1.ClientOrderProducts();
                        p.id = val.id;
                        p.idOrder = val.idOrder;
                        p.idQuotationProduct = val.idQuotationProduct;
                        p.price = val.price;
                        p.qty = val.qty;
                        p.idStorePlace = val.idStorePlace;
                        p.idLoEntity = val.idLoEntity;
                        p.loTrackTicket = val.loTrackTicket;
                        p.loDeliveryCost = val.loDeliveryCost;
                        p.loDeliveryCompleted = val.loDeliveryCompleted;
                        p.loEstimatedDeliveryDate = val.loEstimatedDeliveryDate;
                        p.loDeliveryCompletedDate = val.loDeliveryCompletedDate;
                        p.errorMessage = val.errorMessage;
                        p.warningMessage = val.warningMessage;
                        p.warningRead = val.warningRead;
                        return [2 /*return*/, p];
                    case 2:
                        err_19 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_19)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.saveCartProduct = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, p, err_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .put(cartProductsUrl, prod.dto /*obj*/)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        p = new index_1.ClientOrderProducts();
                        p.id = val.id;
                        p.idOrder = val.idOrder;
                        p.idQuotationProduct = val.idQuotationProduct;
                        p.price = val.price;
                        p.qty = val.qty;
                        p.idStorePlace = val.idStorePlace;
                        p.idLoEntity = val.idLoEntity;
                        p.loTrackTicket = val.loTrackTicket;
                        p.loDeliveryCost = val.loDeliveryCost;
                        p.loDeliveryCompleted = val.loDeliveryCompleted;
                        p.loEstimatedDeliveryDate = val.loEstimatedDeliveryDate;
                        p.loDeliveryCompletedDate = val.loDeliveryCompletedDate;
                        p.errorMessage = val.errorMessage;
                        p.warningMessage = val.warningMessage;
                        p.warningRead = val.warningRead;
                        return [2 /*return*/, p];
                    case 2:
                        err_20 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_20)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.deleteCartProduct = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_21;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .delete(cartProductsUrl + ("/" + prod.id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 204) {
                            throw new Error("server side status error");
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_21 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_21)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCartProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cClientOrderProducts_1, err_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(cartProductsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cClientOrderProducts_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var p = new index_1.ClientOrderProducts();
                                p.id = val.id;
                                p.idOrder = val.idOrder;
                                p.idQuotationProduct = val.idQuotationProduct;
                                p.price = val.price;
                                p.qty = val.qty;
                                p.idStorePlace = val.idStorePlace;
                                p.idLoEntity = val.idLoEntity;
                                p.loTrackTicket = val.loTrackTicket;
                                p.loDeliveryCost = val.loDeliveryCost;
                                p.loDeliveryCompleted = val.loDeliveryCompleted;
                                p.loEstimatedDeliveryDate = val.loEstimatedDeliveryDate;
                                p.loDeliveryCompletedDate = val.loDeliveryCompletedDate;
                                p.errorMessage = val.errorMessage;
                                p.warningMessage = val.warningMessage;
                                p.payPromoCode = val.payPromoCode;
                                p.payPromoCodeDiscount = val.payPromoCodeDiscount;
                                p.payBonusCnt = val.payBonusCnt;
                                p.payPromoBonusCnt = val.payPromoBonusCnt;
                                p.earnedBonusCnt = val.earnedBonusCnt;
                                p.warningRead = val.warningRead;
                                cClientOrderProducts_1.push(p);
                            });
                        }
                        return [2 /*return*/, cClientOrderProducts_1];
                    case 2:
                        err_22 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_22)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientOrderProductsByOrderId = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, orderProducts_1, val, err_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(clientOrderSpecProductsUrl, {
                                search: this.createSearchParams([
                                    { key: "idOrder", value: orderId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        orderProducts_1 = [];
                        val = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        val.forEach(function (i) {
                            var p = new index_1.ClientOrderProducts();
                            p.id = i.id;
                            p.idOrder = i.idOrder;
                            p.idQuotationProduct = i.idQuotationProduct;
                            p.price = i.price;
                            p.qty = i.qty;
                            p.idStorePlace = i.idStorePlace;
                            p.idLoEntity = i.idLoEntity;
                            p.loTrackTicket = i.loTrackTicket;
                            p.loDeliveryCost = i.loDeliveryCost;
                            p.loDeliveryCompleted = i.loDeliveryCompleted;
                            p.loEstimatedDeliveryDate = i.loEstimatedDeliveryDate;
                            p.loDeliveryCompletedDate = i.loDeliveryCompletedDate;
                            p.errorMessage = i.errorMessage;
                            p.payPromoCode = i.payPromoCode;
                            p.payPromoCodeDiscount = i.payPromoCodeDiscount;
                            p.payBonusCnt = i.payBonusCnt;
                            p.payPromoBonusCnt = i.payPromoBonusCnt;
                            p.earnedBonusCnt = i.earnedBonusCnt;
                            p.warningRead = i.warningRead;
                            orderProducts_1.push(p);
                        });
                        return [2 /*return*/, orderProducts_1];
                    case 2:
                        err_23 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_23)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductReviewsByProductId = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, qProductsRevs_1, answers_1, err_24;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(productReviewsUrl + "/" + productId).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        qProductsRevs_1 = new Array();
                        answers_1 = {};
                        if (data != null) {
                            data.forEach(function (val) {
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview && val.idReview !== null) {
                                    if (!answers_1[val.idReview.toString()]) {
                                        answers_1[val.idReview.toString()] = [];
                                    }
                                    answers_1[val.idReview.toString()].push(new index_1.ReviewAnswer(val.id, val.idReview, val.user, new Date(date), val.reviewText));
                                }
                            });
                            data.forEach(function (val) {
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview === null) {
                                    if (answers_1[val.id.toString()]) {
                                        qProductsRevs_1.push(new index_1.ProductReview(val.id, val.idProduct, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, answers_1[val.id.toString()]));
                                    }
                                    else {
                                        qProductsRevs_1.push(new index_1.ProductReview(val.id, val.idProduct, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, []));
                                    }
                                }
                            });
                        }
                        return [2 /*return*/, qProductsRevs_1];
                    case 2:
                        err_24 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_24)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductStorePlacesByQuotId = function (quotId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, qProductsStorePlaces, _i, data_1, val, psp, sp, err_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 8]);
                        return [4 /*yield*/, this.http
                                .get(productStorePlacesUrl, {
                                search: this.createSearchParams([
                                    { key: "idQuotationProduct", value: quotId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        qProductsStorePlaces = new Array();
                        if (!(data != null)) return [3 /*break*/, 5];
                        _i = 0, data_1 = data;
                        _a.label = 2;
                    case 2:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        val = data_1[_i];
                        psp = new index_1.ProductStorePlace(val.id, val.idQuotationProduct, val.idStorePlace, val.qty);
                        return [4 /*yield*/, psp.storeplace_p];
                    case 3:
                        sp = _a.sent();
                        if (sp.type == 1)
                            //select only storeplaces with type of store
                            qProductsStorePlaces.push(psp);
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: 
                    /*
                    return qProductsStorePlaces.sort((a, b) =>
                      {return ( (<any>a).idStorePlace.storeplace.city.name - (<any>b).idStorePlace.storeplace.city.name)});
              */
                    return [2 /*return*/, qProductsStorePlaces];
                    case 6:
                        err_25 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_25)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCountries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, cCountries_1, err_26;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cache.Country.Count() > 0)
                            return [2 /*return*/, this.cache.Country.Values()];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.http.get(countriesUrl).toPromise()];
                    case 2:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cCountries_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var p = new index_1.Country();
                                p.id = val.id;
                                p.name = val.name;
                                cCountries_1.push(p);
                                _this.cache.Country.Add(p.id.toString(), p);
                            });
                        }
                        return [2 /*return*/, cCountries_1];
                    case 3:
                        err_26 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_26)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCountryById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, country, response, data, err_27;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 7]);
                        _id = id.toString();
                        country = new index_1.Country();
                        if (!this.isEmpty(this.cache.Country.Item(_id))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http
                                .get(countriesUrl + ("/" + _id)).toPromise()];
                    case 2:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            country.id = data.id;
                            country.name = data.name;
                            this.cache.Country.Add(_id, country);
                            return [2 /*return*/, country];
                        }
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, this.cache.Country.Item(_id)];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        err_27 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_27)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientByUserId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, client, response, data, err_28;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _id = id.toString();
                        client = new index_1.Client();
                        return [4 /*yield*/, this.http
                                .get(clientsUrl, {
                                search: this.createSearchParams([{ key: "userId", value: _id }])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data = data[0];
                            client.id = data.id;
                            client.name = data.name;
                            client.phone = data.phone;
                            client.login = data.login;
                            client.email = data.email;
                            client.fname = data.fname;
                            client.lname = data.lname;
                            client.barcode = data.barcode;
                            // client.bonusBalance = data.bonusBalance;
                            // client.actionBonusBalance = data.actionBonusBalance;
                            return [2 /*return*/, client];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_28 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_28)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientByPhone = function (phonenum) {
        return __awaiter(this, void 0, void 0, function () {
            var client, response, data, err_29;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        client = new index_1.Client();
                        return [4 /*yield*/, this.http
                                .get(clientsUrl, {
                                search: this.createSearchParams([{ key: "phone", value: phonenum }])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data = data[0];
                            client.id = data.id;
                            client.name = data.name;
                            client.phone = data.phone;
                            client.login = data.login;
                            client.email = data.email;
                            client.fname = data.fname;
                            client.lname = data.lname;
                            return [2 /*return*/, client];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_29 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_29)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.createClientAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, clientAddress, err_30;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(clientAddressesUrl, address.dto)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 201) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            clientAddress = new index_1.ClientAddress();
                            clientAddress.id = data.id;
                            clientAddress.idClient = data.idClient;
                            clientAddress.idCity = data.idCity;
                            clientAddress.zip = data.zip;
                            clientAddress.street = data.street;
                            clientAddress.lat = data.lat;
                            clientAddress.lng = data.lng;
                            clientAddress.isPrimary = data.isPrimary;
                            clientAddress.idCountry = data.idCountry;
                            clientAddress.city = data.city;
                            clientAddress.bldApp = data.bldApp;
                            clientAddress.recName = data.recName;
                            clientAddress.phone = data.phone;
                            return [2 /*return*/, clientAddress];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_30 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_30)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.deleteClientAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_31;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .delete(clientAddressesUrl + ("/" + address.id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 204) {
                            throw new Error("server side status error");
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_31 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_31)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.saveClientAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, clientAddress, err_32;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .put(clientAddressesUrl, address.dto)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            clientAddress = new index_1.ClientAddress();
                            clientAddress.id = data.id;
                            clientAddress.idClient = data.idClient;
                            clientAddress.idCity = data.idCity;
                            clientAddress.zip = data.zip;
                            clientAddress.street = data.street;
                            clientAddress.lat = data.lat;
                            clientAddress.lng = data.lng;
                            clientAddress.isPrimary = data.isPrimary;
                            clientAddress.idCountry = data.idCountry;
                            clientAddress.city = data.city;
                            clientAddress.bldApp = data.bldApp;
                            clientAddress.recName = data.recName;
                            clientAddress.phone = data.phone;
                            return [2 /*return*/, clientAddress];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_32 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_32)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientAddressById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, response, data, clientAddress, err_33;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/, Promise.resolve(null)];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        _id = id.toString();
                        return [4 /*yield*/, this.http
                                .get(clientAddressesUrl + ("/" + _id)).toPromise()];
                    case 2:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            clientAddress = new index_1.ClientAddress();
                            clientAddress.id = data.id;
                            clientAddress.idClient = data.idClient;
                            clientAddress.idCity = data.idCity;
                            clientAddress.zip = data.zip;
                            clientAddress.street = data.street;
                            clientAddress.lat = data.lat;
                            clientAddress.lng = data.lng;
                            clientAddress.isPrimary = data.isPrimary;
                            clientAddress.idCountry = data.idCountry;
                            clientAddress.city = data.city;
                            clientAddress.bldApp = data.bldApp;
                            clientAddress.recName = data.recName;
                            clientAddress.phone = data.phone;
                            return [2 /*return*/, clientAddress];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        err_33 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_33)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientAddressesByClientId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, clientAdresses, response, data, _i, data_2, i, clientAddress, err_34;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _id = id.toString();
                        clientAdresses = new Array();
                        return [4 /*yield*/, this.http
                                .get(clientAddressesUrl, {
                                search: this.createSearchParams([{ key: "idClient", value: _id }])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            for (_i = 0, data_2 = data; _i < data_2.length; _i++) {
                                i = data_2[_i];
                                clientAddress = new index_1.ClientAddress();
                                clientAddress.id = i.id;
                                clientAddress.idClient = i.idClient;
                                clientAddress.idCity = i.idCity;
                                clientAddress.zip = i.zip;
                                clientAddress.street = i.street;
                                clientAddress.lat = i.lat;
                                clientAddress.lng = i.lng;
                                clientAddress.isPrimary = i.isPrimary;
                                clientAddress.idCountry = i.idCountry;
                                clientAddress.city = i.city;
                                clientAddress.bldApp = i.bldApp;
                                clientAddress.recName = i.recName;
                                clientAddress.phone = i.phone;
                                clientAdresses.push(clientAddress);
                            }
                            return [2 /*return*/, clientAdresses];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_34 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_34)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadStorePlaceCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_35;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(storePlacesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var storeplace = new index_1.StorePlace();
                                storeplace.id = val.id;
                                storeplace.name = val.name;
                                storeplace.idSupplier = val.idSupplier;
                                storeplace.idCity = val.idCity;
                                storeplace.zip = val.zip;
                                storeplace.address_line = val.address_line;
                                storeplace.lat = val.lat;
                                storeplace.lng = val.lng;
                                storeplace.type = val.type;
                                if (_this.isEmpty(_this.cache.StorePlace.Item(val.id.toString()))) {
                                    _this.cache.StorePlace.Add(val.id.toString(), storeplace);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_35 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_35)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getStorePlaceById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, storeplace, response, data, err_36;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        _id = id.toString();
                        storeplace = new index_1.StorePlace();
                        if (!this.isEmpty(this.cache.StorePlace.Item(_id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http
                                .get(storePlacesUrl + ("/" + _id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            //storeplace = new StorePlace();
                            storeplace.id = id;
                            storeplace.name = data.name;
                            storeplace.idSupplier = data.idSupplier;
                            storeplace.idCity = data.idCity;
                            storeplace.zip = data.zip;
                            storeplace.address_line = data.address_line;
                            storeplace.lat = data.lat;
                            storeplace.lng = data.lng;
                            storeplace.type = data.type;
                            // add to cache
                            this.cache.StorePlace.Add(_id, storeplace);
                        }
                        return [2 /*return*/, storeplace];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.StorePlace.Item(_id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_36 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_36)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadCityCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_37;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(citiesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var city = new index_1.City();
                                city.id = val.id;
                                city.name = val.name;
                                city.idRegion = val.idRegion;
                                if (_this.isEmpty(_this.cache.City.Item(val.id.toString()))) {
                                    _this.cache.City.Add(val.id.toString(), city);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_37 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_37)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadRegionsCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_38;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(regionsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var region = new region_1.Region();
                                region.id = val.id;
                                region.name = val.name;
                                if (_this.isEmpty(_this.cache.Region.Item(val.id.toString()))) {
                                    _this.cache.Region.Add(val.id.toString(), region);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_38 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_38)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getRegionById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var region, _id, response, data, err_39;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 7]);
                        region = new region_1.Region();
                        _id = id.toString();
                        if (!this.isEmpty(this.cache.Region.Item(_id))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.get(regionsUrl + ("/" + _id)).toPromise()];
                    case 2:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            region.id = id;
                            region.name = data.name;
                            // add to cache
                            this.cache.Region.Add(_id, region);
                        }
                        return [2 /*return*/, region];
                    case 3: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Region.Item(_id)];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        err_39 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_39)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getRegions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, regions_1, err_40;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(regionsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        regions_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var regionItem = new region_1.Region(val.id, val.name);
                                regions_1.push(regionItem);
                            });
                        }
                        return [2 /*return*/, regions_1];
                    case 2:
                        err_40 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_40)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCityById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var city, _id, response, data, err_41;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 7]);
                        city = new index_1.City();
                        _id = id.toString();
                        if (!this.isEmpty(this.cache.City.Item(_id))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.get(citiesUrl + ("/" + _id)).toPromise()];
                    case 2:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            city.id = id;
                            city.name = data.name;
                            city.idRegion = data.idRegion;
                            // add to cache
                            this.cache.City.Add(_id, city);
                        }
                        return [2 /*return*/, city];
                    case 3: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.City.Item(_id)];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        err_41 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_41)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.search = function (textToSearch, srchVal) {
        if (textToSearch && srchVal) {
            var ar = srchVal.toLowerCase().split(" ");
            var i_1 = 0;
            ar.forEach(function (str) {
                if (!(textToSearch.toLowerCase().indexOf(str) == -1)) {
                    i_1++;
                }
            });
            if (i_1 == ar.length)
                return true;
        }
        else
            return false;
        //return ((textToSearch) && !(textToSearch.toLowerCase().indexOf(srchVal.toLowerCase()) == -1));
    };
    AppDataRepository.prototype.searchProducts = function (srchString) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, products, _i, data_3, val, props, productItem, mnf, response, data, products, _a, data_4, val, props, productItem, err_42;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 11]);
                        if (!!app_constants_1.AppConstants.USE_PRODUCTION) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.http.get(productsUrl).toPromise()];
                    case 1:
                        response = _b.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        products = new Array();
                        if (!(data != null)) return [3 /*break*/, 5];
                        _i = 0, data_3 = data;
                        _b.label = 2;
                    case 2:
                        if (!(_i < data_3.length)) return [3 /*break*/, 5];
                        val = data_3[_i];
                        props = new Array();
                        if (val.props && val.props.length !== 0) {
                            props = this.getPropValuefromProduct(val);
                        }
                        productItem = new index_1.Product(val.id, val.name, val.price, val.oldPrice, val.bonuses, val.manufacturerId, props, val.imageUrl, val.rating, val.recall, val.supplOffers, val.slideImageUrls, val.barcode);
                        return [4 /*yield*/, productItem.manufacturer_p];
                    case 3:
                        mnf = _b.sent();
                        if (this.search(mnf.name, srchString) ||
                            this.search(productItem.id.toString(), srchString) ||
                            this.search(productItem.name, srchString) ||
                            this.search(productItem.barcode, srchString)) {
                            products.push(productItem);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, products];
                    case 6: return [4 /*yield*/, this.http
                            .get(productsUrl, {
                            search: this.createSearchParams([
                                { key: "srch", value: srchString }
                            ])
                        })
                            .toPromise()];
                    case 7:
                        response = _b.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        products = new Array();
                        if (data != null) {
                            for (_a = 0, data_4 = data; _a < data_4.length; _a++) {
                                val = data_4[_a];
                                props = new Array();
                                if (val.props && val.props.length !== 0) {
                                    props = this.getPropValuefromProduct(val);
                                }
                                productItem = new index_1.Product(val.id, val.name, val.price, val.oldPrice, val.bonuses, val.manufacturerId, props, val.imageUrl, val.rating, val.recall, val.supplOffers, val.slideImageUrls, val.barcode);
                                products.push(productItem);
                            }
                            return [2 /*return*/, products];
                        }
                        _b.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        err_42 = _b.sent();
                        return [4 /*yield*/, this.handleError(err_42)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductsByGroupId = function (idGroup) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, products_1, err_43;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(productsUrl, {
                                search: this.createSearchParams([
                                    { key: "idGroup", value: idGroup.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        products_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var props = new Array();
                                if (val.props && val.props.length !== 0) {
                                    props = _this.getPropValuefromProduct(val);
                                }
                                // create current product
                                var productItem = new index_1.Product(val.id, val.name, val.price, val.oldPrice, val.bonuses, val.manufacturerId, props, val.imageUrl, val.rating, val.recall, val.supplOffers, val.slideImageUrls, val.barcode);
                                products_1.push(productItem);
                            });
                        }
                        return [2 /*return*/, products_1];
                    case 2:
                        err_43 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_43)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProducts = function (urlQuery, cacheForce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, products_2, err_44;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Products.Count() === 0 || cacheForce === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http
                                .get(productsUrl, {
                                search: this.createSearchParams([{ key: "url", value: urlQuery }])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        products_2 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var props = new Array();
                                if (val.props && val.props.length !== 0) {
                                    props = _this.getPropValuefromProduct(val);
                                }
                                // create current product
                                var productItem = new index_1.Product(val.id, val.name, val.price, val.oldPrice, val.bonuses, val.manufacturerId, props, val.imageUrl, val.rating, val.recall, val.supplOffers, val.slideImageUrls, val.barcode);
                                products_2.push(productItem);
                                // add product to cashe
                                _this.cache.Products.Add(productItem.id.toString(), productItem);
                            });
                        }
                        return [2 /*return*/, products_2];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Products.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_44 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_44)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getQuotationProductById = function (qpId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, quotationProduct, err_45;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(quotationProductsUrl + ("/" + qpId))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        quotationProduct = null;
                        if (data != null) {
                            quotationProduct = new index_1.QuotationProduct(data.id, data.idQuotation, data.idProduct, data.price, data.maxDeliveryDays, data.stockQuant, data.stockLow, data.freeShipping);
                        }
                        return [2 /*return*/, quotationProduct];
                    case 2:
                        err_45 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_45)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getValueQuotByProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _qps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getQuotationProductsByProductId(id)];
                    case 1:
                        _qps = _a.sent();
                        if (_qps.length === 0)
                            return [2 /*return*/, null];
                        // Возвращаем предложение с минимальной ценой
                        return [2 /*return*/, _qps.sort(function (x, y) {
                                return (x.price - y.price);
                            })
                                .find(function (i) { return (i.stockQuant > 0); })];
                }
            });
        });
    };
    AppDataRepository.prototype.getByItAgainQP = function (originalQP) {
        return __awaiter(this, void 0, void 0, function () {
            var _orQuot, _qps, _foundQuot, _i, _qps_1, i, _q;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Если исходный QP все еще актуальный - возвращаем его
                        if (originalQP.stockQuant > 0)
                            return [2 /*return*/, originalQP];
                        return [4 /*yield*/, originalQP.quotation_p];
                    case 1:
                        _orQuot = _a.sent();
                        return [4 /*yield*/, this.getQuotationProductsByProductId(originalQP.idProduct)];
                    case 2:
                        _qps = _a.sent();
                        _foundQuot = null;
                        _i = 0, _qps_1 = _qps;
                        _a.label = 3;
                    case 3:
                        if (!(_i < _qps_1.length)) return [3 /*break*/, 6];
                        i = _qps_1[_i];
                        return [4 /*yield*/, i.quotation_p];
                    case 4:
                        _q = _a.sent();
                        if ((_q.idSupplier === _orQuot.idSupplier) && (i.stockQuant > 0)) {
                            return [2 /*return*/, _foundQuot];
                        }
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [4 /*yield*/, this.getValueQuotByProduct(originalQP.idProduct)];
                    case 7: 
                    // находим valueQuot и возвращаем его
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //TODO при реализации бекенда возвращать в этом методе только те QuotationProducts, по которым остаток > 0
    // и не закрытые (т.е. актуальные на сейчас предложения продавцов, а не позавчерашние)
    AppDataRepository.prototype.getQuotationProductsByProductId = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, qProducts_1, err_46;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(quotationProductsUrl, {
                                search: this.createSearchParams([
                                    { key: "idProduct", value: productId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        qProducts_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return qProducts_1.push(new index_1.QuotationProduct(val.id, val.idQuotation, val.idProduct, val.price, val.maxDeliveryDays, val.stockQuant, val.stockLow, val.freeShipping, val.actionPrice));
                            });
                        }
                        return [2 /*return*/, qProducts_1];
                    case 2:
                        err_46 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_46)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductById = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var prod, id, response, data, props, err_47;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        prod = new index_1.Product();
                        id = productId.toString();
                        if (!this.isEmpty(this.cache.Products.Item(id))) return [3 /*break*/, 2];
                        this.cache.Products.Add(id, prod);
                        return [4 /*yield*/, this.http
                                .get(productsUrl + ("/" + id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null && data.length !== 0) {
                            props = new Array();
                            if (data.props && data.props.length !== 0) {
                                props = this.getPropValuefromProduct(data);
                            }
                            /*prod = new Product(data.id, data.name, data.price, new Manufacturer(data.manufacturer.id, data.manufacturer.name),
                              props, data.imageUrl, data.rating, data.recall, data.supplOffers);*/
                            // product insert
                            prod.id = data.id;
                            prod.name = data.name;
                            prod.price = data.price;
                            prod.manufacturerId = data.manufacturerId;
                            prod.Props = props;
                            prod.imageUrl = data.imageUrl;
                            prod.rating = data.rating;
                            prod.recall = data.recall;
                            prod.supplOffers = data.supplOffers;
                            prod.slideImageUrls = data.slideImageUrls;
                            prod.barcode = data.barcode;
                            // add to cache
                            this.cache.Products.Add(id, prod);
                        }
                        return [2 /*return*/, prod];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Products.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_47 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_47)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getQuotationById = function (quotationId) {
        return __awaiter(this, void 0, void 0, function () {
            var quotation, id, response, data, err_48;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        quotation = new index_1.Quotation();
                        id = quotationId.toString();
                        if (!this.isEmpty(this.cache.Quotation.Item(id))) return [3 /*break*/, 2];
                        this.cache.Quotation.Add(id, quotation);
                        return [4 /*yield*/, this.http
                                .get(quotationsUrl + ("/" + quotationId))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            quotation.id = data.id;
                            quotation.idSupplier = data.idSupplier;
                            quotation.dateStart = data.dateStart;
                            quotation.dateEnd = data.dateEnd;
                            quotation.currencyId = data.currencyId;
                            this.cache.Quotation.Add(id, quotation);
                        }
                        return [2 /*return*/, quotation];
                    case 2: return [2 /*return*/, this.cache.Quotation.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_48 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_48)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.insertPerson = function (person) {
        return __awaiter(this, void 0, void 0, function () {
            var p, response, data, err_49;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        p = new index_1.PersonInfo();
                        return [4 /*yield*/, this.http
                                .post(personsUrl, person).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 201) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            p.id = data.id;
                            p.firstName = data.firstName;
                            p.lastName = data.lastName;
                            p.middleName = data.middleName;
                            p.passportSeries = data.passportSeries;
                            p.passportNum = data.passportNum;
                            p.issuedAuthority = data.issuedAuthority;
                            p.taxNumber = data.taxNumber;
                            p.birthDate = data.birthDate;
                            return [2 /*return*/, p];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_49 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_49)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.updatePerson = function (person) {
        return __awaiter(this, void 0, void 0, function () {
            var p, response, data, err_50;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        p = new index_1.PersonInfo();
                        return [4 /*yield*/, this.http
                                .put(personsUrl, person).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            p.id = data.id;
                            p.firstName = data.firstName;
                            p.lastName = data.lastName;
                            p.middleName = data.middleName;
                            p.passportSeries = data.passportSeries;
                            p.passportNum = data.passportNum;
                            p.issuedAuthority = data.issuedAuthority;
                            p.taxNumber = data.taxNumber;
                            p.birthDate = data.birthDate;
                            return [2 /*return*/, p];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_50 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_50)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPersonById = function (personId) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, p, response, data, err_51;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _id = personId.toString();
                        p = new index_1.PersonInfo();
                        return [4 /*yield*/, this.http.get(personsUrl + ("/" + _id)).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            p.id = data.id;
                            p.firstName = data.firstName;
                            p.lastName = data.lastName;
                            p.middleName = data.middleName;
                            p.passportSeries = data.passportSeries;
                            p.passportNum = data.passportNum;
                            p.issuedAuthority = data.issuedAuthority;
                            p.taxNumber = data.taxNumber;
                            p.birthDate = data.birthDate;
                            return [2 /*return*/, p];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_51 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_51)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadSuppliersCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_52;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(suppliersUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var supplier = new index_1.Supplier();
                                supplier.id = val.id;
                                supplier.name = val.name;
                                supplier.paymentMethodId = val.paymentMethodId;
                                supplier.rating = val.rating;
                                supplier.positiveFeedbackPct = val.positiveFeedbackPct;
                                supplier.refsCount = val.refsCount;
                                if (_this.isEmpty(_this.cache.Suppliers.Item(val.id.toString()))) {
                                    _this.cache.Suppliers.Add(val.id.toString(), supplier);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_52 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_52)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getSupplierById = function (supplierId) {
        return __awaiter(this, void 0, void 0, function () {
            var suppl, id, response, data, err_53;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        suppl = new index_1.Supplier();
                        id = supplierId.toString();
                        if (!this.isEmpty(this.cache.Suppliers.Item(id))) return [3 /*break*/, 2];
                        this.cache.Suppliers.Add(id, suppl);
                        return [4 /*yield*/, this.http
                                .get(suppliersUrl + ("/" + id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            suppl.id = data.id;
                            suppl.name = data.name;
                            suppl.paymentMethodId = data.paymentMethodId;
                            suppl.rating = data.rating;
                            suppl.positiveFeedbackPct = data.positiveFeedbackPct;
                            suppl.refsCount = data.refsCount;
                            this.cache.Suppliers.Add(id, suppl);
                        }
                        return [2 /*return*/, suppl];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Suppliers.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_53 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_53)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCurrencyById = function (currencyId) {
        return __awaiter(this, void 0, void 0, function () {
            var curr, id, response, data, err_54;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        curr = new index_1.Currency();
                        id = currencyId.toString();
                        if (!this.isEmpty(this.cache.Currency.Item(id))) return [3 /*break*/, 2];
                        this.cache.Currency.Add(id, curr);
                        return [4 /*yield*/, this.http
                                .get(currenciesUrl + ("/" + id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            curr.id = data.id;
                            curr.shortName = data.shortName;
                            this.cache.Currency.Add(id, curr);
                        }
                        return [2 /*return*/, curr];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Currency.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_54 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_54)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getSuppliers = function (cacheForce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, suppliers_1, err_55;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Suppliers.Count() === 0 || cacheForce === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(suppliersUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        suppliers_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current supplier
                                var supplierItem = new index_1.Supplier(val.id, val.name, val.paymentMethodId, val.rating, val.positiveFeedbackPct, val.refsCount);
                                suppliers_1.push(supplierItem);
                                // add supplier to cashe
                                _this.cache.Suppliers.Add(supplierItem.id.toString(), supplierItem);
                            });
                        }
                        return [2 /*return*/, suppliers_1];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Suppliers.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_55 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_55)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCurrencies = function (cacheForce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, currencies_1, err_56;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Currency.Count() === 0 || cacheForce === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(currenciesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        currencies_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current currency
                                var currencyItem = new index_1.Currency(val.id, val.shortName);
                                currencies_1.push(currencyItem);
                                // add currency to cashe
                                _this.cache.Currency.Add(currencyItem.id.toString(), currencyItem);
                            });
                        }
                        return [2 /*return*/, currencies_1];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Currency.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_56 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_56)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getLocale = function (cacheForce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, languages_1, err_57;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Lang.Count() === 0 || cacheForce === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(LangUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        languages_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current currency
                                var langItem = new index_1.Lang(val.id, val.name);
                                languages_1.push(langItem);
                                // add currency to cashe
                                _this.cache.Currency.Add(langItem.id.toString(), langItem);
                            });
                        }
                        return [2 /*return*/, languages_1];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Lang.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_57 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_57)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getManufacturerById = function (manufacturerId) {
        return __awaiter(this, void 0, void 0, function () {
            var manufacturer, id, response, data, err_58;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        manufacturer = new index_1.Manufacturer();
                        id = manufacturerId.toString();
                        if (!this.isEmpty(this.cache.Manufacturer.Item(id))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http
                                .get(manufacturersUrl + ("/" + id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            manufacturer.id = data.id;
                            manufacturer.name = data.name;
                            this.cache.Manufacturer.Add(id, manufacturer);
                        }
                        return [2 /*return*/, manufacturer];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Manufacturer.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_58 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_58)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getManufacturers = function (cacheForce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, manufacturers_1, err_59;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Manufacturer.Count() === 0 || cacheForce === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(manufacturersUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        manufacturers_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current manufacturer
                                var manufacturerItem = new index_1.Manufacturer(val.id, val.name);
                                manufacturers_1.push(manufacturerItem);
                                // add manufacturer to cashe
                                _this.cache.Manufacturer.Add(manufacturerItem.id.toString(), manufacturerItem);
                            });
                        }
                        return [2 /*return*/, manufacturers_1];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.Manufacturer.Values()];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_59 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_59)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // <editor-fold desc="error handler"
    AppDataRepository.prototype.handleError = function (error) {
        if (this.connServ.counter < 1) {
            this.connServ.checkConnection(error);
        }
    };
    // </editor-fold>
    // <editor-fold desc="url search factory">
    AppDataRepository.prototype.createSearchParams = function (params) {
        var searchParams = new http_1.URLSearchParams();
        params.forEach(function (val) {
            searchParams.set(val.key, val.value);
        });
        return searchParams;
    };
    // </editor-fold>
    // <editor-fold desc="get product prop value from product"
    AppDataRepository.prototype.getPropValuefromProduct = function (product) {
        var _this = this;
        var props = new Array();
        product.props.forEach(function (val) {
            var enumVal = val.prop_Value_Enum !== null
                ? new index_1.PropEnumList(val.prop_Value_Enum.id, _this.getSingleProp(val.prop_Value_Enum.id_Prop), val.prop_Value_Enum.name, val.prop_Value_Enum.list_Index, val.prop_Value_Enum.bit_Index, val.prop_Value_Enum.url)
                : null;
            props.push(new index_1.ProductPropValue(val.id, val.id_Product, _this.getSingleProp(val.id_Prop), val.prop_Value_Str, val.prop_Value_Number, val.prop_Value_Bool, enumVal, val.prop_Value_Long, val.id_Measure_Unit, 
            //
            val.idx, val.out_bmask));
        });
        return props;
    };
    // </editor-fold>
    // <editor-fold desc="get single prop from parent container"
    AppDataRepository.prototype.getSingleProp = function (val) {
        return new index_1.Prop(val.id, val.name, val.prop_type, val.is_Multi_Select, val.url //,
        //val.predestination,
        );
    };
    // </editor-fold>
    // <editor-fold desc="inspect cache predicate"
    AppDataRepository.prototype.isEmpty = function (value) {
        return value === undefined;
    };
    // </editor-fold>
    AppDataRepository.prototype.getCitiesWithStores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cities_1, err_60;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(citiesWithStoresUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cities_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current city
                                var cityItem = new index_1.City(val.id, val.name, val.idRegion);
                                cities_1.push(cityItem);
                            });
                        }
                        return [2 /*return*/, cities_1];
                    case 2:
                        err_60 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_60)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.searchCities = function (srchString) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cities_2, err_61;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(citiesUrl, {
                                search: this.createSearchParams([
                                    { key: "srch", value: srchString }
                                ])
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cities_2 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current city
                                var cityItem = new index_1.City(val.id, val.name, val.idRegion);
                                cities_2.push(cityItem);
                            });
                        }
                        return [2 /*return*/, cities_2];
                    case 2:
                        err_61 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_61)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, cities_3, err_62;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(citiesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        cities_3 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                // create current city
                                var cityItem = new index_1.City(val.id, val.name, val.idRegion);
                                cities_3.push(cityItem);
                            });
                        }
                        return [2 /*return*/, cities_3];
                    case 2:
                        err_62 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_62)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getStores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data_5, stores_1, storeFiltered_1, cityID_1, stores_2, err_63;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        if (!(this.cache.Store.Count() === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.get(storesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data_5 = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        stores_1 = {};
                        if (data_5 != null) {
                            storeFiltered_1 = [];
                            cityID_1 = [];
                            data_5.forEach(function (dataStore) {
                                if (!cityID_1.includes(dataStore.idCity)) {
                                    cityID_1.push(dataStore.idCity);
                                    storeFiltered_1 = data_5.filter(function (value) {
                                        return value.idCity === dataStore.idCity ? dataStore.idCity.toString() : '';
                                    });
                                    var storeArr = [];
                                    for (var i = 0; i < storeFiltered_1.length; i++) {
                                        var store = storeFiltered_1[i];
                                        var position = { lat: store.lat, lng: store.lng };
                                        if (store.openTime !== null && store.closeTime !== null && store.rating === null && store.idFeedbacks === null) {
                                            var s = new index_1.Store(store.id, store.idCity, store.address, position, store.openTime, store.closeTime);
                                            storeArr.push(s);
                                        }
                                        else if (store.openTime !== null && store.closeTime !== null && store.rating !== null && store.idFeedbacks === null) {
                                            var s = new index_1.Store(store.id, store.idCity, store.address, position, store.openTime, store.closeTime, store.rating);
                                            storeArr.push(s);
                                        }
                                        else if (store.openTime !== null && store.closeTime !== null && store.rating !== null && store.idFeedbacks !== null) {
                                            var s = new index_1.Store(store.id, store.idCity, store.address, position, store.openTime, store.closeTime, store.rating, store.idFeedbacks);
                                            storeArr.push(s);
                                        }
                                        else {
                                            var s = new index_1.Store(store.id, store.idCity, store.address, position);
                                            storeArr.push(s);
                                        }
                                    }
                                    stores_1[dataStore.idCity.toString()] = storeArr;
                                    _this.cache.Store.Add(dataStore.idCity.toString(), { id: dataStore.idCity.toString(), stores: storeArr });
                                }
                            });
                        }
                        return [2 /*return*/, stores_1];
                    case 2:
                        stores_2 = {};
                        this.cache.Store.Values().forEach(function (val) {
                            stores_2[val.id.toString()] = val.stores;
                        });
                        return [2 /*return*/, stores_2];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_63 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_63)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getStoreById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, resultStore, idCity, position, err_64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(storePlacesUrl + "/" + id).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        resultStore = void 0;
                        if (data != null) {
                            idCity = data.idCity.toString();
                            position = { lat: data.lat, lng: data.lng };
                            if (data.id === id) {
                                resultStore = new index_1.Store(data.id, idCity, data.address_line, position);
                            }
                        }
                        return [2 /*return*/, resultStore];
                    case 2:
                        err_64 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_64)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getStoreReviewsByStoreId = function (storeId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, storesRevs_1, answers_2, err_65;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(storeReviewsByStoreIdUrl + "/" + storeId).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        storesRevs_1 = new Array();
                        answers_2 = {};
                        if (data != null) {
                            data.forEach(function (val) {
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview && val.idReview !== null) {
                                    if (!answers_2[val.idReview.toString()]) {
                                        answers_2[val.idReview.toString()] = [];
                                    }
                                    answers_2[val.idReview.toString()].push(new index_1.ReviewAnswer(val.id, val.idReview, val.user, new Date(date), val.reviewText));
                                }
                            });
                            data.forEach(function (val) {
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview === null) {
                                    if (answers_2[val.id.toString()]) {
                                        storesRevs_1.push(new index_1.StoreReview(val.id, val.idStore, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, answers_2[val.id.toString()]));
                                    }
                                    else {
                                        storesRevs_1.push(new index_1.StoreReview(val.id, val.idStore, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, []));
                                    }
                                }
                            });
                        }
                        return [2 /*return*/, storesRevs_1];
                    case 2:
                        err_65 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_65)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getStoreReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, reviews, storesRevs_2, answers_3, idStore_1, err_66;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get("" + storeReviewsUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        reviews = {};
                        if (data != null) {
                            storesRevs_2 = new Array();
                            answers_3 = {};
                            idStore_1 = 0;
                            data.forEach(function (val) {
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview && val.idReview !== null) {
                                    if (!answers_3[val.idReview.toString()]) {
                                        answers_3[val.idReview.toString()] = [];
                                    }
                                    answers_3[val.idReview.toString()].push(new index_1.ReviewAnswer(val.id, val.idReview, val.user, new Date(date), val.reviewText));
                                }
                            });
                            data.forEach(function (val) {
                                idStore_1 = val.idStore;
                                var substrings = val.reviewDate.toString().split("T");
                                var substring1 = substrings[0].slice(0, substrings[0].length);
                                var substring2 = substrings[1].slice(0, substrings[1].length - 1);
                                var date = substring1 + " " + substring2;
                                if (val.idReview === null) {
                                    if (answers_3[val.id.toString()]) {
                                        storesRevs_2.push(new index_1.StoreReview(val.id, val.idStore, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, answers_3[val.id.toString()]));
                                    }
                                    else {
                                        storesRevs_2.push(new index_1.StoreReview(val.id, val.idStore, val.user, new Date(date), val.reviewText, val.rating, val.advantages, val.disadvantages, val.upvotes, val.downvotes, []));
                                    }
                                }
                            });
                            reviews[idStore_1.toString()] = storesRevs_2;
                        }
                        return [2 /*return*/, reviews];
                    case 2:
                        err_66 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_66)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPageContent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_67;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(pagesDynamicUrl + "/" + id)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, data["content"]];
                    case 2:
                        err_67 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_67)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, action, err_68;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(actionDynamicUrl + "/" + id)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        action = null;
                        if (data != null) {
                            action = new index_1.Action(data.id, data.name, new Date(data.dateStart), new Date(data.dateEnd), data.img_url, data.priority, data.sketch_content, data.action_content, (data.isActive) ? true : false);
                        }
                        return [2 /*return*/, action];
                    case 2:
                        err_68 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_68)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_6, actions_1, err_69;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(actionDynamicUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data_6 = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        actions_1 = new Array();
                        if (data_6 != null) {
                            data_6.forEach(function (val) {
                                var actionItem = new index_1.Action(val.id, val.name, new Date(val.dateStart), new Date(val.dateEnd), val.img_url, val.priority, val.sketch_content, val.action_content, (data_6.isActive) ? true : false);
                                actions_1.push(actionItem);
                            });
                        }
                        return [2 /*return*/, actions_1];
                    case 2:
                        err_69 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_69)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getActionOffersByActionId = function (idAction) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, aOffers_1, err_70;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(actionOffersUrl, {
                                search: this.createSearchParams([
                                    { key: "idAction", value: idAction.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        aOffers_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return aOffers_1.push(new index_1.ActionOffer(val.id, val.idAction, val.idQuotation, val.idCur));
                            });
                        }
                        return [2 /*return*/, aOffers_1];
                    case 2:
                        err_70 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_70)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getQuotationProductsByQuotationId = function (quotationId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, qProducts_2, err_71;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(quotationProductsUrl, {
                                search: this.createSearchParams([
                                    { key: "idQuotation", value: quotationId.toString() }
                                ])
                            })
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        qProducts_2 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return qProducts_2.push(new index_1.QuotationProduct(val.id, val.idQuotation, val.idProduct, val.price, val.maxDeliveryDays, val.stockQuant, val.stockLow, val.freeShipping, val.actionPrice));
                            });
                        }
                        return [2 /*return*/, qProducts_2];
                    case 2:
                        err_71 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_71)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getNovelty = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, novelty, err_72;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(noveltyByIdDynamicUrl + "/" + id)
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        novelty = void 0;
                        if (data != null) {
                            novelty = new index_1.Novelty(data.id, data.idProduct, data.name, data.img_url, data.priority, data.sketch_content, data.novelty_content);
                        }
                        return [2 /*return*/, novelty];
                    case 2:
                        err_72 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_72)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getNovelties = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, novelties_1, err_73;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(noveltiesDynamicUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        novelties_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                var novelty = new index_1.Novelty(val.id, val.idProduct, val.name, val.img_url, val.priority, val.sketch_content, val.novelty_content);
                                novelties_1.push(novelty);
                            });
                        }
                        return [2 /*return*/, novelties_1];
                    case 2:
                        err_73 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_73)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPollById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, poll, err_74;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(pollsUrl + "/" + id, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        poll = null;
                        if (data != null) {
                            poll = new index_1.Poll(data.id, new Date(data.dateStart), new Date(data.dateEnd), data.urlBanner, data.bannerText);
                        }
                        return [2 /*return*/, poll];
                    case 2:
                        err_74 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_74)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPollQuestionsByPollId = function (pollId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, pollQuestions_1, err_75;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(pollQuestionUrl + "/" + pollId, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        pollQuestions_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return pollQuestions_1.push(new index_1.PollQuestion(val.id, val.idPoll, val.order, val.question, val.answerType));
                            });
                        }
                        return [2 /*return*/, pollQuestions_1.sort(function (a, b) {
                                return b.order - a.order;
                            })];
                    case 2:
                        err_75 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_75)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getNoveltyDetailsByNoveltyId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, noveltyDetails_1, err_76;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get(noveltyDetailsDynamicUrl + "/" + id).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        noveltyDetails_1 = [];
                        if (data != null) {
                            data.forEach(function (val) {
                                var detail = new index_1.NoveltyDetails(val.id, val.idNovelty, val.idProduct);
                                noveltyDetails_1.push(detail);
                            });
                        }
                        return [2 /*return*/, noveltyDetails_1];
                    case 2:
                        err_76 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_76)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getPollAnswersByQuestionId = function (idPollQuestion) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, pollQuestionAnswers_1, err_77;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(pollQuestionAnswerUrl + "/" + idPollQuestion, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        pollQuestionAnswers_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return pollQuestionAnswers_1.push(new index_1.PollQuestionAnswer(val.id, val.idPollQuestions, val.answer));
                            });
                        }
                        return [2 /*return*/, pollQuestionAnswers_1];
                    case 2:
                        err_77 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_77)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.postClientPoolAnswers = function (pollAnswers) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, clientPollLast, err_78;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(pollsUrl /*clientPollAnswersUrl*/, pollAnswers, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        clientPollLast = new index_1.ClientPollAnswer(data.id, data.idClient, data.idPoll, data.idPollQuestions, data.clientAnswer);
                        return [2 /*return*/, clientPollLast];
                    case 2:
                        err_78 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_78)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getClientPoolAnswersForUserByPollId = function (pollId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, clientPollAnswer_1, err_79;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(clientPollAnswersUrl + "/" + pollId, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        clientPollAnswer_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return clientPollAnswer_1.push(new index_1.ClientPollAnswer(val.id, val.idClient, val.idPoll, val.idPollQuestions, val.clientAnswer));
                            });
                        }
                        return [2 /*return*/, clientPollAnswer_1];
                    case 2:
                        err_79 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_79)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.postDeviceData = function (deviceData) {
        return __awaiter(this, void 0, void 0, function () {
            var response, val, err_80;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .post(deviceDataUrl, deviceData, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        val = response.json();
                        if (response.status !== 201 && response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        return [2 /*return*/, val];
                    case 2:
                        err_80 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_80)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, categories_1, err_81;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(categoriesUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        categories_1 = new Array();
                        if (data != null) {
                            data.forEach(function (val) {
                                return categories_1.push(new index_1.Category(val.id, val.name, val.parent_id, val.id_product_cat, val.prefix, val.icon, val.is_show, val.priority_index, val.priority_show));
                            });
                        }
                        return [2 /*return*/, categories_1];
                    case 2:
                        err_81 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_81)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.loadMeasureUnitCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, data, err_82;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http
                                .get(measureUnitUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            data.forEach(function (val) {
                                var mUnit = new index_1.MeasureUnit();
                                mUnit.id = val.id;
                                mUnit.name = val.name;
                                if (_this.isEmpty(_this.cache.MeasureUnit.Item(val.id.toString()))) {
                                    _this.cache.MeasureUnit.Add(val.id.toString(), mUnit);
                                }
                                ;
                            });
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_82 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_82)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getMeasureUnitById = function (unitId) {
        return __awaiter(this, void 0, void 0, function () {
            var munit, id, response, data, err_83;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        munit = new index_1.MeasureUnit();
                        id = unitId.toString();
                        if (!this.isEmpty(this.cache.MeasureUnit.Item(id))) return [3 /*break*/, 2];
                        this.cache.MeasureUnit.Add(id, munit);
                        return [4 /*yield*/, this.http
                                .get(measureUnitUrl + ("/" + id))
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            munit.id = data.id;
                            munit.name = data.name;
                            this.cache.MeasureUnit.Add(id, munit);
                        }
                        return [2 /*return*/, munit];
                    case 2: 
                    // </editor-fold>
                    return [2 /*return*/, this.cache.MeasureUnit.Item(id)];
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        err_83 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_83)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductDescription = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, response, data, err_84;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        _id = id.toString();
                        return [4 /*yield*/, this.http.get(productDescriptionsUrl + ("/" + _id)).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error("server side status error");
                        }
                        if (data != null) {
                            return [2 /*return*/, data.description];
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        err_84 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_84)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppDataRepository.prototype.getProductImages = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res_1, data, _id, response, err_85;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        res_1 = [];
                        data = null;
                        _id = id.toString();
                        return [4 /*yield*/, this.http.get(productImagesUrl + ("/" + _id)).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            data = response.json();
                            if (response.status !== 200) {
                                throw new Error("server side status error");
                            }
                            if (data != null) {
                                data.images.forEach(function (x) {
                                    res_1.push(x);
                                });
                            }
                        }
                        return [2 /*return*/, res_1];
                    case 2:
                        err_85 = _a.sent();
                        return [4 /*yield*/, this.handleError(err_85)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AppDataRepository;
}(index_2.AbstractDataRepository));
AppDataRepository = __decorate([
    core_1.Injectable()
], AppDataRepository);
exports.AppDataRepository = AppDataRepository;
