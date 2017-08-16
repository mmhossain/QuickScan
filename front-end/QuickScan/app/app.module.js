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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./home/component/welcome.component');
var browse_question_component_1 = require('./browse-question/component/browse-question.component');
var question_list_component_1 = require('./browse-question/component/question-list.component');
var add_question_component_1 = require('./manage-question/component/add-question.component');
var manage_question_component_1 = require('./manage-question/component/manage-question.component');
var question_module_1 = require('./module/question.module');
var category_service_1 = require('./service/category.service');
var question_service_1 = require('./service/question.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'browse-question', component: browse_question_component_1.BrowseQuestionComponent },
                    { path: 'manage-question', component: manage_question_component_1.ManageQuestionComponent },
                    { path: 'add-question', component: add_question_component_1.AddQuestionComponent },
                    { path: 'question-list/:categoryId', component: question_list_component_1.QuestionListComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ], { useHash: true }),
                question_module_1.QuestionModule
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent
            ],
            providers: [
                category_service_1.CategoryService,
                question_service_1.QuestionService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map