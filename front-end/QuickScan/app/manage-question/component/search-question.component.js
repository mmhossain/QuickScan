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
var SearchQuestionComponent = (function () {
    function SearchQuestionComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.hideAddQuestionForm = true;
        this.showAddQuestionForm = false;
        this.controlSpace = 'question-search-page';
        this.categories = [];
        this.placeholder = 'Select a Category';
        if (!this.question) {
            this.getDefaultQuestion();
        }
    }
    SearchQuestionComponent.prototype.getDefaultQuestion = function () {
        this.question = {
            QuestionId: '', GenreId: '', Level: '1', Type: '1', CategoryId: 'csharp', Title: '',
            Options: [
                { optionId: 'csharp-q1-o1', text: 'System.Object' },
                { optionId: 'csharp-q1-o2', text: 'System.Math' }
            ]
        };
    };
    SearchQuestionComponent.prototype.addQuestion = function () {
        this.getDefaultQuestion();
        this.hideAddQuestionForm = false;
    };
    SearchQuestionComponent.prototype.addQuestionClose = function (hideForm) {
        this.getDefaultQuestion();
        this.hideAddQuestionForm = hideForm;
    };
    SearchQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    SearchQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-question',
            templateUrl: '../template/search-question.component.html',
            styleUrls: ['../style/search-question.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], SearchQuestionComponent);
    return SearchQuestionComponent;
}());
exports.SearchQuestionComponent = SearchQuestionComponent;
//# sourceMappingURL=search-question.component.js.map