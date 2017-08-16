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
var question_service_1 = require('../../service/question.service');
var BrowseQuestionComponent = (function () {
    function BrowseQuestionComponent(_questionService) {
        this._questionService = _questionService;
    }
    BrowseQuestionComponent.prototype.ngOnInit = function () {
    };
    BrowseQuestionComponent.prototype.onCategoryClicked = function (categoryId) {
        var _this = this;
        this.selectedCategoryId = categoryId;
        this._questionService.getQuestions(this.selectedCategoryId)
            .subscribe(function (questions) { return _this.questions = questions; }, function (error) { return _this.errorMessage = error; });
        return false;
    };
    BrowseQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'browse-question',
            templateUrl: '../template/browse-question.component.html',
            styleUrls: ['../style/browse-question.component.css']
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], BrowseQuestionComponent);
    return BrowseQuestionComponent;
}());
exports.BrowseQuestionComponent = BrowseQuestionComponent;
//# sourceMappingURL=browse-question.component.js.map