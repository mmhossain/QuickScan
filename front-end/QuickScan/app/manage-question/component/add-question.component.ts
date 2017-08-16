import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { IDropdownData, DropdownData, IOptGroup, OptGroup } from '../../model/dropdown-data';
import { IDropdownItem, DropdownItem } from '../../model/dropdown-item';
import { ICategory } from '../../model/category';
import { IQuestion } from '../../model/question';
import { CategoryService } from '../../service/category.service';
import { QuestionService } from '../../service/question.service';

@Component({
    moduleId: module.id,
    selector: 'add-question',
    templateUrl: '../template/add-question.component.html',
    styleUrls: [ '../style/add-question.component.css' ]
})
export class AddQuestionComponent implements OnInit {
    errorMessage: string;
    controlSpace: string = 'question-add-page';
    
    @Input() categories: ICategory[];
    @Input() hideAddQuestionForm: boolean;
    @Input() question: IQuestion;

    @Output() formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _questionService: QuestionService, private _categoryService: CategoryService) { }

    ngOnInit(): void {
        
    }

    saveQuestion(): void {
        this._questionService.saveQuestion(this.question)
            .subscribe(question => console.log(question),
                       error => this.errorMessage = <any>error);

        this.closeForm();
    }

    addOption(): void {
        let optId = this.question.QuestionId + '-o' + (this.question.Options.length + 1);
        this.question.Options.push({ optionId: optId, text: '' });
    }

    removeOption(optionId: string): void {
        let index = this.question.Options.findIndex(opt => opt.optionId === optionId);
        this.question.Options.splice(index, 1);
    }

    optionType(): string {
        switch(this.question.Type) {
            case '1': 
                return 'radio';
            case '2': 
                return 'checkbox';
            default: 
                return 'radio';
        }
    }

    cancel(): void {
        this.closeForm();
    }

    closeForm(): void {
        this.hideAddQuestionForm = true;
        this.formCloseEvent.emit(this.hideAddQuestionForm);
    }
}