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
var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
        this._questionUrl = './app/asset/api/question/question-feed-csharp.json';
        this._categoryApiUrl = 'http://localhost:25624/api/categories/v1';
        this._questionApiUrl = 'http://localhost:25624/api/questions/v1';
    }
    QuestionService.prototype.getQuestions = function (categoryId) {
        var url = './app/asset/api/question/question-feed-' + categoryId + '.json';
        return this._http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.getCategories = function () {
        return this._http.get(this._categoryApiUrl + '/allcategories')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    QuestionService.prototype.saveQuestion = function (question) {
        var options = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(question),
            url: this._questionApiUrl + '/savequestion',
            withCredentials: false
        });
        return this._http.request(new http_1.Request(options))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // saveQuestion(question: IQuestion):  Observable<IQuestion> {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json' );
    //     let url = this._questionApiUrl + '/savequestion';
    //     let q = { 'CategoryId': 'csharp' };
    //     let body = JSON.stringify(question);
    //     let jsonBody = body.substring(1, body.length - 1);
    //     return this._http.get('/questionsbycategory/csharp')
    //         .map((response: Response) => <IQuestion>response.json());
    // }
    QuestionService.prototype.getCategoryByCategory = function (categoryId) {
        return this._http.get(this._categoryApiUrl + '/getcategorybyid/' + categoryId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map