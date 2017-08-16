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
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.hideDropdown = true;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        //console.log(this.selectedItem);
        //console.log(this.items);
    };
    DropdownComponent.prototype.getWrapperClass = function () {
        switch (this.controlSpace) {
            case 'question-search-page':
                return 'category-dropdown-for-question-search';
            case 'question-add-page':
                return 'category-dropdown-for-create-question';
            default:
                return 'category-dropdown-for-question-search';
        }
    };
    DropdownComponent.prototype.toggleDropdown = function () {
        this.hideDropdown = !this.hideDropdown;
        event.stopPropagation();
    };
    DropdownComponent.prototype.showDropdown = function () {
        this.hideDropdown = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "controlSpace", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropdown',
            templateUrl: '../template/dropdown.component.html',
            styleUrls: ['../style/dropdown.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map