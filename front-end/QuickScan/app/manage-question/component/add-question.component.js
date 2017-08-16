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
var category_service_1 = require('../../service/category.service');
var question_service_1 = require('../../service/question.service');
var AddQuestionComponent = (function () {
    function AddQuestionComponent(_questionService, _categoryService) {
        this._questionService = _questionService;
        this._categoryService = _categoryService;
        this.controlSpace = 'question-add-page';
        this.formCloseEvent = new core_1.EventEmitter();
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.saveQuestion = function () {
        var _this = this;
        this._questionService.saveQuestion(this.question)
            .subscribe(function (question) { return console.log(question); }, function (error) { return _this.errorMessage = error; });
        this.closeForm();
    };
    AddQuestionComponent.prototype.addOption = function () {
        var optId = this.question.QuestionId + '-o' + (this.question.Options.length + 1);
        this.question.Options.push({ optionId: optId, text: '' });
    };
    AddQuestionComponent.prototype.removeOption = function (optionId) {
        var index = this.question.Options.findIndex(function (opt) { return opt.optionId === optionId; });
        this.question.Options.splice(index, 1);
    };
    AddQuestionComponent.prototype.optionType = function () {
        switch (this.question.Type) {
            case '1':
                return 'radio';
            case '2':
                return 'checkbox';
            default:
                return 'radio';
        }
    };
    AddQuestionComponent.prototype.cancel = function () {
        this.closeForm();
    };
    AddQuestionComponent.prototype.closeForm = function () {
        this.hideAddQuestionForm = true;
        this.formCloseEvent.emit(this.hideAddQuestionForm);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AddQuestionComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AddQuestionComponent.prototype, "hideAddQuestionForm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AddQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddQuestionComponent.prototype, "formCloseEvent", void 0);
    AddQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-question',
            templateUrl: '../template/add-question.component.html',
            styleUrls: ['../style/add-question.component.css']
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService, category_service_1.CategoryService])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=add-question.component.js.map