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
var CategoryListComponent = (function () {
    function CategoryListComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.categoryClicked = new core_1.EventEmitter();
    }
    CategoryListComponent.prototype.setGenreAndCategory = function (genreAndCategories) {
        this.genreAndCategories = genreAndCategories;
        this.onGenreClick(this.genreAndCategories[0]);
    };
    CategoryListComponent.prototype.showGenre = function (genreAndCategory) {
        return !(genreAndCategory.Genre.GenreId === this.selectedGenreAndCategory.Genre.GenreId);
    };
    CategoryListComponent.prototype.onCategoryClick = function (category) {
        this.selectedCategoryId = category.CategoryId;
        this.categoryClicked.emit(this.selectedCategoryId);
    };
    CategoryListComponent.prototype.onGenreClick = function (genreAndCategory) {
        var _this = this;
        this.selectedGenreAndCategory = genreAndCategory;
        var index = genreAndCategory.Categories.findIndex(function (cat) { return cat.CategoryId == _this.selectedCategoryId; });
        if (index < 0) {
            this.selectedCategoryId = this.selectedGenreAndCategory.Categories[0].CategoryId;
            this.categoryClicked.emit(this.selectedCategoryId);
        }
    };
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getGenreAndCategories()
            .subscribe(function (genresAndCategory) { return _this.setGenreAndCategory(genresAndCategory); }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CategoryListComponent.prototype, "selectedCategoryId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CategoryListComponent.prototype, "categoryClicked", void 0);
    CategoryListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'category-list',
            templateUrl: '../template/category-list.component.html',
            styleUrls: ['../style/category-list.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category-list.component.js.map