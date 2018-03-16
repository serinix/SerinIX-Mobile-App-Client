"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = (function () {
    function Category(id, name, parent_id, id_product_cat, prefix, icon, is_show, priority_index, priority_show) {
        this.id = id;
        this.name = name;
        this.parent_id = parent_id;
        this.id_product_cat = id_product_cat;
        this.prefix = prefix;
        this.icon = icon;
        this.is_show = is_show;
        this.priority_index = priority_index;
        this.priority_show = priority_show;
    }
    return Category;
}());
exports.Category = Category;
