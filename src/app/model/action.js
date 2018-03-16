"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action = (function () {
    function Action(id, name, dateStart, dateEnd, img_url, priority, sketch_content, action_content, isActive) {
        if (isActive === void 0) { isActive = false; }
        this.id = id;
        this.name = name;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.img_url = img_url;
        this.priority = priority;
        this.sketch_content = sketch_content;
        this.action_content = action_content;
        this.isActive = isActive;
    }
    return Action;
}());
exports.Action = Action;
