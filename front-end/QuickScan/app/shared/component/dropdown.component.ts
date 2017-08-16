import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dropdown',
    templateUrl: '../template/dropdown.component.html',
    styleUrls: [ '../style/dropdown.component.css' ]
})
export class DropdownComponent {
    @Input() selectedItem: any;
    @Input() items: any[];
    @Input() placeholder: string;
    @Input() controlSpace: string;

    hideDropdown: boolean = true;

    ngOnInit(): void {
        //console.log(this.selectedItem);
        //console.log(this.items);
    }

    getWrapperClass(): string {
        switch(this.controlSpace) {
            case 'question-search-page':
                return 'category-dropdown-for-question-search';
            case 'question-add-page':
                return 'category-dropdown-for-create-question';
            default:
                return 'category-dropdown-for-question-search';
        }
    }

    toggleDropdown(): void {
        this.hideDropdown = !this.hideDropdown;
        event.stopPropagation();
    }

    showDropdown(): void {
        this.hideDropdown = false;
    }
}