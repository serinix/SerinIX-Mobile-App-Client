"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientPollAnswer = (function () {
    function ClientPollAnswer(id, idClient, idPoll, idPollQuestions, clientAnswer) {
        this.id = id;
        this.idClient = idClient;
        this.idPoll = idPoll;
        this.idPollQuestions = idPollQuestions;
        this.clientAnswer = clientAnswer;
    }
    return ClientPollAnswer;
}());
exports.ClientPollAnswer = ClientPollAnswer;
