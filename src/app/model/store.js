"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Store = (function () {
    function Store(id, idCity, address, position, openTime, closeTime, rating, idFeedbacks, isPrimary) {
        this.id = id;
        this.idCity = idCity;
        this.address = address;
        this.position = position;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.rating = rating;
        this.idFeedbacks = idFeedbacks;
        this.isPrimary = isPrimary;
    }
    return Store;
}());
exports.Store = Store;
