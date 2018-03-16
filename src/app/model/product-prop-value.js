"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var measure_unit_1 = require("./measure-unit");
var app_core_1 = require("../core/app-core");
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var ProductPropValue = (function () {
    function ProductPropValue(id, id_Product, id_Prop, prop_Value_Str, prop_Value_Number, prop_Value_Bool, prop_Value_Enum, prop_Value_Long, id_Measure_Unit, idx, out_bmask) {
        this.id = id;
        this.id_Product = id_Product;
        this.id_Prop = id_Prop;
        this.prop_Value_Str = prop_Value_Str;
        this.prop_Value_Number = prop_Value_Number;
        this.prop_Value_Bool = prop_Value_Bool;
        this.prop_Value_Enum = prop_Value_Enum;
        this.prop_Value_Long = prop_Value_Long;
        this.id_Measure_Unit = id_Measure_Unit;
        this.idx = idx;
        this.out_bmask = out_bmask;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    Object.defineProperty(ProductPropValue.prototype, "value", {
        get: function () {
            if (this.id_Prop.prop_type == 1) {
                return this.prop_Value_Str;
            }
            ;
            if (this.id_Prop.prop_type == 2) {
                return this.prop_Value_Number;
            }
            ;
            if (this.id_Prop.prop_type == 3) {
                return this.prop_Value_Bool;
            }
            ;
            if (this.id_Prop.prop_type == 4) {
                return (this.prop_Value_Enum) ? this.prop_Value_Enum.name : null;
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    return ProductPropValue;
}());
ProductPropValue = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: measure_unit_1.MeasureUnit }, action: 'getMeasureUnitById', params: ['id_Measure_Unit'] }
    ])
], ProductPropValue);
exports.ProductPropValue = ProductPropValue;
