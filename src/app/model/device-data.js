"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceData = (function () {
    function DeviceData(model, os, height, width, pushDeviceToken, userToken) {
        this.model = model;
        this.os = os;
        this.height = height;
        this.width = width;
        this.pushDeviceToken = pushDeviceToken;
        this.userToken = userToken;
    }
    return DeviceData;
}());
exports.DeviceData = DeviceData;
