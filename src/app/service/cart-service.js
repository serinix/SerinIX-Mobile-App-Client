"use strict";
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
var client_order_products_1 = require("../model/client-order-products");
var person_1 = require("../model/person");
var app_constants_1 = require("../app-constants");
var LoDeliveryOption = (function () {
    function LoDeliveryOption() {
    }
    ;
    return LoDeliveryOption;
}());
exports.LoDeliveryOption = LoDeliveryOption;
var CartService = (function () {
    function CartService(userService, repo, evServ, app, locRepo, alertCtrl) {
        var _this = this;
        this.userService = userService;
        this.repo = repo;
        this.evServ = evServ;
        this.app = app;
        this.locRepo = locRepo;
        this.alertCtrl = alertCtrl;
        this.lastItemCreditCalc = null;
        this.cKey = 'cartItems';
        this.order = null;
        this.orderProducts = [];
        this.loDeliveryOptions = [];
        this.loResultDeliveryOptions = [];
        //public pmtMethod: EnumPaymentMethod = null;
        this.loan = null;
        this.bonus = null;
        this._payByPromoBonus = false;
        this.promocodeInvalid = false;
        this.cartValidationNeeded = false;
        this.person = new person_1.PersonInfo();
        this.localization = {};
        this.evServ.events['logonEvent'].subscribe(function () {
            _this.initCart().then(function () {
                /*
                
                            if ((this.cartValidationNeeded) && (this.cartErrors)) {
                              this.navCtrl = app.getActiveNav();
                              console.log(this.navCtrl);
                              const startIndex = this.navCtrl.getActive().index - 1;
                              this.navCtrl.remove(startIndex, 2);
                              this.navCtrl.push('CartPage');
                            };
                            this.cartValidationNeeded = false;
                */
            });
        });
        this.evServ.events['logOffEvent'].subscribe(function () {
            _this.orderProducts = [];
            _this.initCart();
        });
        this.evServ.events['cartUpdateEvent'].subscribe(function () {
            _this.calculateCart();
        });
        repo.loadPmtMethodsCache();
        repo.loadRegionsCache();
        repo.loadStorePlaceCache();
        repo.loadSuppliersCache();
        //repo.loadCityCache();
        repo.loadMeasureUnitCache();
        repo.getCountries(); //<--- this loads countries cache
        repo.getManufacturers(true); //<--- this loads manufacturers cache
        this.initCart();
    }
    CartService.prototype.calculateCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var calcRes, _i, calcRes_1, i, _found, _prod, _a, _b, _p;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.repo.calculateCart(this.promoCode, this.bonus, this.payByPromoBonus, ((this.loan) && (this.loan.creditProduct) && (this.order.idPaymentMethod === 3)) ? this.loan.creditProduct.sId : null, this.orderProducts)];
                    case 1:
                        calcRes = _c.sent();
                        for (_i = 0, calcRes_1 = calcRes; _i < calcRes_1.length; _i++) {
                            i = calcRes_1[_i];
                            _found = false;
                            _prod = null;
                            for (_a = 0, _b = this.orderProducts; _a < _b.length; _a++) {
                                _p = _b[_a];
                                if (_p.id === i.clOrderSpecProdId) {
                                    _prod = _p;
                                    _found = true;
                                    break;
                                }
                            }
                            if (_found) {
                                _prod.payBonusCnt = i.bonusDisc;
                                _prod.payPromoCodeDiscount = i.promoCodeDisc;
                                _prod.payPromoBonusCnt = i.promoBonusDisc;
                                _prod.earnedBonusCnt = i.earnedBonus;
                                //        await this.repo.saveCartProduct(_prod);
                            }
                        }
                        this.calcLoan();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.emptyCart = function () {
        this.lastItemCreditCalc = null;
        this.order = null;
        this.orderProducts = [];
        this.loDeliveryOptions = [];
        this.loResultDeliveryOptions = [];
        this.loan = null;
        this.bonus = null;
        this._payByPromoBonus = false;
        this._promoCode = null;
        this.promocodeInvalid = false;
        this.availBonus = null;
        this.availPromoBonus = null;
        this.cartValidationNeeded = false;
    };
    Object.defineProperty(CartService.prototype, "promoCode", {
        get: function () {
            return this._promoCode;
        },
        set: function (val) {
            this._promoCode = val;
            if (!val)
                this.evServ.events['cartUpdateEvent'].emit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "payByPromoBonus", {
        get: function () {
            return this._payByPromoBonus;
        },
        set: function (val) {
            this._payByPromoBonus = val;
            this.evServ.events['cartUpdateEvent'].emit();
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.calcLoan = function () {
        if ((this.order.idPaymentMethod === 3) && (this.loan)) {
            var cObj = this.loan;
            cObj.clMonthAmt = this.calculateLoan(this.cartGrandTotal, cObj.clMonths, cObj.creditProduct.monthCommissionPct, cObj.creditProduct.sGracePeriod);
        }
    };
    Object.defineProperty(CartService.prototype, "itemsBonusDisc", {
        get: function () {
            var _res = 0;
            this.orderProducts.forEach(function (i) {
                _res += i.payBonusCnt * i.qty;
            });
            if (this.order)
                this.order.bonusTotal = _res;
            return _res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "promoCodeDiscount", {
        get: function () {
            var _res = 0;
            this.orderProducts.forEach(function (i) {
                _res += i.payPromoCodeDiscount * i.qty;
            });
            if (this.order)
                this.order.promoCodeDiscTotal = _res;
            return _res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "itemsPromoBonusDisc", {
        get: function () {
            var _res = 0;
            this.orderProducts.forEach(function (i) {
                _res += i.payPromoBonusCnt * i.qty;
            });
            if (this.order)
                this.order.promoBonusTotal = _res;
            return _res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "shippingCost", {
        get: function () {
            var res = 0;
            this.loResultDeliveryOptions.forEach(function (i) {
                res += i.deliveryCost;
            });
            if (this.order)
                this.order.shippingTotal = res;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "itemsTotal", {
        get: function () {
            var _s = 0;
            if (this.orderProducts) {
                this.orderProducts.forEach(function (item) {
                    _s += item.price * item.qty;
                });
            }
            if (this.order)
                this.order.itemsTotal = _s;
            return _s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "cartGrandTotal", {
        get: function () {
            return +(this.orderTotal - this.promoCodeDiscount
                - this.itemsBonusDisc - this.itemsPromoBonusDisc).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.initBonusData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cl, bonusData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.profile.client_p];
                    case 1:
                        cl = _a.sent();
                        return [4 /*yield*/, this.repo.getBonusesInfo(11049778713 /*cl.id*/)];
                    case 2:
                        bonusData = _a.sent();
                        this.availBonus = (bonusData.bonusLimit) ? bonusData.bonusLimit : 0;
                        this.availPromoBonus = (bonusData.actionBonusLimit) ? bonusData.actionBonusLimit : 0;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CartService.prototype, "mostExpensiveItem", {
        get: function () {
            if (this.orderProducts.length === 0)
                return null;
            var item = this.orderProducts[0];
            this.orderProducts.forEach(function (i) {
                if (i.price > item.price)
                    item = i;
            });
            return item;
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.calculateLoan = function (amount, months, monthsCommissPct, grace) {
        var _gr = (grace) ? grace : 0;
        var _am = (amount) ? amount : 0;
        var _com = (monthsCommissPct) ? monthsCommissPct : 0;
        return Math.ceil((_am + (_am * _com / 100 * (months - _gr))) / months);
    };
    CartService.prototype.validateLoan = function (loanAmt) {
        var maxLoan = this.localization['MaxLoan'];
        var minLoan = this.localization['MinLoan'];
        var errs = [];
        var mes = (loanAmt > app_constants_1.AppConstants.MAX_LOAN_AMT) ? maxLoan : null;
        if (mes)
            errs.push(mes);
        mes = (loanAmt < app_constants_1.AppConstants.MIN_LOAN_AMT) ? minLoan : null;
        if (mes)
            errs.push(mes);
        return { isValid: !(errs.length > 0), validationErrors: errs };
    };
    CartService.prototype.initCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, op, _i, _c, i, stor;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.userService.isAuth) return [3 /*break*/, 9];
                        _a = this;
                        return [4 /*yield*/, this.repo.getClientDraftOrder()];
                    case 1:
                        _a.order = _d.sent();
                        if (!this.order.idPerson) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this.repo.getPersonById(this.order.idPerson)];
                    case 2:
                        _b.person = _d.sent();
                        _d.label = 3;
                    case 3: return [4 /*yield*/, this.repo.getCartProducts()];
                    case 4:
                        op = _d.sent();
                        _i = 0, _c = this.orderProducts;
                        _d.label = 5;
                    case 5:
                        if (!(_i < _c.length)) return [3 /*break*/, 8];
                        i = _c[_i];
                        return [4 /*yield*/, this.repo.saveCartProduct(i)];
                    case 6:
                        _d.sent();
                        op.push(i);
                        _d.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8:
                        //переключаем корзину на результирующую
                        this.orderProducts = op;
                        // после переноса содержимого локальной корзины в бекенд - затираем локальную корзину
                        localStorage.setItem(this.cKey, null);
                        return [3 /*break*/, 10];
                    case 9:
                        this.order = null;
                        stor = JSON.parse(localStorage.getItem(this.cKey));
                        if (stor) {
                            stor.forEach(function (val) {
                                var spec = new client_order_products_1.ClientOrderProducts();
                                spec.idQuotationProduct = val.idQuotationProduct;
                                spec.price = val.price;
                                spec.qty = val.qty;
                                spec.idStorePlace = val.storePlace;
                                _this.orderProducts.push(spec);
                            });
                        }
                        _d.label = 10;
                    case 10:
                        this.localeUserService();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CartService.prototype, "cartItemsCount", {
        get: function () {
            var _q = 0;
            if (this.orderProducts)
                this.orderProducts.forEach(function (item) {
                    _q += item.qty;
                });
            return _q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "orderTotal", {
        get: function () {
            return this.itemsTotal + this.shippingCost;
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.addItem = function (item, qty, price, storePlace, page) {
        return __awaiter(this, void 0, void 0, function () {
            var _f, foundQuot, orderItem, message, toast, message, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(item && qty && price)) return [3 /*break*/, 5];
                        _f = this.orderProducts.filter(function (i) { return (i.idQuotationProduct === item.id); });
                        foundQuot = (_f) ? _f[0] : null;
                        if (!foundQuot) return [3 /*break*/, 1];
                        foundQuot.qty += qty;
                        foundQuot.price = price;
                        this.updateItem(foundQuot);
                        return [3 /*break*/, 4];
                    case 1:
                        orderItem = new client_order_products_1.ClientOrderProducts();
                        orderItem.idQuotationProduct = item.id;
                        orderItem.price = price;
                        orderItem.qty = qty;
                        orderItem.idStorePlace = (storePlace ? storePlace.id : null);
                        if (!this.userService.isAuth) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.repo.insertCartProduct(orderItem)];
                    case 2:
                        orderItem = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.orderProducts.push(orderItem);
                        _a.label = 4;
                    case 4:
                        this.saveToLocalStorage();
                        this.lastItemCreditCalc = null;
                        this.evServ.events['cartUpdateEvent'].emit();
                        message = this.localization['AddedToCart'];
                        toast = page.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            position: 'bottom',
                            cssClass: 'toast-message'
                        });
                        toast.onDidDismiss(function () {
                        });
                        toast.present();
                        return [3 /*break*/, 6];
                    case 5:
                        message = this.localization['SomethingWrong'];
                        toast = page.toastCtrl.create({
                            message: message,
                            duration: 2500,
                            position: 'bottom',
                            cssClass: 'toast-message'
                        });
                        toast.onDidDismiss(function () {
                        });
                        toast.present();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.saveToLocalStorage = function () {
        if (!this.userService.isAuth) {
            var saveArr_1 = new Array();
            this.orderProducts.forEach(function (i) {
                saveArr_1.push(i.dto);
            });
            localStorage.setItem(this.cKey, JSON.stringify(saveArr_1));
        }
    };
    CartService.prototype.gotoCartPageIfDataChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    title: this.localization['Information'],
                    message: this.localization['Message'],
                    buttons: [
                        {
                            text: this.localization['BtnText'],
                            handler: function () {
                                _this.emptyCart();
                                _this.initCart().then(function () {
                                    _this.app.getActiveNav().setRoot('CartPage');
                                });
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    CartService.prototype.updateItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userService.isAuth) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.repo.saveCartProduct(item)];
                    case 1:
                        item = _a.sent();
                        if (!(item)) {
                            this.gotoCartPageIfDataChanged();
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.removeItem = function (itemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userService.isAuth) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.repo.deleteCartProduct(this.orderProducts[itemIndex])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.orderProducts.splice(itemIndex, 1);
                        this.saveToLocalStorage();
                        this.lastItemCreditCalc = null;
                        this.evServ.events['cartUpdateEvent'].emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CartService.prototype, "cartErrors", {
        get: function () {
            var arr = new Array();
            for (var _i = 0, _a = this.orderProducts; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.errorMessage) {
                    arr.push({ idQuotProduct: i.idQuotationProduct, errorMessage: i.errorMessage });
                }
            }
            return (arr.length === 0) ? null : arr;
        },
        enumerable: true,
        configurable: true
    });
    // making localization for user service
    CartService.prototype.localeUserService = function () {
        var _this = this;
        this.locRepo.getLocalization({ componentName: this.constructor.name, lang: (this.userService.lang ? this.userService.lang : 1) }).then(function (loc) {
            if (loc && (Object.keys(loc).length !== 0)) {
                _this.localization = loc;
            }
        });
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable()
], CartService);
exports.CartService = CartService;
