"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_1 = require('./question');
var QuestionComponent = (function () {
    function QuestionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "selectedCategoryId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof question_1.IQuestion !== 'undefined' && question_1.IQuestion) === 'function' && _a) || Object)
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], QuestionComponent.prototype, "questionNumber", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question',
            templateUrl: 'question.component.html',
            styleUrls: ['question.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionComponent);
    return QuestionComponent;
    var _a;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map