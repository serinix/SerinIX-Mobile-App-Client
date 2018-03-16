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
var index_1 = require("../../index");
var index_2 = require("../../../model/index");
var app_constants_1 = require("../../../app-constants");
var app_core_1 = require("../../../core/app-core");
// server url
var loginUrl = app_constants_1.AppConstants.BASE_URL + "/api/account/login";
var accountUrl = app_constants_1.AppConstants.BASE_URL + "/api/account";
var verifyAccountUrl = app_constants_1.AppConstants.BASE_URL + "/api/account/verify";
var changePasswdAccountUrl = app_constants_1.AppConstants.BASE_URL + "/api/account/changePass";
// mock url
// const loginUrl = '/api/mtoken';
// const accountUrl = '/api/musers';
var AccountRepository = (function (_super) {
    __extends(AccountRepository, _super);
    function AccountRepository(http, connServ) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.connServ = connServ;
        return _this;
    }
    AccountRepository.prototype.logIn = function (phone, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, currentUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.post(loginUrl, { phone: phone, password: password }).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data) {
                            throw new Error("\u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
                        }
                        currentUser = new index_2.User(data.user.name, data.user.email, null, data.user.appKey, data.user.userSetting, null, data.user.phone, data.user.fname, data.user.lname);
                        return [2 /*return*/, new index_2.LoginTemplate(data.token, currentUser)];
                    case 2:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_1)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountRepository.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, userInfo, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.post(accountUrl, {
                                // name:user.name,
                                phone: user.phone,
                                email: user.email,
                                fname: user.fname,
                                lname: user.lname,
                                userSetting: user.userSetting
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 201 && response.status !== 200) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data) {
                            throw new Error("\u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
                        }
                        userInfo = { message: data.message, status: data.status, user: (response.status === 201)
                                ? data.content : null };
                        return [2 /*return*/, userInfo];
                    case 2:
                        err_2 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_2)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountRepository.prototype.edit = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.put(accountUrl, {
                                phone: user.phone,
                                email: user.email,
                                fname: user.fname,
                                lname: user.lname,
                                userSetting: user.userSetting
                            }, app_core_1.RequestFactory.makeAuthHeader()).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status === 401) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data && response.status !== 200) {
                            throw new Error("\u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445");
                        }
                        return [2 /*return*/, { message: data.message, status: data.status, user: (data.status === 2)
                                    ? data.content : null }];
                    case 2:
                        err_3 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_3)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountRepository.prototype.getUserById = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, currentUser, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.get("" + accountUrl, app_core_1.RequestFactory.makeAuthHeader())
                                .toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status === 401) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data && response.status !== 200) {
                            throw new Error("\u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
                        }
                        currentUser = new index_2.User(data.name, data.email, null, data.appKey, data.userSetting, null, data.phone, data.fname, data.lname);
                        return [2 /*return*/, currentUser];
                    case 2:
                        err_4 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_4)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountRepository.prototype.verifyAccount = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, verifyResult, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.post(verifyAccountUrl, { phone: phone }).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status !== 200) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data) {
                            throw new Error('ошибка проверки аккаунта');
                        }
                        verifyResult = { message: data.message, status: data.status };
                        return [2 /*return*/, verifyResult];
                    case 2:
                        err_5 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_5)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AccountRepository.prototype.changePassword = function (passwordModel) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.http.post("" + changePasswdAccountUrl, {
                                password: passwordModel.password,
                                newPassword: passwordModel.newPassword,
                                confirmPassword: passwordModel.confirmPassword,
                            }, app_core_1.RequestFactory.makeAuthHeader()).toPromise()];
                    case 1:
                        response = _a.sent();
                        data = response.json();
                        if (response.status === 401) {
                            throw new Error(response.status + " " + response.statusText);
                        }
                        if (!data && response.status !== 200) {
                            throw new Error("\u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");
                        }
                        return [2 /*return*/, data];
                    case 2:
                        err_6 = _a.sent();
                        return [4 /*yield*/, this.errorHandler(err_6)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // public isNotSignOutSelf(): boolean {
    //   return !!(localStorage.getItem('id'));
    // }
    // <editor-fold desc="error handler">
    AccountRepository.prototype.errorHandler = function (err) {
        if (this.connServ.counter < 1) {
            this.connServ.checkConnection(err);
        }
        //return Promise.reject((err.message) ? err : new Error(`${err.status} ${err.statusText }`));
    };
    return AccountRepository;
}(index_1.AbstractAccountRepository));
AccountRepository = __decorate([
    core_1.Injectable()
], AccountRepository);
exports.AccountRepository = AccountRepository;
