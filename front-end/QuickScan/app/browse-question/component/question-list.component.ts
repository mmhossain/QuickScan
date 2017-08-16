import { Component, Input, OnInit } from '@angular/core';

import { IQuestion } from '../../model/question';
import { QuestionService } from '../../service/question.service';

@Component({
    moduleId: module.id,
    selector: 'question-list',
    templateUrl: '../template/question-list.component.html'
})
export class QuestionListComponent implements OnInit {
    errorMessage: string;
    @Input() selectedCategoryId: string;
    @Input() questions: IQuestion[];

    constructor(private _questionService: QuestionService) { }

    ngOnInit(): void {
        // this._questionService.getQuestions(this.selectedCategoryId)
        //     .subscribe(questions => this.questions = questions,
        //                 error => this.errorMessage = <any>error);
    }  
}