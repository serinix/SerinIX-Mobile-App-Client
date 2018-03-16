"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_core_1 = require("../../app/core/app-core");
var index_1 = require("../../app/service/index");
var ComponentBase = (function () {
    // <editor-fold desc='.ctor'>
    function ComponentBase(makeLocale) {
        if (makeLocale === void 0) { makeLocale = true; }
        this.makeLocale = makeLocale;
        // array locale template
        this._localeList = {};
        /*// current LocaleID
        private _localeID: number = -1;*/
        // info about current subscribers
        this.listenersObj = [];
        this._componentName = this.constructor.name; // get component type
        this.userService = app_core_1.RefInjector.pull(index_1.UserService); // service for all user settings
        this.evServ = app_core_1.RefInjector.pull(index_1.EventService); // service for all application events
        this.locRepos = app_core_1.RefInjector.pull(index_1.AbstractLocalizationRepository); // localization repository
        if (this.makeLocale)
            this.toEventSubscribe();
    }
    Object.defineProperty(ComponentBase.prototype, "locale", {
        // property logic for array locale template
        get: function () {
            return this._localeList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentBase.prototype, "localeID", {
        get: function () {
            return +this.userService.lang;
        },
        set: function (id) {
            this.userService.profile.userSetting['lang'] = id.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentBase.prototype, "currencyID", {
        get: function () {
            return +this.userService.currency;
        },
        enumerable: true,
        configurable: true
    });
    // </editor-fold>
    ComponentBase.prototype.ngOnDestroy = function () {
        for (var i = 0, max = this.listenersObj.length; i < max; i++) {
            this.listenersObj[i].unsubscribe();
        }
    };
    ComponentBase.prototype.ngOnInit = function () {
        if (this.makeLocale)
            this.initLocalization();
    };
    // get localization data from remote service
    ComponentBase.prototype.setLocaleFromSource = function (data) {
        var _this = this;
        if (this.makeLocale) {
            this.locRepos.getLocalization(data).then(function (loc) {
                if (loc && (Object.keys(loc).length !== 0)) {
                    _this._localeList = loc;
                }
            });
        }
        this.localeID = data.lang;
    };
    // filling in (array locale template)
    ComponentBase.prototype.addTolocale = function (localeName, localeAlias) {
        this._localeList[localeAlias] = localeName;
    };
    // add subscribers
    ComponentBase.prototype.toEventSubscribe = function () {
        var _this = this;
        var subEv = this.evServ.events['localeChangeEvent']
            .subscribe(function (data) {
            _this.setLocaleFromSource({ componentName: _this._componentName, lang: data });
        });
        this.listenersObj.push(subEv);
    };
    ComponentBase.prototype.initLocalization = function () {
        this.setLocaleFromSource({ componentName: this._componentName, lang: this.userService.lang });
    };
    return ComponentBase;
}());
exports.ComponentBase = ComponentBase;
