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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var star_component_1 = require('../shared/component/star.component');
var dropdown_component_1 = require('../shared/component/dropdown.component');
var genre_orderby_pipe_1 = require('../shared/pipe/genre-orderby.pipe');
var category_orderby_pipe_1 = require('../shared/pipe/category-orderby.pipe');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                star_component_1.StarComponent,
                dropdown_component_1.DropdownComponent,
                genre_orderby_pipe_1.GenreSortPipe,
                category_orderby_pipe_1.CategorySortPipe
            ],
            declarations: [
                star_component_1.StarComponent,
                dropdown_component_1.DropdownComponent,
                genre_orderby_pipe_1.GenreSortPipe,
                category_orderby_pipe_1.CategorySortPipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map