import { Component, Input, OnInit } from '@angular/core';

import { IDropdownData, DropdownData, IOptGroup, OptGroup } from '../../model/dropdown-data';
import { IDropdownItem, DropdownItem } from '../../model/dropdown-item';
import { IGenreAndCategory } from '../../model/genre-and-category';
import { ICategory } from '../../model/category';
import { IQuestion } from '../../model/question';
import { IOption } from '../../model/option';
import { CategoryService } from '../../service/category.service';

@Component({
    moduleId: module.id,
    selector: 'search-question',
    templateUrl: '../template/search-question.component.html',
    styleUrls: [ '../style/search-question.component.css' ]
})
export class SearchQuestionComponent implements OnInit {
    errorMessage: string;
    selectedCategoryId: string;
    hideAddQuestionForm: boolean = true;
    showAddQuestionForm: boolean = false;

    controlSpace: string = 'question-search-page';
    categories: ICategory[] = [];
    selectedCategory: ICategory;
    placeholder: string = 'Select a Category';

    questions: IQuestion[];
    question: IQuestion;

    constructor(private _categoryService: CategoryService) { 
        if(!this.question) {
            this.getDefaultQuestion();
        }
    }

    getDefaultQuestion(): void {
        this.question = <IQuestion> {
                QuestionId: '', GenreId: '', Level: '1', Type: '1', CategoryId: 'csharp', Title: '', 
                Options: [
                    <IOption>{ optionId: 'csharp-q1-o1', text: 'System.Object' },
                    <IOption>{ optionId: 'csharp-q1-o2', text: 'System.Math' }
                ]
            };
    }

    addQuestion(): void {
        this.getDefaultQuestion();
        this.hideAddQuestionForm = false;
    }

    addQuestionClose(hideForm: boolean): void {
        this.getDefaultQuestion();
        this.hideAddQuestionForm = hideForm;
    }

    ngOnInit(): void {
        this._categoryService.getCategories()
            .subscribe(categories => this.categories = categories,
                        error => this.errorMessage = <any>error);
    }
}