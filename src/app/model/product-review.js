"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductReview = (function () {
    function ProductReview(id, idProduct, user, reviewDate, reviewText, rating, advantages, disadvantages, upvotes, downvotes, reviewAnswers) {
        this.id = id;
        this.idProduct = idProduct;
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
    return ProductReview;
}());
exports.ProductReview = ProductReview;
