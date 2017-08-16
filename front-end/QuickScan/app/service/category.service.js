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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var CategoryService = (function () {
    function CategoryService(_http) {
        this._http = _http;
        //private _categoryUrl = './app/asset/api/question/category-feed.json';
        this._categoryUrl = 'http://localhost:25624/api/categories/v1';
        this._questionApiUrl = 'http://localhost:25624/api/questions/v1';
    }
    CategoryService.prototype.orderGenreByPriority = function (values) {
        var _this = this;
        values.sort(function (a, b) {
            _this.orderCategoryByPriority(a.Categories);
            _this.orderCategoryByPriority(b.Categories);
            if (a.Genre.Priority < b.Genre.Priority) {
                return -1;
            }
            else if (a.Genre.Priority > b.Genre.Priority) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return values;
    };
    CategoryService.prototype.orderCategoryByPriority = function (values) {
        values.sort(function (a, b) {
            if (a.Priority < b.Priority) {
                return -1;
            }
            else if (a.Priority > b.Priority) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return values;
    };
    // getGenres(): Observable<IGenre[]> {
    //     return this._http.get(this._categoryUrl)
    //         .map((response: Response) => <IGenre[]>response.json().genres)
    //         //.do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    CategoryService.prototype.getGenreAndCategories = function () {
        var _this = this;
        return this._http.get(this._categoryUrl + '/allgenreswithcategories')
            .map(function (response) { return _this.orderGenreByPriority(response.json()); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategories = function () {
        return this._http.get(this._categoryUrl + '/allcategories')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.saveQuestion = function (question) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this._questionApiUrl + '/savequestion';
        var q = { 'CategoryId': 'csharp' };
        var body = JSON.stringify(question);
        var jsonBody = body.substring(1, body.length - 1);
        return this._http.post(url, { "CategoryId": "csharp" }, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map