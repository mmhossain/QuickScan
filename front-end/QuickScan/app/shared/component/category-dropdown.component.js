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
var CategoryDropdownComponent = (function () {
    function CategoryDropdownComponent(_categoryService) {
        this._categoryService = _categoryService;
    }
    CategoryDropdownComponent.prototype.setGenreAndCategory = function (genreAndCategories) {
        this.genreAndCategories = genreAndCategories;
    };
    CategoryDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getGenreAndCategories()
            .subscribe(function (genresAndCategory) { return _this.setGenreAndCategory(genresAndCategory); }, function (error) { return _this.errorMessage = error; });
    };
    CategoryDropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'category-dropdown',
            templateUrl: '../template/category-dropdown.component.html',
            styleUrls: ['../style/category-dropdown.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], CategoryDropdownComponent);
    return CategoryDropdownComponent;
}());
exports.CategoryDropdownComponent = CategoryDropdownComponent;
//# sourceMappingURL=category-dropdown.component.js.map