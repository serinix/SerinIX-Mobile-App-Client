"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Poll = (function () {
    function Poll(id, dateStart, dateEnd, urlBanner, bannerText) {
        this.id = id;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.urlBanner = urlBanner;
        this.bannerText = bannerText;
    }
    return Poll;
}());
exports.Poll = Poll;
