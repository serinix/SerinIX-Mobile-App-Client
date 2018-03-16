"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientBonus = (function () {
    function ClientBonus(id, clientId, bonus, dueDate) {
        this.id = id;
        this.clientId = clientId;
        this.bonus = bonus;
        this.dueDate = dueDate;
    }
    return ClientBonus;
}());
exports.ClientBonus = ClientBonus;
