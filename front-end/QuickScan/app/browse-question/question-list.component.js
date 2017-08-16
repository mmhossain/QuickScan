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
var question_service_1 = require('./question.service');
var QuestionListComponent = (function () {
    function QuestionListComponent(_questionService) {
        this._questionService = _questionService;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        // this._questionService.getQuestions(this.selectedCategoryId)
        //     .subscribe(questions => this.questions = questions,
        //                 error => this.errorMessage = <any>error);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], QuestionListComponent.prototype, "selectedCategoryId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], QuestionListComponent.prototype, "questions", void 0);
    QuestionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'question-list',
            templateUrl: 'question-list.component.html'
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], QuestionListComponent);
    return QuestionListComponent;
}());
exports.QuestionListComponent = QuestionListComponent;
//# sourceMappingURL=question-list.component.js.map