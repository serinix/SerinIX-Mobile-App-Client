"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Novelty = (function () {
    function Novelty(id, idProduct, name, img_url, priority, sketch_content, novelty_content) {
        this.id = id;
        this.idProduct = idProduct;
        this.name = name;
        this.img_url = img_url;
        this.priority = priority;
        this.sketch_content = sketch_content;
        this.novelty_content = novelty_content;
    }
    return Novelty;
}());
exports.Novelty = Novelty;
