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
var core_1 = require("@angular/core");
var CategorySortPipe = (function () {
    function CategorySortPipe() {
    }
    CategorySortPipe.prototype.transform = function (values) {
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
    CategorySortPipe = __decorate([
        core_1.Pipe({
            name: "categoryOrderByPriority"
        }), 
        __metadata('design:paramtypes', [])
    ], CategorySortPipe);
    return CategorySortPipe;
}());
exports.CategorySortPipe = CategorySortPipe;
//# sourceMappingURL=category-orderby.pipe.js.map