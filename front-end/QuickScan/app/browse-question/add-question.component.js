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
var dropdown_item_1 = require('../shared/dropdown-item');
var question_1 = require('./question');
var category_service_1 = require('./category.service');
var AddQuestionComponent = (function () {
    function AddQuestionComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.controlSpace = 'question-add-page';
        this.categoryData = [];
        this.questionTypes = [];
        this.questionLevels = [];
        this.categoryPlaceholder = 'Select a Category';
        this.typePlaceholder = 'Select a Type';
        this.levelPlaceholder = 'Select a Level';
        this.formCloseEvent = new core_1.EventEmitter();
        this.questionTypes.push(new dropdown_item_1.DropdownItem('1', 'Single Select'));
        this.questionTypes.push(new dropdown_item_1.DropdownItem('2', 'Multi Select'));
        this.questionLevels.push(new dropdown_item_1.DropdownItem('1', 'Beginner'));
        this.questionLevels.push(new dropdown_item_1.DropdownItem('2', 'Intermediate'));
        this.questionLevels.push(new dropdown_item_1.DropdownItem('3', 'Expert'));
    }
    AddQuestionComponent.prototype.setCategoryData = function (categories) {
        var _this = this;
        if (categories && categories.length > 0) {
            this.selectedCategory = new dropdown_item_1.DropdownItem(categories[0].CategoryId, categories[0].Title);
            categories.map(function (value, index) {
                _this.categoryData.push(new dropdown_item_1.DropdownItem(value.CategoryId, value.Title));
            });
        }
    };
    AddQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (categories) { return _this.setCategoryData(categories); }, function (error) { return _this.errorMessage = error; });
    };
    AddQuestionComponent.prototype.onSave = function () {
        this.closeForm();
    };
    AddQuestionComponent.prototype.onCancel = function () {
        this.closeForm();
    };
    AddQuestionComponent.prototype.closeForm = function () {
        this.hideAddQuestionForm = true;
        this.formCloseEvent.emit(this.hideAddQuestionForm);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AddQuestionComponent.prototype, "hideAddQuestionForm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof question_1.IQuestion !== 'undefined' && question_1.IQuestion) === 'function' && _a) || Object)
    ], AddQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddQuestionComponent.prototype, "formCloseEvent", void 0);
    AddQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-question',
            templateUrl: 'add-question.component.html',
            styleUrls: ['add-question.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], AddQuestionComponent);
    return AddQuestionComponent;
    var _a;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=add-question.component.js.map