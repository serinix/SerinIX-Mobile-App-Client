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
var index_1 = require("../../model/index");
var app_constants_1 = require("../../app-constants");
var UserService = (function () {
    // <editor-fold desc='.ctor'>
    function UserService(_account, evServ, alertCtrl, toastCtrl, locRepo) {
        this._account = _account;
        this.evServ = evServ;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.locRepo = locRepo;
        this.localization = {};
        this.errorMessages = {
            'login': '',
            'shortLogin': '',
            'register': '',
            'edit': ''
        };
        this.callDefaultUser();
    }
    Object.defineProperty(UserService.prototype, "profile", {
        // </editor-fold>
        // <editor-fold desc='getters'>
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this._token || localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "name", {
        get: function () {
            return this.user.fname;
        },
        // </editor-fold>
        // <editor-fold desc='setters'>
        set: function (name) {
            this.user.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "lang", {
        // public get uid(): number {
        //   return this.user.id;
        // }
        get: function () {
            //return 3;
            return +this.user.userSetting['lang'];
        },
        set: function (lang) {
            this.user.userSetting['lang'] = lang.toString();
            localStorage.setItem('lang', lang.toString());
            //this.trySendSettings();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "currency", {
        get: function () {
            return +this.user.userSetting['currency'];
        },
        set: function (currency) {
            this.user.userSetting['currency'] = currency.toString();
            localStorage.setItem('currency', currency.toString());
            //this.trySendSettings();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "email", {
        get: function () {
            return this.user.email;
        },
        // public set uid(id: number) {
        //   this.user.id = id;
        // }
        set: function (email) {
            this.user.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "isAuth", {
        get: function () {
            return this._auth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "appKey", {
        get: function () {
            return this.user.appKey;
        },
        enumerable: true,
        configurable: true
    });
    // <editor-fold desc='favorite stores'>
    UserService.prototype.addFavoriteStoresId = function (id) {
        var count = 0;
        for (var _i = 0, _a = this.user.favoriteStoresId; _i < _a.length; _i++) {
            var favSoreID = _a[_i];
            if (id === favSoreID) {
                count++;
                var message = this.localization['AlertMessage'];
                var title = this.localization['AlertTitle'];
                var alert_1 = this.alertCtrl.create({
                    title: title,
                    message: message,
                    buttons: [
                        {
                            text: 'OK'
                        }
                    ]
                });
                alert_1.present().catch(function (err) { return console.log("Alert error: " + err); });
            }
        }
        if (count === 0) {
            this.user.favoriteStoresId.push(id);
            var message = this.localization['ToastMessage'];
            var toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
                position: 'bottom',
                cssClass: 'toast-message'
            });
            toast.onDidDismiss(function () {
            });
            toast.present().catch(function (err) { return console.log("Toast error: " + err); });
        }
        //this.trySendSettings();
    };
    UserService.prototype.removeFavoriteStoresId = function (id) {
        var indx = this.user.favoriteStoresId.indexOf(id);
        this.user.favoriteStoresId.splice(indx, 1);
        //this.trySendSettings();
    };
    // </editor-fold>
    // </editor-fold>
    // <editor-fold desc='methods'>
    UserService.prototype.clear = function () {
        //this.removeDataFromStorage(['id','token','appKey']);
    };
    UserService.prototype.logOut = function () {
        // clear storage data (localeStorage and other stores)
        this.clear();
        this.callDefaultUser();
        this.evServ.events['logOffEvent'].emit();
    };
    // method for control signOut behavior
    // public isNotSignOutSelf(): boolean {
    //   return this._account.isNotSignOutSelf();
    // }
    // get user fast by token and uid
    UserService.prototype.shortLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        // const id: string = localStorage.getItem('id');
                        // if (!id)
                        // return false;
                        _a = this;
                        return [4 /*yield*/, this._account.getUserById(this.token)];
                    case 1:
                        // const id: string = localStorage.getItem('id');
                        // if (!id)
                        // return false;
                        _a.user = _b.sent();
                        this.changeAuthStatus(['appKey']);
                        this.errorClear('shortLogin');
                        this.evServ.events['localeChangeEvent'].emit(this.lang);
                        return [2 /*return*/, true];
                    case 2:
                        err_1 = _b.sent();
                        this.errorMessages['shortLogin'] = err_1.message;
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var returnUser, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._account.register(user)];
                    case 1:
                        returnUser = _a.sent();
                        this.errorClear('register');
                        this.localeUserService();
                        return [2 /*return*/, returnUser];
                    case 2:
                        err_2 = _a.sent();
                        this.errorMessages['register'] = err_2.message;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.edit = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!this._auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._account.edit(user)];
                    case 1:
                        res = _a.sent();
                        if (res.status === 2 && res.user) {
                            this.user.name = res.user.name;
                            this.user.email = res.user.email;
                            this.user.userSetting = res.user.userSetting;
                            this.user.phone = res.user.phone;
                            this.user.fname = res.user.fname;
                            this.user.lname = res.user.lname;
                            this.changeAuthStatus(['appKey']);
                            this.errorClear('edit');
                            this.localeUserService();
                        }
                        return [2 /*return*/, res];
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.errorMessages['edit'] = err_3.message;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.changePassword = function (pswdModel) {
        return __awaiter(this, void 0, void 0, function () {
            var returnUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._account.changePassword(pswdModel)];
                    case 1:
                        returnUser = _a.sent();
                        return [2 /*return*/, returnUser];
                }
            });
        });
    };
    UserService.prototype.login = function (phone, password) {
        return __awaiter(this, void 0, void 0, function () {
            var loginModel, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._account.logIn(phone, password)];
                    case 1:
                        loginModel = _a.sent();
                        this.user = loginModel.user;
                        this._token = loginModel.token;
                        localStorage.setItem('token', loginModel.token);
                        this.changeAuthStatus(['appKey']);
                        //this.changeAuthStatus(['id','appKey']);
                        this.errorClear('login');
                        this.localeUserService();
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        this.errorMessages['login'] = err_4.message;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.verifyAccount = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._account.verifyAccount(phone)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.removeToken = function () {
        localStorage.removeItem('token');
    };
    // send fastswiching data
    // private trySendSettings(): void {
    //   if (this._auth) {
    //     this._account.edit(this.user, this.token)
    //       .then(user => {},error => this.errorMessages['edit'] = error.message);
    //   }
    // }
    UserService.prototype.firstOrDefaults = function (props, defVals) {
        if (props.length === 0) {
            return;
        }
        for (var i = 0; i < props.length; i++) {
            var lStoreValue = localStorage.getItem(props[i]);
            if (!lStoreValue) {
                lStoreValue = defVals[i];
                localStorage.setItem(props[i], lStoreValue);
            }
            this.user.userSetting[props[i]] = lStoreValue;
        }
    };
    // create default user
    UserService.prototype.callDefaultUser = function () {
        this.user = new index_1.User();
        this._auth = false;
        var lang = app_constants_1.AppConstants.LOCALE_DEFAULT_VALUE.toString();
        var currency = app_constants_1.AppConstants.CURRENCY_DEFAULT_VALUE.toString();
        this.firstOrDefaults(['lang', 'currency'], [lang, currency]);
        this.localeUserService();
    };
    // add data to storage and check user status
    UserService.prototype.addImpotantDataToStorage = function (userFields) {
        localStorage.setItem('currency', this.user.userSetting['currency']);
        localStorage.setItem('lang', this.user.userSetting['lang']);
        for (var i = 0; i < userFields.length; i++) {
            localStorage.setItem(userFields[i], this.user[userFields[i]]);
        }
    };
    // change status method facade
    UserService.prototype.changeAuthStatus = function (userFields) {
        this.addImpotantDataToStorage(userFields);
        var cAuth = this._auth;
        this._auth = true;
        if (!cAuth)
            this.evServ.events['logonEvent'].emit();
    };
    // remove data from storage and check user status
    UserService.prototype.removeDataFromStorage = function (fields) {
        for (var i = 0; i < fields.length; i++) {
            localStorage.removeItem(fields[i]);
        }
    };
    // </editor-fold>
    // error clear
    UserService.prototype.errorClear = function (actionName) {
        this.errorMessages[actionName] = '';
    };
    // </editor-fold>
    // making localization for user service
    UserService.prototype.localeUserService = function () {
        var _this = this;
        this.locRepo.getLocalization({ componentName: this.constructor.name, lang: (this.lang ? this.lang : 1) }).then(function (loc) {
            if (loc && (Object.keys(loc).length !== 0)) {
                _this.localization = loc;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
