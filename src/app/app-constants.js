"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());
/* TODO перенести/реализовать все подобные сервисы в бекенде api/svc/....*/
AppConstants.BASE_URL = 'http://localhost:44374';
AppConstants.USE_PRODUCTION = true;
AppConstants.EMAIL_SUBSCRIPTION_ENDPOINT = 'http://www.foxtrot.com.ua/Subscription/Subscription/';
AppConstants.PRODUCT_PAGE_SIZE = 9;
AppConstants.PRODUCT_PAGELINK_SIZE = 5;
AppConstants.LOCALE_DEFAULT_VALUE = 1;
AppConstants.CURRENCY_DEFAULT_VALUE = 4;
AppConstants.MAX_LOAN_AMT = 70000;
AppConstants.MIN_LOAN_AMT = 500;
AppConstants.LOAN_DEFAULT_CURRENCY = 0;
AppConstants.MAX_BONUS_PAYMENT_REST = 1;
AppConstants.BONUS_TO_CURRENCY_RATE = 1;
AppConstants.ACTION_BONUS_TO_CURRENCY_RATE = 0.1;
AppConstants.BONUS_PMT_FOR_PRODUCT_ONLY = true;
exports.AppConstants = AppConstants;
