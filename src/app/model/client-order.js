"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_order_products_1 = require("./client-order-products");
var app_core_1 = require("../core/app-core");
var client_address_1 = require("./client-address");
var abstract_data_repository_1 = require("../service/repository/abstract/abstract-data-repository");
var enum_payment_method_1 = require("./enum-payment-method");
var person_1 = require("./person");
var lo_entity_1 = require("./lo-entity");
var ClientOrder = (function () {
    function ClientOrder(id, orderDate, idCur, idClient, total, idPaymentMethod, idPaymentStatus, idStatus, orderProducts, loIdEntity, loIdClientAddress, itemsTotal, shippingTotal, bonusTotal, promoBonusTotal, bonusEarned, promoCodeDiscTotal, idPerson) {
        if (total === void 0) { total = 0; }
        this.id = id;
        this.orderDate = orderDate;
        this.idCur = idCur;
        this.idClient = idClient;
        this.total = total;
        this.idPaymentMethod = idPaymentMethod;
        this.idPaymentStatus = idPaymentStatus;
        this.idStatus = idStatus;
        this.orderProducts = orderProducts;
        this.loIdEntity = loIdEntity;
        this.loIdClientAddress = loIdClientAddress;
        this.itemsTotal = itemsTotal;
        this.shippingTotal = shippingTotal;
        this.bonusTotal = bonusTotal;
        this.promoBonusTotal = promoBonusTotal;
        this.bonusEarned = bonusEarned;
        this.promoCodeDiscTotal = promoCodeDiscTotal;
        this.idPerson = idPerson;
        this._repo = app_core_1.RefInjector.pull(abstract_data_repository_1.AbstractDataRepository);
    }
    Object.defineProperty(ClientOrder.prototype, "dto", {
        get: function () {
            return { id: this.id, orderDate: this.orderDate, idCur: this.idCur, idClient: this.idClient, total: this.total,
                idPaymentMethod: this.idPaymentMethod, idPaymentStatus: this.idPaymentStatus, idStatus: this.idStatus,
                loIdEntity: this.loIdEntity, loIdClientAddress: this.loIdClientAddress,
                itemsTotal: this.itemsTotal, shippingTotal: this.shippingTotal,
                bonusTotal: this.bonusTotal, promoBonusTotal: this.promoBonusTotal, bonusEarned: this.bonusEarned,
                promoCodeDiscTotal: this.promoCodeDiscTotal, idPerson: this.idPerson };
        },
        enumerable: true,
        configurable: true
    });
    return ClientOrder;
}());
ClientOrder = __decorate([
    app_core_1.LazyLoad([
        { options: { constructor: client_address_1.ClientAddress }, action: 'getClientAddressById', params: ['loIdClientAddress'] },
        { options: { constructor: client_order_products_1.ClientOrderProducts }, action: 'getClientOrderProductsByOrderId', params: ['id'] },
        { options: { constructor: enum_payment_method_1.EnumPaymentMethod }, action: 'getPmtMethodById', params: ['idPaymentMethod'] },
        { options: { constructor: person_1.PersonInfo }, action: 'getPersonById', params: ['idPerson'] },
        { options: { constructor: lo_entity_1.LoEntity }, action: 'getLoEntitiyById', params: ['loIdEntity'] }
    ])
], ClientOrder);
exports.ClientOrder = ClientOrder;
