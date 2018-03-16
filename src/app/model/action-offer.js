"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {RefInjector} from '../core/app-core';
var ActionOffer = (function () {
    //private _repo: AbstractDataRepository;
    function ActionOffer(id, idAction, idQuotation, idCur) {
        this.id = id;
        this.idAction = idAction;
        this.idQuotation = idQuotation;
        this.idCur = idCur;
        //this._repo = RefInjector.pull(AbstractDataRepository);
    }
    return ActionOffer;
}());
exports.ActionOffer = ActionOffer;
