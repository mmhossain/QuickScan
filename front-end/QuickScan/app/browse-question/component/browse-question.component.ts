import { Component, Input, OnInit } from '@angular/core';

import { IQuestion } from '../../model/question';
import { QuestionService } from '../../service/question.service';

@Component({
    moduleId: module.id,
    selector: 'browse-question',
    templateUrl: '../template/browse-question.component.html',
    styleUrls: [ '../style/browse-question.component.css' ]
})
export class BrowseQuestionComponent {
    errorMessage: string;
    selectedCategoryId: string;
    questions: IQuestion[];

    constructor(private _questionService: QuestionService) { }

    ngOnInit(): void {
        
    }

    onCategoryClicked(categoryId: string): boolean {
        this.selectedCategoryId = categoryId;

        this._questionService.getQuestions(this.selectedCategoryId)
            .subscribe(questions => this.questions = questions,
                        error => this.errorMessage = <any>error);
        return false;
    }
}