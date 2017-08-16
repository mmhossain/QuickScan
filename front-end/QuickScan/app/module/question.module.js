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
var router_1 = require('@angular/router');
var browse_question_component_1 = require('../browse-question/component/browse-question.component');
var category_list_component_1 = require('../shared/component/category-list.component');
var question_list_component_1 = require('../browse-question/component/question-list.component');
var question_component_1 = require('../browse-question/component/question.component');
var add_question_component_1 = require('../manage-question/component/add-question.component');
var manage_question_component_1 = require('../manage-question/component/manage-question.component');
var search_question_component_1 = require('../manage-question/component/search-question.component');
var category_dropdown_component_1 = require('../shared/component/category-dropdown.component');
var shared_module_1 = require('../module/shared.module');
var QuestionModule = (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule
            ],
            declarations: [
                browse_question_component_1.BrowseQuestionComponent,
                category_list_component_1.CategoryListComponent,
                question_list_component_1.QuestionListComponent,
                question_component_1.QuestionComponent,
                add_question_component_1.AddQuestionComponent,
                manage_question_component_1.ManageQuestionComponent,
                search_question_component_1.SearchQuestionComponent,
                category_dropdown_component_1.CategoryDropdownComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionModule);
    return QuestionModule;
}());
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=question.module.js.map