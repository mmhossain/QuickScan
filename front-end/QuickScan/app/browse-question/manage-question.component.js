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
var category_service_1 = require('./category.service');
var ManageQuestionComponent = (function () {
    function ManageQuestionComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.hideAddQuestionForm = true;
        this.controlSpace = 'question-search-page';
        this.categoryData = [];
        this.placeholder = 'Select a Category';
    }
    // setCategoryData(genreCats: IGenreAndCategory[]): void {
    //     if(genreCats && genreCats.length > 0) {
    //         this.selectedCategory = new DropdownItem(genreCats[0].Categories[0].CategoryId, genreCats[0].Categories[0].Title, genreCats[0].Categories[0].Priority);
    //         this.categoryData.push(new DropdownData(new OptGroup('All Categories', 0), []));
    //         genreCats.map((value, index) => {
    //             this.categoryData.push(new DropdownData(
    //                     new OptGroup(value.Genre.Title, value.Genre.Priority), 
    //                     value.Categories.map((cat, index) => new DropdownItem(cat.CategoryId, cat.Title, cat.Priority))
    //             });
    //         );
    //     }
    // }
    ManageQuestionComponent.prototype.setCategoryData = function (categories) {
        var _this = this;
        if (categories && categories.length > 0) {
            this.selectedCategory = new dropdown_item_1.DropdownItem(categories[0].CategoryId, categories[0].Title);
            this.categoryData.push(new dropdown_item_1.DropdownItem('-1', 'All Categories'));
            categories.map(function (value, index) {
                _this.categoryData.push(new dropdown_item_1.DropdownItem(value.CategoryId, value.Title));
            });
        }
    };
    ManageQuestionComponent.prototype.addQuestionClick = function () {
        this.hideAddQuestionForm = false;
    };
    ManageQuestionComponent.prototype.addQuestionClose = function (hideForm) {
        this.hideAddQuestionForm = hideForm;
    };
    ManageQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (categories) { return _this.setCategoryData(categories); }, function (error) { return _this.errorMessage = error; });
    };
    ManageQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'manage-question',
            templateUrl: 'manage-question.component.html',
            styleUrls: ['manage-question.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], ManageQuestionComponent);
    return ManageQuestionComponent;
}());
exports.ManageQuestionComponent = ManageQuestionComponent;
//# sourceMappingURL=manage-question.component.js.map