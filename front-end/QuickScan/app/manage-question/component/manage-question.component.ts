import { Component, Input, OnInit } from '@angular/core';

import { IDropdownData, DropdownData, IOptGroup, OptGroup } from '../../model/dropdown-data';
import { IDropdownItem, DropdownItem } from '../../model/dropdown-item';
import { IGenreAndCategory } from '../../model/genre-and-category';
import { ICategory } from '../../model/category';
import { IQuestion } from '../../model/question';
import { CategoryService } from '../../service/category.service';

@Component({
    moduleId: module.id,
    selector: 'manage-question',
    templateUrl: '../template/manage-question.component.html',
    styleUrls: [ '../style/manage-question.component.css' ]
})
export class ManageQuestionComponent implements OnInit {
    errorMessage: string;
    selectedCategoryId: string;
    hideAddQuestionForm: boolean = true;

    controlSpace: string = 'question-search-page';
    categoryData: IDropdownItem[] = [];
    selectedCategory: IDropdownItem;
    placeholder: string = 'Select a Category';

    questions: IQuestion[];
    question: IQuestion;

    constructor(private _categoryService: CategoryService) { }

    // setCategoryData(genreCats: IGenreAndCategory[]): void {
    //     if(genreCats && genreCats.length > 0) {
    //         this.selectedCategory = new DropdownItem(genreCats[0].Categories[0].CategoryId, genreCats[0].Categories[0].Title, genreCats[0].Categories[0].Priority);

    //         this.categoryData.push(new DropdownData(new OptGroup('All Categories', 0), []));

    //         genreCats.map((value, index) => {
    //             this.categoryData.push(new DropdownData(
    //                     new OptGroup(value.Genre.Title, value.Genre.Priority), 
    //                     value.Categories.map((cat, index) => new DropdownItem(cat.CategoryId, cat.Title, cat.Priority))
    //             });
    //         );
    //     }
    // }

    setCategoryData(categories: ICategory[]): void {
        if(categories && categories.length > 0) {
            this.selectedCategory = new DropdownItem(categories[0].CategoryId, categories[0].Title);

            this.categoryData.push(new DropdownItem('-1', 'All Categories'));

            categories.map((value, index) => {
                this.categoryData.push(new DropdownItem(value.CategoryId, value.Title))
            });
        }
    }

    addQuestionClick(): void {
        this.hideAddQuestionForm = false;
    }

    addQuestionClose(hideForm: boolean): void {
        this.hideAddQuestionForm = hideForm;
    }

    ngOnInit(): void {
        this._categoryService.getCategories()
            .subscribe(categories => this.setCategoryData(categories),
                        error => this.errorMessage = <any>error);
    }
}