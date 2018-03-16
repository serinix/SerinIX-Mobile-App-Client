"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReviewAnswer = (function () {
    function ReviewAnswer(id, idReview, user, answerDate, answerText) {
        this.id = id;
        this.idReview = idReview;
        this.user = user;
        this.answerDate = answerDate;
        this.answerText = answerText;
    }
    return ReviewAnswer;
}());
exports.ReviewAnswer = ReviewAnswer;
