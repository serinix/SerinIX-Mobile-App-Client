"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PollQuestion = (function () {
    function PollQuestion(id, idPoll, order, question, answerType // List, Text ,ListText
    ) {
        this.id = id;
        this.idPoll = idPoll;
        this.order = order;
        this.question = question;
        this.answerType = answerType; // List, Text ,ListText
    }
    return PollQuestion;
}());
exports.PollQuestion = PollQuestion;
var AnswerType;
(function (AnswerType) {
    AnswerType[AnswerType["List"] = 0] = "List";
    AnswerType[AnswerType["Text"] = 1] = "Text";
    AnswerType[AnswerType["ListText"] = 2] = "ListText";
})(AnswerType = exports.AnswerType || (exports.AnswerType = {}));
