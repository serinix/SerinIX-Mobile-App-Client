"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreReview = (function () {
    function StoreReview(id, idStore, user, reviewDate, reviewText, rating, advantages, disadvantages, upvotes, downvotes, reviewAnswers) {
        this.id = id;
        this.idStore = idStore;
        this.user = user;
        this.reviewDate = reviewDate;
        this.reviewText = reviewText;
        this.rating = rating;
        this.advantages = advantages;
        this.disadvantages = disadvantages;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.reviewAnswers = reviewAnswers;
    }
    return StoreReview;
}());
exports.StoreReview = StoreReview;
